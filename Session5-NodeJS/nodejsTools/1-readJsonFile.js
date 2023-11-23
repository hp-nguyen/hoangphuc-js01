const fs = require('fs');

function readJsonFile(filePath) {
  const jsonContent = fs.readFileSync(filePath);
  const obj = JSON.parse(jsonContent);
  return obj;
}

module.exports = readJsonFile