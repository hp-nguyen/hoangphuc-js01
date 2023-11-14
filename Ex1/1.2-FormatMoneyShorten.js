// 2. Write a function for format money in shorten :
// 1000 => 1K, 1.123.400.000 => 1.12B , 1.342.222 => 1.34M

function shortenMoney(money) {
  const characters = ['K', 'M', 'B'];
  // const digits = [4, 7, 10];
  // 4-6: K
  //7-9: M
  // 10-12: B
  const digitsCount = String(money).length;
  if (digitsCount < 4) return money;
  if (digitsCount <= 6) {
    if (money % 1000 === 0) return money / 1000 + characters[0];
    return (money / 1000).toFixed(2) + characters[0];
  }
  if (digitsCount <= 9) {
    if (money % 1000000 === 0) return money / 1000000;
    return (money / 1000000).toFixed(2) + characters[1];
  }
  if (digitsCount > 9) {
    if (money / 1000000000 === 0) return money / 1000000000;
    return (money / 1000000000).toFixed(2) + characters[2];
  }
}
console.log(shortenMoney(1090));
console.log(shortenMoney(123456));
console.log(shortenMoney(1234678));
console.log(shortenMoney(1234567890));
