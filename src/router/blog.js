let {
  getBlogList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require("../controller/blog");
let { SuccessModel, ErrorModel } = require("../model/resModel");

let handleBlogRouter = (req, res) => {
  let method = req.method;

  if (method === "GET" && req.path === "/api/blog/list") {
    let { author, keyword } = req.query;
    let result = getBlogList(author, keyword);
    return new SuccessModel(result);
  }

  if (method === "GET" && req.path === "/api/blog/detail") {
    let { id } = req.query;
    let result = getDetail(id);
    return new SuccessModel(result);
  }

  if (method === "POST" && req.path === "/api/blog/new") {
    let { id } = req.query;
    let result = newBlog(req.body);
    return new SuccessModel(result);
  }

  if (method === "POST" && req.path === "/api/blog/update") {
    let { id } = req.query;
    let result = updateBlog(id, req.body);
    if (result) return new SuccessModel();
    else return new ErrorModel("更新博客失败");
  }

  if (method === "POST" && req.path === "/api/blog/del") {
    let { id } = req.query;
    let result = delBlog(id);
    if (result) return new SuccessModel();
    else return new ErrorModel("删除博客失败");
  }
};

module.exports = handleBlogRouter;
