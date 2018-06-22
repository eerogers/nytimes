var Router = require('express').Router()
var db = require('../models')

Router.get('/articles', function (req, res) {
  db.User.find({})
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      console.log(e)
    })
})
Router.get('/articles/:id', function (req, res) {
  // req.params.id
  db.User.findById(req.params.id)
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      console.log(e)
    })
})

Router.post('/articles', function (req, res) {
  db.User.create({
    title: req.body.title,
    date: req.body.date,
    url: req.body.link
  })
    .then(r => {
      res.json(r)
    })
    .catch(e => {
      console.log(e)
    })
})

// Router.put('/users:id', function (req, res) {
//   // req.params.id
// })

// Router.delete('/users', function (req, res) {

// })
// Router.delete('/users:id', function (req, res) {
//   // req.params.id
// })

module.exports = Router
