const express = require("express");
const app = express();
const port = 8900;

// Defining the endpoint
app.get("/", (req, res) => {
  res.send("Hello World from Express server!");
});

app.get("/home", (req, res) => {
  res.send("Home page");
});

app.post("/home", (req, res) => {
  res.send("Home page via POST");
});

app.get("/filter", (req, res) => {
  res.send("Filter page");
});

app.get("/details", (req, res) => {
  res.send("Details page");
});

// Starting the server
app.listen(port, () => {
  console.log(`HelloWorld app listening on port ${port}!`);
});
