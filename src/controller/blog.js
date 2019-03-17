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
module.exports = {
  getBlogList,
  getDetail
};
