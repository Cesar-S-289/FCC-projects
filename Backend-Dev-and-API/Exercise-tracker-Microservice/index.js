const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })


// $gte y $lte para filtrar el numero

// create schemas and objects 
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }
})
const UserObj = mongoose.model('users', userSchema)
const excerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: Number,
  user_id: String
})
const ExerciseObj = mongoose.model('excercise', excerciseSchema)



app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/api/users', async (req, res) => {

  try {
    const users = await UserObj.find({}).select({ username: 1, _id: 1 })
    res.json(users)
  } catch (error) {
    console.log(err)
    res.send('something go wrong')
  }
})

app.post('/api/users', async (req, res) => {
  const { username } = req.body
  const newUser = new UserObj({ username })
  try {
    const response = await newUser.save()
    res.json(response)
  } catch (error) {
    console.log(error)
    res.send('something go wrong')
  }
})

app.post('/api/users/:_id/exercises', async (req, res) => {
  const id = req.params._id
  const { date, description, duration } = req.body

  let dateWork
  if (!date) {
    dateWork = new Date().toDateString()
  } else {
    dateWork = new Date(date).toDateString()
  }

  const userRegister = await UserObj.findById(id)
  if (!userRegister) return res.send('user not found')
  try {
    const newExercise = new ExerciseObj({
      username: userRegister.username,
      description,
      duration,
      date: Date.parse(dateWork),
      user_id: id
    })

    const result = await newExercise.save()
    res.json({
      username: result.username,
      description: result.description,
      duration: result.duration,
      date: dateWork,
      _id: result.user_id
    })

  } catch (error) {

    console.log(error)
    res.send('something go wrong')
  }
})

app.get('/api/users/:_id/logs', async (req, res) => {
  const { from, to, limit } = req.query
  const id = req.params._id
  const user = await UserObj.findById(id)
  if (!user) return res.send('Sorry, user not found')
  let objectFilter = {}
  if (from) {
    objectFilter["$gte"] = Date.parse(from)
  }
  if (to) {
    objectFilter["$lte"] = Date.parse(to)
  }

  let filter = {
    user_id: id
  }

  if (from || to) {
    filter.date = objectFilter;
  }

  const exercises = await ExerciseObj.find(filter).limit(parseInt(limit) ?? 100)
  const log = exercises.map((element) => ({
    description: element.description,
    duration: element.duration,
    date: new Date(element.date).toDateString()
  }))

  res.json({
    username: user.username,
    count: log.length,
    _id: user._id,
    log
  })
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
