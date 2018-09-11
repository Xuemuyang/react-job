const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})

const app = express()

app.get('/', (req, res) => {
  res.send(`<h1>Hello World!</h1>`)
})

app.listen(9093, () => {
  console.log(`Node app start at port 9093`);
})
