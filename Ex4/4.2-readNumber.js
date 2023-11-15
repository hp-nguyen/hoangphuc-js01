function hangChuc(n) {
  const dividends = [0.1, 1];
  const units = ['linh', ['mười', 'mươi']];
  const nums = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
  ];
  if (n === 0) return units[0];
  for (let i = dividends.length - 1; i >= 0; i--) {
    const div = Math.floor(n / dividends[i]);
    if (div >= 1) {
      if (i === 1 && div > 1) {
        return nums[div] + ' ' + units[i][1];
      }
      if (i === 1 && div === 1) {
        return units[i][0];
      }
    }
  }
}
function hangDv(n) {
  const nums = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
  ];
  return ' ' + nums[n];
}
function hangNgan(n) {
  if (n === 0) return '';
  const units = ['trăm', 'ngàn'];
  const dividends = [1, 10];
  const nums = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
  ];
  let result = '';
  let temp = '';
  for (let i = dividends.length - 1; i >= 0; i--) {
    const div = Math.floor(n / dividends[i]);
    if (div >= 1) {
      temp = nums[div] + ' ' + units[i];
      result += temp + ' ';
      n = n % dividends[i];
    }
    temp = '';
  }
  return result.trim();
}
function hangVan(n) {
  const dividends = [1, 10];
  const units = ['', ['mười', 'mươi']];
  const nums = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
  ];
  let result = '';
  let temp = '';
  if (n === 0) return units[0];
  for (let i = dividends.length - 1; i >= 0; i--) {
    const div = Math.floor(n / dividends[i]);
    if (div >= 1) {
      if (i === 1 && div > 1) {
        temp = nums[div] + ' ' + units[i][1] + ' ';
      } else if (i === 1 && div === 1) {
        temp = units[i][0];
      } else temp = nums[div];
      result += temp;
      temp = '';
      n = n % dividends[i];
    }
  }
  return result + ' vạn ';
}
function readNumber(number) {
  const nums = [
    'không',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
    'mười',
  ];
  const dividends = [1, 10, 100, 10000];
  const units = [0, 0, 0, 0];
  if (number <= 10) return nums[number];
  for (let i = dividends.length - 1; i >= 0; i--) {
    const div = Math.floor(number / dividends[i]);
    if (div >= 1) {
      units[i] = div;
      number = number % dividends[i];
    }
  }
  const [dv, chuc, ngan, van] = units;
  const textHangDv = hangDv(dv);
  const textHangChuc = hangChuc(chuc) + ' ';
  const textHangNgan = hangNgan(ngan) + ' ';
  const textHangVan = hangVan(van);
  return textHangVan + textHangNgan + textHangChuc + textHangDv;
}
console.log(readNumber(12));
console.log(readNumber(6));
console.log(readNumber(12));
console.log(readNumber(103));
console.log(readNumber(76503));
console.log(readNumber(726503));
console.log(readNumber(999999));
