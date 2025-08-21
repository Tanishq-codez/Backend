const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url == "/favicon.ico") return res.end;
  const log = `${Date.now()}: ${req.url} : new req \n`;
  // not sync for non blocking
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/": // home page
        res.end("hello from server");
        break;
      case "/contact":
        res.end("just call me baahahaha");
        break;

      default:
        res.end("error404");
        break;
    }
  });
});
// server start once outside the request handler
myServer.listen(8000, () => console.log("server start"));
