function integerToRoman(n) {
  const dividends = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900];
  const sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM"];
  let result = '';

  for (let i = dividends.length - 1; i >= 0; i--) {
    const div = Math.floor(n / dividends[i]);
    if (div >= 1) {
      result += sym[i].repeat(div);
      n = n % dividends[i];
    }
  }

  return result;
}

console.log(integerToRoman(21));
console.log(integerToRoman(99));
console.log(integerToRoman(124));
console.log(integerToRoman(999));
