const fs = require('fs');
const [nodePath, curJsFilePath, filePath] = process.argv;

function readJsonFile(filePath) {
  const jsonContent = fs.readFileSync(filePath);
  const obj = JSON.parse(jsonContent);
  return obj;
}

module.exports = readJsonFile