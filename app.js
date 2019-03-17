const http = require("http");
const { inspect } = require("util");
const querystring = require("query-string");

const server = http.createServer((req, res) => {
  console.log(req.method + " " + req.url);
  let parsedUrl = querystring.parseUrl(req.url);
  console.log(parsedUrl);
  res.end(JSON.stringify(parsedUrl.query));
});

server.listen(3000, function() {
  console.log("start at port 3000");
});
