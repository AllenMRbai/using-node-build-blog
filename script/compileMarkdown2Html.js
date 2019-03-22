const fs = require("fs");
const path = require("path");
const Markdown = require("markdown-to-html").Markdown;

const mdOpts = {
  template: path.resolve(__dirname, "doc.template.html")
};
const sourcePath = "./documents/";
const distPath = "./viewSrc/docs/";

function mdFactory({ fileNameWithoutExt, inputPath, outputPath }, opts) {
  let md = new Markdown();
  md.bufmax = 10 * 1024;
  md.once("end", function() {
    console.log(`${fileNameWithoutExt} ----- Done`);
  });
  md.render(inputPath, opts, err => {
    if (err) {
      return console.error(`${fileNameWithoutExt} xxxxxx Fail`);
    }
    md.pipe(fs.createWriteStream(outputPath));
  });
}

function start() {
  let fileNames;
  try {
    fileNames = fs.readdirSync("./documents/");
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }

  let reg = /\.md$/;
  fileNames = fileNames.filter(name => reg.test(name));

  fileNames.map(name => {
    let fileNameWithoutExt = name.replace(".md", "");
    let inputPath = path.resolve(sourcePath, name);
    let outputPath = path.resolve(distPath, fileNameWithoutExt + ".html");

    return mdFactory({ fileNameWithoutExt, inputPath, outputPath }, mdOpts);
  });
}

start();
