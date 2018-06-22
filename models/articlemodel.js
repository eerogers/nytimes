var mongoose = require('mongoose')

var Schema = mongoose.Schema

var articlemodel = new Schema({
  title: {
    type: String,
  //  default: 'Quinchilla'
  },
  date: {
    type: String,
  //  default: 'a@b.com'
  },
  url: {
    type: String,
  //  default: 'a@b.com'
  }
})

var Article = mongoose.model('Article', articlemodel)

module.exports = Article
