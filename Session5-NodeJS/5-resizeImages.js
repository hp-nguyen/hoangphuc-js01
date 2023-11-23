const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = '/Users/user/Desktop/JS01/Session5-NodeJS/test/copies';
const imgExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
resizeImages(directoryPath, '/Users/user/Desktop/JS01/Session5-NodeJS/test/resized', ['.jpg']);
function resizeImages(srcDirPath, targetDirPath, imgExtensions) {
  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true });
  }
  function checkItem(itemPath) {
    const items = fs.readdirSync(itemPath);
    items.forEach(item => {
      const destinationFilePath = path.join(targetDirPath, item);
      const curItemPath = path.join(itemPath, item);
      const stats = fs.statSync(curItemPath);
      const itemExt = path.extname(curItemPath);
      if (stats.isDirectory(item)) {
        checkItem(curItemPath);
      } else if (imgExtensions.includes(itemExt)) {
        const imgData = fs.readFileSync(curItemPath);
        const image = sharp(imgData);
        image.metadata().then(metadata => {
          const newWidth = Math.round(0.7 * metadata.width);
          const newHeight = Math.round(0.7 * metadata.height);
          image.resize(newWidth, newHeight).toFile(destinationFilePath);
        });
      }
    });
  }
  checkItem(srcDirPath);
}
