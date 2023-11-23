const fs = require('fs');
const path = require('path');

function importScripts(srcDirPath, targetDirPath, scriptExtensions) {
  const indexJsPath = path.join(targetDirPath, 'index.js');
  const relativeDir = path.basename(srcDirPath);

  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true });
  }

  checkItem(srcDirPath);

  function checkItem(itemPath) {
    const items = fs.readdirSync(itemPath);
    items.forEach(item => {
      const curItemPath = path.join(itemPath, item);
      const stats = fs.statSync(curItemPath);
      const itemExt = path.extname(curItemPath);
      if (stats.isDirectory(item)) {
        checkItem(curItemPath);
      } else if (scriptExtensions.includes(itemExt)) {
        let importPath = path.relative(srcDirPath, curItemPath);
        const fileName = item.slice(0, -itemExt.length);
        if (itemExt === '.ts') {
          importPath = importPath.slice(0, -3);
        }
        const newData = `import * as ${fileName} from "./${path.join(relativeDir, importPath)}";\n`;
        fs.appendFileSync(indexJsPath, newData);
      }
    });
  }
}
module.exports = importScripts;
