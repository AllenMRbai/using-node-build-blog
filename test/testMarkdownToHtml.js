var fs = require("fs");
var path = require("path");
var Markdown = require("markdown-to-html").Markdown;
var md = new Markdown();
md.bufmax = 2048;
var fileName = path.resolve(__dirname, "test.md");
var opts = {
  template: path.resolve(__dirname, "template.html")
};

// Write a header.
console.log("===============================");
// Write a trailer at eof.
md.once("end", function() {
  console.log("===============================");
});
md.render(fileName, opts, function(err) {
  if (err) {
    console.error(">>>" + err);
    process.exit();
  }
  md.pipe(fs.createWriteStream(path.resolve(__dirname, "test.html")));
});
