// 练习mysql连接数据库并进行操作
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "123",
  database: "myblog"
});

connection.connect();

let sql = "select * from users";
connection.query(sql, (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
});

connection.end();
