const { exec } = require("../db/mysql");
const { escape } = require("mysql");
const { genPassword } = require("../util/cryp");

function login(username, password) {
  username = escape(username);
  password = escape(genPassword(password));

  let sql = `select username,realname from users where username=${username} and password=${password}`;
  return exec(sql).then(rows => rows[0] || {});
}

function check(username) {
  let sql = `
    select * from users where username=${escape(username)}
  `;
  return exec(sql).then(rows => {
    let row = rows[0];
    if (row) throw "registered";
    return "ok";
  });
}

function registry({ username, password, realname }) {
  username = escape(username);
  password = escape(genPassword(password));
  realname = escape(realname);
  let sql = `
    insert into users (username,\`password\`,realname) values(${username},${password},${realname})
  `;
  return exec(sql);
}

module.exports = {
  login,
  check,
  registry
};
