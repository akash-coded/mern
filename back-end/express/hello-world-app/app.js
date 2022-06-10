const express = require("express");
const app = express();
const port = 8000;

// Defining the endpoint
app.get("/", (req, res) => {
  res.send("Hello World from Express server!");
});

// Starting the server
app.listen(port, () => {
  console.log(`HelloWorld app listening on port ${port}!`);
});
