const fs = require('fs');
// const path = require('path');

const directoryPath = './assets';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Lỗi khi đọc thư mục:', err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
