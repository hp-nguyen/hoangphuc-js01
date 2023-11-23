const fs = require('fs');
const path = require('path');

function copyImages(srcDirPath, targetDirPath, imgExtensions) {
  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true });
  }
  function checkItem(itemPath) {
    const items = fs.readdirSync(itemPath);
    items.forEach(item => {
      const curItemPath = path.join(itemPath, item);
      const stats = fs.statSync(curItemPath);
      const itemExt = path.extname(curItemPath);
      if (stats.isDirectory(item)) {
        checkItem(curItemPath);
      } else if (imgExtensions.includes(itemExt)) {
        const destinationFilePath = path.join(targetDirPath, item);
        fs.copyFileSync(curItemPath, destinationFilePath);
      }
    });
  }
  checkItem(srcDirPath);
}

module.exports = copyImages;
