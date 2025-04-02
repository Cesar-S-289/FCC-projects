var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



app.get("/api/:date?", function (req, res) {
  let { date } = req.params
  let dateObject

  if (!date) {
    dateObject = new Date()
  } else if (!isNaN(date)) {
    dateObject = new Date(parseInt(date))
  } else {
    dateObject = new Date(date)
  }


  if (dateObject.toUTCString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }


  res.json({
    unix: dateObject.getTime(),
    utc: dateObject.toUTCString(),
  });
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
