// 1. Write the function to calculate the combination (Ckn)
function calcCombination(k, n) {
  return calcFactorial(n) / (calcFactorial(k) * calcFactorial(n - k));
}
function calcFactorial(n) {
  if (n === 2) return n;
  return n * calcFactorial(n - 1);
}

console.log(calcCombination(2, 10));
