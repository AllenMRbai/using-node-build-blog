const { exec } = require("../db/mysql");

function loginCheck(username, password) {
  let sql = `
    select username,realname from users 
    where username='${username}' and password='${password}'
  `;
  return exec(sql).then(rows => rows[0] || {});
}

module.exports = {
  loginCheck
};
