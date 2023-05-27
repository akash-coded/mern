const http = require("http");
const fs = require("fs");

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
    fs.readFile('details.html', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(html);
      res.end();
    });
  } else {
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
