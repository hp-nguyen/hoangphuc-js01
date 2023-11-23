const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function resizeImages(srcDirPath, targetDirPath, imgExtensions) {
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
        const curImgData = fs.readFileSync(curItemPath);
        const sharpImg = sharp(curImgData);
        sharpImg.metadata().then(metadata => {
          const newWidth = Math.round(0.7 * metadata.width);
          const newHeight = Math.round(0.7 * metadata.height);
          sharpImg.resize(newWidth, newHeight).toFile(destinationFilePath);
        });
      }
    });
  }
  checkItem(srcDirPath);
}

module.exports = resizeImages