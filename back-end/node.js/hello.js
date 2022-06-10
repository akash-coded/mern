// Load the HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create the HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  res.end("Hello World from pure node server!\n");
});

// Start the server
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
