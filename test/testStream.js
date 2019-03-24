const http = require("http");
const fs = require("fs");
const path = require("path");

// 例子一
// 标准输入 标准输出
// process.stdin.pipe(process.stdout);

// 例子二
// req 和 res 也实现了流

// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     req.pipe(res);
//   }
// });

// server.listen(7777);

// 例子三
// 拷贝文件
// let target = path.resolve(__dirname, "temp.txt");
// let dest = path.resolve(__dirname, "temp.txt.back");
// let rs = fs.createReadStream(target);
// let ws = fs.createWriteStream(dest);
// rs.pipe(ws);
// rs.on("data", chunk => {
//   console.log(chunk.toString());
// });
// rs.on("end", () => {
//   console.log("拷贝结束");
// });

// 例子四
// 返回数据
let fileName = path.resolve(__dirname, "./temp.txt");
let server = http.createServer((req, res) => {
  if (req.method === "GET") {
    let rs = fs.createReadStream(fileName);
    rs.pipe(res);
  }
});

let port = 7777;
server.listen(port, () => {
  console.log("server start at port " + port);
});
