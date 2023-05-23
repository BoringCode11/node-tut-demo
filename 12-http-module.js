// http web server
const http = require('http');

const httpServer = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end("Welcome to our home page");
    case '/about':
      res.end("Here's little history about us")
    default:
      res.end("<h2>Ooops!! Page you're looking for is not found</h2> <a href=" / ">back home</a>")
  }
});

httpServer.listen(5000);