function shortenMoney(money) {
  const characters = ['K', 'M', 'B'];
  const dividends = [1e3, 1e6, 1e9]; 

  for (let i = dividends.length - 1; i >= 0; i--) {
    const quotient = money / dividends[i];
    if (quotient >= 1) {
      if (money % dividends[i] === 0) {
        return quotient + characters[i];
      } else {
        return quotient.toFixed(2) + characters[i];
      }
    }
  }
  return money;
}
console.log(shortenMoney(123));
console.log(shortenMoney(1090));
console.log(shortenMoney(123456));
console.log(shortenMoney(12345678));
console.log(shortenMoney(1000));
console.log(shortenMoney(1000000));
console.log(shortenMoney(1000000000));
