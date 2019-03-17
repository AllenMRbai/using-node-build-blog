const qs = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

function serverHandler(req, res) {
  // let method = req.method;
  // let url = req.url;
  let [path, queryString] = req.url.split("?");
  let query = qs.parse(queryString);
  req.path = path;
  req.query = query;

  res.setHeader("Content-type", "application/json");

  let result;

  result = handleBlogRouter(req, res);
  if (result) {
    res.end(JSON.stringify(result));
    return;
  }

  result = handleUserRouter(req, res);
  if (result) {
    res.end(JSON.stringify(result));
    return;
  }

  res.writeHead(404, { "Content-type": "text/plain" });
  res.write("404 not found");
  res.end();
}

module.exports = serverHandler;
