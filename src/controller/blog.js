function getBlogList(author, keyword) {
  return [
    {
      id: 1,
      title: "博客a",
      content: "这是博客a",
      author: "Jerry",
      createTime: 1552842253718
    },
    {
      id: 2,
      title: "博客b",
      content: "这是博客b",
      author: "Allen",
      createTime: 1552842281458
    }
  ];
}

function getDetail(id) {
  return {
    id: 1,
    title: "博客a",
    content: "这是博客a",
    author: "Jerry",
    createTime: 1552842253718
  };
}

function newBlog(blogData = {}) {
  console.log(blogData);
  return {
    id: 3
  };
}

function updateBlog(id, blogData = {}) {
  console.log(id, blogData);
  return {
    id: 3
  };
}

function delBlog(id) {
  return {
    id: 3
  };
}

module.exports = {
  getBlogList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
