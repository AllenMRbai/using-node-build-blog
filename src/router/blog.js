let {
  getBlogList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require("../controller/blog");
let { SuccessModel, ErrorModel } = require("../model/resModel");

// 验证是否登录
function loginCheckResult(req) {
  if (!req.session.username) return new ErrorModel("尚未登录");
}

let handleBlogRouter = (req, res) => {
  let method = req.method;

  if (method === "GET" && req.path === "/api/blog/list") {
    let { author, keyword } = req.query;
    return getBlogList(author, keyword).then(data => new SuccessModel(data));
  }

  if (method === "GET" && req.path === "/api/blog/detail") {
    let { id } = req.query;
    return getDetail(id).then(data => new SuccessModel(data));
  }

  if (method === "POST" && req.path === "/api/blog/new") {
    let loginResult = loginCheckResult(req);
    if (loginResult) return loginResult;

    req.body.author = req.session.username;
    let { title, content, author } = req.body;
    if (!title || !content || !author)
      return Promise.resolve(new ErrorModel("必填项不能为空"));
    return newBlog({ title, content, author }).then(data => {
      if (data.affectedRows == 1)
        return new SuccessModel({ id: data.insertId });
      else return new ErrorModel("创建失败");
    });
  }

  if (method === "POST" && req.path === "/api/blog/update") {
    let loginResult = loginCheckResult(req);
    if (loginResult) return loginResult;

    let { title, content, author, id } = req.body;
    if (!id) return Promise.resolve(new ErrorModel("id不能为空"));
    return updateBlog({ title, content, author, id }).then(data => {
      console.log(data);
      if (data.affectedRows == 1) return new SuccessModel("更新成功");
      else return new ErrorModel("更新博客失败");
    });
  }

  if (method === "POST" && req.path === "/api/blog/del") {
    let loginResult = loginCheckResult(req);
    if (loginResult) return loginResult;

    req.body.author = req.session.username;
    let { id, author } = req.body;
    return delBlog(id, author).then(data => {
      if (data.affectedRows == 1) return new SuccessModel("删除成功");
      else return new ErrorModel("删除失败");
    });
  }
};

module.exports = handleBlogRouter;
