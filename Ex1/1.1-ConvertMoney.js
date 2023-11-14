function convertMoney(num) {
  const digitParts = String(num).split('.');
  const [normalPart, pointPart] = digitParts;
  let result = '';
  let count = 1;
  for (let i = normalPart.length - 1; i >= 0; i--) {
    result = normalPart[i] + result;
    if (count % 3 === 0 && i !== 0) result = ',' + result;
    count++;
  }
  if (pointPart) result = result + '.' + pointPart;
  return result;
}

console.log(convertMoney(1234567.000002));
console.log(convertMoney(1234567));
console.log(convertMoney(123456));
console.log(convertMoney(123456789.00000123));
