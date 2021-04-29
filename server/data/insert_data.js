const { MongoClient } = require("mongodb");
const { data } = require("./data.js");

console.log(data[5]);

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://rajiv075:d7cJpYFgIjvuX40n@cluster0.tfed9.mongodb.net/ArticlesDB?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "ArticlesDB";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("Articles");

    // Construct a document

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertMany(data);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
