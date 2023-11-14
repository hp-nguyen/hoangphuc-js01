// 1. Write the function to calculate the combination (Ckn)
function calculateCombination(n, k) {
  return calFactorial(n)/(calFactorial(k)*calFactorial(n-k))
}
function calFactorial(n) {
  let result = 1
  for (let i = 1; i<=n; i++) {
    result*=i
  }
  return result
}
console.log(calFactorial(3));
console.log(calculateCombination(4,2))