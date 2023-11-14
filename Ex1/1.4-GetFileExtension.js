// 4. Write the function get the get the Extension of file:
// “image.png” => “png”. “Sound.mp3” => “mp3”

function getFileExtension(fileName) {
  const [name, extension] = fileName.split('.');
  return extension;
}

console.log(getFileExtension('Sound.mp3'));
