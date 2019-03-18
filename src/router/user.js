const { loginCheck } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

let handleUserRouter = (req, res) => {
  let method = req.method;

  if (method === "POST" && req.path === "/api/user/login") {
    let { username, password } = req.body;
    if (!username || !password)
      return Promise.resolve(new ErrorModel("必填项不能为空"));
    return loginCheck(username, password).then(data => {
      if (data.username) return new SuccessModel();
      else return new ErrorModel("用户名或密码错误");
    });
  }
};

module.exports = handleUserRouter;
