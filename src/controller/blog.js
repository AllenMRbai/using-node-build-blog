const { exec } = require("../db/mysql");

function getBlogList(author, keyword) {
  let sql = "select * from blogs where 1=1 ";
  if (author) sql += `and author=\'${author}\' `;
  if (keyword) sql += `and title like \'%${keyword}%\' `;
  sql += "order by createtime desc";
  return exec(sql);
}

function getDetail(id) {
  let sql = `select * from blogs where id='${id}'`;
  return exec(sql).then(data => data[0]);
}

function newBlog({ title, content, author } = {}) {
  let createtime = new Date().getTime();
  let sql = `insert into blogs(title,content,author,createtime) 
  values('${title}','${content}','${author}' ,'${createtime}')`;
  return exec(sql);
}

function updateBlog({ title, content, author, id } = {}) {
  console.log(title, content, author, id);
  let sql = `update blogs set title='${title}',content='${content}',author='${author}' where id='${id}'`;
  return exec(sql);
}

function delBlog(id, author) {
  let sql = `delete from blogs where id='${id}' and author='${author}'`;
  return exec(sql);
}

module.exports = {
  getBlogList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
