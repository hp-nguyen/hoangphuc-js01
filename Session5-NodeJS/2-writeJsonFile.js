const fs = require('fs');
const readJsonFile = require('./1-readJsonFile');

function writeToJsonfile(filePath, newData) {
  const curData = readJsonFile(filePath);
  const fileData = Object.assign(curData, newData);
  fs.writeFileSync(filePath, JSON.stringify(fileData));
}

module.exports = writeToJsonfile;
