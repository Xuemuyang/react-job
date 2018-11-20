const express = require('express')
const Router = express.Router()
const model = require('./model')
const utility = require('utility')
const User = model.getModel('user')

Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})

Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body
  User.findOne({ user }, (err, doc) => {
    if (doc) {
      return res.json({ code: 1, msg: '用户名重复' })
    }
    User.create({ user, type, pwd: md5Pwd(pwd) }, (err, doc) => {
      if (err) {
        return res.json({ code: 1, msg: '后端出错了'})
      }
      return res.json({ code: 0 })
    })
  })
})

function md5Pwd(pwd) {
  const salt = 'its_real_like_a_dream'
  return utility.md5(utility.md5(pwd + salt))
}

Router.get('/info', (req, res) => {
  return res.json({code : 1})
})

module.exports = Router
