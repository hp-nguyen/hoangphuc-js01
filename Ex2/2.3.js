// 3. Write the function get a random element from an arrays.
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomElement(arr) {
  return arr[randomNum(0, arr.length - 1)];
}
console.log(getRandomElement(['a', 'b', 'c']));
