function getFileExtension(fileName) {
  const [name, extension] = fileName.split('.');
  return extension;
}

console.log(getFileExtension('Sound.mp3'));
