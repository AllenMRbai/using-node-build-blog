const { loginCheck } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

let handleUserRouter = (req, res) => {
  let method = req.method;

  if (method === "POST" && req.path === "/api/user/login") {
    let { username, password } = req.body;
    let result = loginCheck(username, password);
    if (result) return new SuccessModel();
    else return new ErrorModel("用户名或密码错误");
  }
};

module.exports = handleUserRouter;
