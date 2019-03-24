const fs = require("fs");
const path = require("path");
const readline = require("readline");

let filename = path.resolve(__dirname, "../../log/access.log");

let rs = fs.createReadStream(filename);

let rl = readline.createInterface({
  input: rs
});

let num = 0;
let chrome = 0;

rl.on("line", line => {
  if (!line.trim()) return;
  num++;
  let arr = line.split(" -- ");
  if (arr[3] && arr[3].indexOf("Chrome") >= 0) {
    chrome++;
  }
});

rl.on("close", () => {
  console.log("统计结果：");
  console.log("chrome数量：", chrome);
  console.log("浏览器总数数量：", num);
  console.log("占比：", chrome / num);
});
