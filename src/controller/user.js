const { exec } = require("../db/mysql");

function login(username, password) {
  let sql = `
    select username,realname from users 
    where username='${username}' and password='${password}'
  `;
  return exec(sql).then(rows => rows[0] || {});
}

function check(username) {
  let sql = `
    select * from users where username='${username}'
  `;
  return exec(sql).then(rows => {
    let row = rows[0];
    if (row) throw "registered";
    return "ok";
  });
}

function registry({ username, password, realname }) {
  // 这里需要做一些escape 防止sql注入
  // 暂时简单得写
  let sql = `
    insert into users (username,\`password\`,realname) values('${username}','${password}','${realname}')
  `;
  return exec(sql);
}

module.exports = {
  login,
  check,
  registry
};
