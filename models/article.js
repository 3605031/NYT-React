var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  snippet: String,
  web_url: String,
  date: {
    type : Date,
    default: Date.now
  }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;