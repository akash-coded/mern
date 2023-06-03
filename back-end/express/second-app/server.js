const express = require("express");
const app = express();
const port = 3000;

// Defining the endpoints
app.get("/", (req, res) => {
    res.send("This is my second server-side (backend) application with Express.js!");
});

app.get("/home", (req, res) => {
    res.send("Home page");
});

app.get("/search", (req, res) => {
    const { q, sort } = req.query;
    res.send(`Search page with query string parameters q=${q} and sort=${sort}`);
});

app.listen(port, () => {
    console.log(`Second app listening on port ${port}!`);
});