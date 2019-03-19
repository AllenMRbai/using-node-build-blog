const qs = require("querystring");
const handleBlogRouter = require("./src/router/blog");
const handleUserRouter = require("./src/router/user");

// 管理session数据的map
const SESSION_DATA = {};

// 获取POST请求体内的json数据
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

// 计算cookie的过期时间
function expireTime() {
  let date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  return date.toGMTString();
}

function serverHandler(req, res) {
  // let method = req.method;
  // let url = req.url;
  let [path, queryString] = req.url.split("?");
  let query = qs.parse(queryString);
  req.path = path;
  req.query = query;

  res.setHeader("Content-Type", "application/json");

  // 将cookie解析成js对象并赋值给req.cookie
  req.cookie = {};
  if (req.headers.cookie) {
    req.headers.cookie.split(";").forEach(v => {
      if (!v) return;
      let entry = v.split("=");

      let key = entry[0].trim();
      let value = entry[1].trim();
      req.cookie[key] = value;
    });
  }

  // 对cookie内的userid进行处理，并获取（或生产）session数据对象给req.session
  let { userid } = req.cookie;
  if (userid) {
    if (!SESSION_DATA[userid]) SESSION_DATA[userid] = {};
  } else {
    userid = new Date().getTime() + "_" + Math.random();
    res.setHeader(
      "Set-Cookie",
      `userid=${userid}; path=/; expires=${expireTime()}`
    );
    SESSION_DATA[userid] = {};
  }
  req.session = SESSION_DATA[userid];

  // 将POST请求body上的json解析为js对象，并赋值给req.body
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
