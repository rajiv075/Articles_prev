const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const { MongoClient } = require("mongodb");
const { data } = require("./data/data.js");
const cors = require("cors");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
const { post } = require("./routes/api/users");
const client = new MongoClient(db);
const dbName = "ArticlesDB";
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB successfully connected");
    const dbName = "ArticlesDB";
    async function run() {
      try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "Articles"
        const col = db.collection("Articles");

        const result = await col.deleteMany();

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
  })
  .catch((err) => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const db1 = mongoose.connection;
    const coll = db1.collection("Articles");
    const total = await coll.countDocuments({});
    console.log("jjj:", total);
    console.log(page);
    const posts = await coll
      .find()
      .limit(PAGE_SIZE)
      .skip(PAGE_SIZE * page);

    console.log(Articles);
    res.json({
      totalPages: Math.ceil(total / PAGE_SIZE),
      Articles,
    });
  } catch (error) {
    console.log(error.message);
  }
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
