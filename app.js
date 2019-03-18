const qs = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

function getPostData(req) {
  return new Promise((resolve, reject) => {
    if (req.method !== "POST") return resolve({});

    if (req.headers["content-type"] !== "application/json") return resolve({});

    let result = "";
    req.on("data", chunk => {
      result += chunk;
    });

    req.on("end", () => {
      if (!result) resolve({});
      else resolve(JSON.parse(result));
    });
  });
}

function serverHandler(req, res) {
  // let method = req.method;
  // let url = req.url;
  let [path, queryString] = req.url.split("?");
  let query = qs.parse(queryString);
  req.path = path;
  req.query = query;

  res.setHeader("Content-type", "application/json");

  getPostData(req).then(body => {
    req.body = body;

    let result;

    result = handleBlogRouter(req, res);
    if (result) {
      result.then(data => {
        res.end(JSON.stringify(data));
      });
      return;
    }

    result = handleUserRouter(req, res);
    if (result) {
      result.then(data => {
        res.end(JSON.stringify(data));
      });
      return;
    }

    res.writeHead(404, { "Content-type": "text/plain" });
    res.write("404 not found");
    res.end();
  });
}

module.exports = serverHandler;
