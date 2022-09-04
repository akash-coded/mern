const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const initiateMongoServer = require("./db.js");
const userRoute = require("./foodRoute.js");
initiateMongoServer();

app.use(bodyParser.json());

// Defining the endpoint
app.get("/", (req, res) => {
  res.send(
    "Please select operations : /api/v1/login, /api/v1/register, /api/v1/products. "
  );
});

// Defining the endpoint
app.use("/api/v1", userRoute);
// Defining the endpoint
// app.post("/api/v1/login", (req, res) => {
//     res.send("Please select op1 & op2 in query parameter. ");
//   });

// Starting the server
app.listen(port, () => {
  console.log(`HelloWorld app listening on port ${port}!`);
});
