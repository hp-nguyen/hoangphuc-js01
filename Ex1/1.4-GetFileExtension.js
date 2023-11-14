function getFileExtension(fileName) {
const [_, result ] = fileName.split('.')
return result
}
console.log(getFileExtension('abc.mp3'))