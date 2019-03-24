const { login, check, registry } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { set } = require("../db/redis");
const xss = require("xss");

let handleUserRouter = (req, res) => {
  let method = req.method;

  // 登录
  if (method === "POST" && req.path === "/api/user/login") {
    let { username, password } = req.body;
    if (!username || !password)
      return Promise.resolve(new ErrorModel("必填项不能为空"));

    return login(username, password).then(data => {
      if (data.username) {
        req.session.username = data.username;
        req.session.realname = data.realname;
        // 同步到redis
        set(req.sessionId, req.session);

        return new SuccessModel({
          username: data.username,
          realname: data.realname
        });
      } else return new ErrorModel("用户名或密码错误");
    });
  }

  // 获取用户信息
  if (method === "GET" && req.path === "/api/user/info") {
    if (req.session.username)
      return Promise.resolve(new SuccessModel({ ...req.session }));
    else return Promise.resolve(new ErrorModel("尚未登录"));
  }

  // 登出
  if (method === "GET" && req.path === "/api/user/logout") {
    req.session = {};
    set(req.sessionId, req.session);
    return Promise.resolve(new SuccessModel());
  }

  // 注册
  if (method === "POST" && req.path === "/api/user/registry") {
    let { username, password, realname } = req.body;
    if (!username || !password || !realname)
      return Promise.resolve(new ErrorModel("必填项不能为空"));

    username = xss(username);
    realname = xss(realname);
    return check(username)
      .then(data => {
        return registry({ username, password, realname });
      })
      .then(data => {
        if (data.affectedRows == 1) {
          // 注册成功 顺便登录
          req.session.username = username;
          req.session.realname = realname;
          set(req.sessionId, req.session);

          return new SuccessModel({
            username,
            realname
          });
        } else {
          return new ErrorModel("注册失败");
        }
      })
      .catch(err => {
        if (err === "registered") {
          return new ErrorModel("该用户已被注册");
        } else {
          return new ErrorModel("注册失败");
        }
      });
  }
};

module.exports = handleUserRouter;
