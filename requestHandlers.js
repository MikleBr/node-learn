const fs = require("fs");

function mainPage(res) {
  res.writeHeader(200, "Content-Type", "text/plain");
  res.end("Main page");
}

function file(res) {
    console.log('Обработчик работает...')
  res.writeHeader(200, "Content-Type", "text/plain");
  fs.createReadStream(__dirname + "/hello.txt").pipe(res);
}

exports.mainPage = mainPage;
exports.file = file;
