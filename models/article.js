const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  url: {type: String, require: true},
  saved: { type: Boolean, required: true}
});

const article = mongoose.model("Article", articleSchema);

module.exports = Article;