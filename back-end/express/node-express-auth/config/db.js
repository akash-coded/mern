const mongoose = require("mongoose");

const MONGOURI = "mongodb://127.0.0.1/node-express-auth";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB.");
  } catch (e) {
    console.log("Couldn't connect to Mongo DB!" + e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
