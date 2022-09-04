const mongoose = require("mongoose");

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1/food_project";
const initiateMongoServer = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to DB");
  } catch (e) {
    console.log("problem connecting to database " + JSON.stringify(e));
    throw e;
  }
};

module.exports = initiateMongoServer;
