// 3. Write the function to count how many words appear in a string:
// oneTwoThree => 3

// Cách 1:
function wordsCount(str) {
  let count = 1;
  for (const char of str) {
    if (isNaN(+char) && char === char.toUpperCase()) count++;
  }
  return count;
}

// Cách 2
// ASCII code A-Z: 65 -> 90
function wordsCount2(str) {
  let count = 1;
  for (const i in str) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) count++;
  }
  return count;
}

const words = 'oneTwoThree';
console.log(wordsCount(words));
console.log(wordsCount2(words));
