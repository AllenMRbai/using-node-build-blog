let { getBlogList, getDetail } = require("../controller/blog");
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
    return new SuccessModel(req.body);
  }

  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "新建博客"
    };
  }

  if (method === "POST" && req.path === "/api/blog/del") {
    return {
      msg: "删除博客"
    };
  }

  if (method === "POST" && req.path === "/api/blog/update") {
    return {
      msg: "更新博客"
    };
  }
};

module.exports = handleBlogRouter;
