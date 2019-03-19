const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

let handleUserRouter = (req, res) => {
  let method = req.method;

  if (method === "GET" && req.path === "/api/user/login") {
    let { username, password } = req.query;

    if (!username || !password)
      return Promise.resolve(new ErrorModel("必填项不能为空"));

    return login(username, password).then(data => {
      if (data.username) {
        req.session.username = data.username;
        req.session.realname = data.realname;
        return new SuccessModel({
          username: data.username,
          realname: data.realname
        });
      } else return new ErrorModel("用户名或密码错误");
    });
  }

  if (method === "GET" && req.path === "/api/user/login-test") {
    if (req.session.username)
      return Promise.resolve(new SuccessModel({ ...req.session }));
    else return Promise.resolve(new ErrorModel("尚未登录"));
  }
};

module.exports = handleUserRouter;
