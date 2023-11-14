function convertMoney(money) {
  const digitParts = String(money).split('.');
  const [integerPart, decimalPart] = digitParts;
  let result = '';
  let count = 1;
  for (let i = integerPart.length - 1; i >= 0; i--) {
    result = integerPart[i] + result;
    if (count % 3 === 0 && i !== 0) result = ',' + result;
    count++;
  }
  if (decimalPart) result = result + '.' + decimalPart;
  return result;
} // Em đã rút gọn < 15 dòng theo lời dặn của a :D:D:D

console.log(convertMoney(1234567.000002));
console.log(convertMoney(1234567));
console.log(convertMoney(123456));
console.log(convertMoney(123456789.00000123));
