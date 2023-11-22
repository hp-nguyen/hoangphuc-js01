const fs = require('fs');
const path = require('path');
const directoryPath = '/Users/user/Desktop/JS01/Session5-NodeJS/basics';
const imgExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

function searchImages(directoryPath) {
  const result = [];
  function checkItem(itemPath) {
    const items = fs.readdirSync(itemPath);
    items.forEach(item => {
      const curItemPath = path.resolve(path.join(itemPath, item));
      const stats = fs.statSync(curItemPath);
      const itemExt = path.extname(curItemPath);
      if (stats.isDirectory(item)) {
        checkItem(curItemPath);
      } else if (imgExtensions.includes(itemExt)) {
        result.push(curItemPath);
      }
    });
  }
  checkItem(directoryPath);
  return result;
}
