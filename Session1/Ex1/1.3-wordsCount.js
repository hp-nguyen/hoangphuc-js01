function wordsCount(str) {
  let count = 1;
  for (const char of str) {
    if (isNaN(+char) && char === char.toUpperCase()) count++;
  }
  return count;
}


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
