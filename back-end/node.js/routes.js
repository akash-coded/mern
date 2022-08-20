const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello, World!");
    res.end();
  } else if (req.url == "/home") {
    res.write("<h1>Home page</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>About page</h1>");
    res.end();
  } else if (req.url == "/details") {
    res.write("<h1>Details page</h1>");
    res.end();
  } else {
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(8900, () => {
  console.log("Server listening on port 8900");
});
