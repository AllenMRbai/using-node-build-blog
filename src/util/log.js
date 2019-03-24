const fs = require("fs");
const path = require("path");

let logFolder = path.resolve(__dirname, "../../log");

let opts = {
  flags: "a"
};

function createWriteStream(filename) {
  filename = path.resolve(logFolder, filename);
  return fs.createWriteStream(filename, opts);
}

function write(writeStream, log) {
  writeStream.write(log + "\n");
}

let accessStream = createWriteStream("access.log");
function access(log) {
  write(accessStream, log);
}

module.exports = {
  access
};
