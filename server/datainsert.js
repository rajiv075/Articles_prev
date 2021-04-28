const Article = require("./models/Article.js");
var MongoClient = require("mongodb").MongoClient;
const data = require("./data/data.js");
var url =
  "mongodb+srv://rajiv075:d7cJpYFgIjvuX40n@cluster0.tfed9.mongodb.net/ArticlesDB?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  // Article.insertMany(data, function (err, res) {
  //   if (err) throw err;
  //   console.log("Number of documents inserted: " + res.insertedCount);
  //   db.close();
  // });
  console.log("Db connected");

  db.collection("Articles").insertMany(data, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
