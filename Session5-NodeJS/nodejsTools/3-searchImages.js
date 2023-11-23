const fs = require('fs');
const path = require('path');

function searchImages(directoryPath, imgExtensions) {
  const result = [];
  function checkItem(itemPath) {
    const items = fs.readdirSync(itemPath);
    items.forEach(item => {
      const curItemPath = path.join(itemPath, item);
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
module.exports = searchImages