const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const port = 3300;
const app = express();
const mongourl = "mongodb://127.0.0.1:27017/";

MongoClient.connect(mongourl, (err, client) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log("Connected to mongodb at " + mongourl);
  });
});
