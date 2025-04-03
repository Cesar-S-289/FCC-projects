require('dotenv').config();
const dns = require('node:dns')
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
const { stringify } = require('node:querystring');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })


app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const urlSchema = mongoose.Schema({
  original_url: String,
  short_url: Number
})
const UrlModel = mongoose.model('URL', urlSchema)

app.post('/api/shorturl', (req, res) => {
  //this work
  const url = new URL(req.body.url)
  dns.lookup(url.hostname, async (err, address) => {
    if (!address) {
      return res.json({ error: 'invalid url' })
    } else {
      const shortUrl = await UrlModel.countDocuments({}) + 1
      const newUrl = new UrlModel({ original_url: url, short_url: shortUrl })
      try {
        await newUrl.save()
      } catch (err) {
        console.log('Error on save')
      }

      res.json({ original_url: url, short_url: shortUrl });
    }
  })


});

app.get('/api/shorturl/:shortUrl', async (req, res) => {
  const { shortUrl } = req.params

  try {
    const urlSaved = await UrlModel.findOne({ short_url: shortUrl })
    res.redirect(urlSaved.original_url)
  } catch (err) {
    console.log('somenthing go wrong')
    console.log(err)
  }
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
