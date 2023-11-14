// 2. print how to read number in vietnamese: n integer < 1,000,000
// 726503 : bảy mươi hai vạn sáu ngàn năm trăm linh ba.
function readNumber(number) {
  const units = ['vạn', 'ngàn', 'trăm', ['linh', 'mươi']]
  const dividens = [10000, 1000, 100, 10]
  const nums = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín']
  for (let i = 1; i< dividens.length; i++) {
    const quotient = number/dividens[i]
    if (quotient >= 1) {
      
    }
  }

}