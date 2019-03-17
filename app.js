const qs = require("querystring");

function serverHandler(req, res) {
  let method = req.method;
  let url = req.url;
  let [path, queryString] = req.url.split("?");
  let query = qs.parse(queryString);

  res.setHeader("Content-type", "application/json");

  let result = {
    method,
    url,
    path,
    queryString,
    query
  };

  res.end(JSON.stringify(result));
}

module.exports = serverHandler;
