const fs = require("fs");
const path = require("path");

let fileName = path.resolve(__dirname, "temp.txt");

// 读取文件
// 缺点，文件较大时，比较占用内存
// fs.readFile(fileName, (err, data) => {
//   if (err) return console.log(err);

// data 是二进制数据，需要转为字符串
//   console.log(data.toString());
// });

// 写入数据
// 缺点，一次性写入非常大的数据，或频繁操作写入会影响性能
// let content = `写入内容：${Math.ceil(
//   Math.random() * 100
// )}，写入时间：${new Date().toUTCString()}\n`;

// let opts = {
//   flag: "a" // a 代表 append  w 代表写入
// };

// fs.writeFile(fileName, content, opts, err => {
//   if (err) return console.error(err);
// });

// 判断文件是否存在
fs.exists(fileName, exisit => {
  console.log("file exsists,", exisit);
});
