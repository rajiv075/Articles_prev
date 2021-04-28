const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ArticleSchema = new Schema({
  Article_Link: {
    type: String,
    required: true,
  },
  Article_Title: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Topic: {
    type: String,
    required: true,
  },
});
module.exports = Article = mongoose.model("articles", ArticleSchema);
