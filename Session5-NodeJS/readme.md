NODEJS TOOL ENO JS COURSE
Mentor: MasterKame

# Run npm -i to install node_modules

# 1. Function readJsonFile(filePath)
- Read content of a JSON file
- Arguments:
  - filePath: absolute path of JSON file needs to read
- Return: this function will return an object containing the content of the JSON file.
- Ex:
readJsonFile('/Users/user/Desktop/JS01/Session5-NodeJS/test/myJson.json')

# 2. Function writeToJsonFile(filePath, newData)
- Write new data to a JSON file
- Arguments:
  - filePath: absolute path of JSON file needs to write
  - newData: new content needs to be added to JSON file
- Return: this function will write new data to a JSON file and not return anything.
- Ex: 
writeToJsonFile('/Users/user/Desktop/JS01/Session5-NodeJS/test/myJson.json', 
{newProp: 'New value'}
);

# 3. Function searchImages(directoryPath, imgExtensions)

- Find all path of images within folder corresponding to specific file extensions.
- Arguments:
  - directoryPath: absolute path of the folder where images need to be found
  - imgExtensions: list of extensions of images need to be found. Ex: ['.jpg', '.jpeg', '.png', '.gif']
- Return: return list of path of images that found in folder.
- Ex:
searchImages('/Users/user/Desktop/JS01/Session5-NodeJS/basics', ['.jpg', '.jpeg', '.png', '.gif']);

# 4. Function copyImages(srcDirPath, targetDirPath, imgExtensions)
- Copy all images from source folder to target folder corresponding to specific file extensions
- Arguments:
  - srcDirPath: absolute path of source folder
  - targetDirPath: absolute path of target folder
  - imgExtensions: list of extensions of images need to be copied. Ex: ['.jpg', '.jpeg', '.png', '.gif']
- Return: function not return anything
- Ex: 
copyImages('/Users/user/Desktop/JS01/Session5-NodeJS/basics', '/Users/user/Desktop/JS01/Session5-NodeJS/test/copiedImgs', ['.png'])

# 5. Function resizeImages(srcDirPath, targetDirPath, imgExtensions)
- Resize all images from source folder to target folder corresponding to specific file extensions
- Arguments:
  - srcDirPath: absolute path of source folder
  - targetDirPath: absolute path of target folder
  - imgExtensions: list of extensions of images need to be resized. Ex: ['.jpg', '.jpeg', '.png', '.gif']
- Return: function not return anything
- Ex:
resizeImages(
  '/Users/user/Desktop/JS01/Session5-NodeJS/test/copiedImgs',
  '/Users/user/Desktop/JS01/Session5-NodeJS/test/resizedImgs',
  ['.png']);

# 6. Function importScripts(srcDirPath, targetDirPath, scriptExtensions)
- Create an index.js file in target folder and import all scripts from source folder to index.js
- Arguments:
  - srcDirPath: absolute path of source folder
  - targetDirPath: absolute path of target folder to create index.js file
  - scriptExtensions: list of extensions of scripts need to be imported.
      Ex: ['.js', '.ts']
- Return: function not return anything
- Ex:
importScripts(
'/Users/user/Desktop/JS01/Session5-NodeJS/test/src',
'Session5-NodeJS/test',
['.js', '.ts']
);