const http = require("http");
const { inspect } = require("util");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  let method = req.method;
  let [path, querystring] = req.url.split("?");
  let query = qs.parse(querystring);

  let result = {
    method,
    path,
    query
  };

  res.setHeader("Content-type", "application/json");

  if (method === "GET") {
    res.end(JSON.stringify(result));
    return;
  }

  if (method === "POST") {
    let postData = "";
    req.on("data", chunk => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      result.postData = postData;
      res.end(JSON.stringify(result));
    });
  }
});

server.listen(3000, function() {
  console.log("start at port 3000");
});
