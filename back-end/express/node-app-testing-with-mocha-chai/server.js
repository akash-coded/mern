let express = require("express");
let app = express();
let mongoose = require("mongoose");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let book = require("./app/routes/book");
let config = require("config"); //we load the db location from the JSON files

let port = 3000;

//db connection
mongoose.connect(config.DBHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

//don't show the log when it is test
if (config.util.getEnv("NODE_ENV") !== "test") {
  //use morgan to log at command line
  app.use(morgan("combined")); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) =>
  res.json({
    message: "Welcome to Akash's Bookstore!",
  })
);

app.route("/book").get(book.getBooks).post(book.postBook);
app
  .route("/book/:id")
  .get(book.getBook)
  .delete(book.deleteBook)
  .put(book.updateBook);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
