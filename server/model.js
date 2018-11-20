const mongoose = require('mongoose')
const { DB_URL } = require('./config')

mongoose.connect(DB_URL)

const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    avatar: { type: String },
    desc: { type: String },
    title: { type: String },
    company: { type: String },
    money: { type: String }
  },
  chat: {
  }
}

for (let [key, value] of Object.entries(models)) {
  mongoose.model(key, new mongoose.Schema(value))
}

const getModel = function(name) {
  return mongoose.model(name)
}

module.exports = {
  getModel
}
