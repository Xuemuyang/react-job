const mongoose = require('mongoose')
const { DB_URL } = require('./config')

mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})
