function readNumber(n) {
  const originNumber = n;
  const dividends = [1, 10, 100, 1000, 10000];
  const texts = ['', ' mươi', ' trăm', ' ngàn', ' vạn'];
  const units = [0, 0, 0, 0, 0];
  let result;
  if (n === 0) return 'không';
  if (n < 10) return hangDonvi(n);
  if (n === 10) return 'mười';

  for (let i = dividends.length - 1; i >= 0; i--) {
    if (n % dividends[i] === 0 && n === originNumber) {
      const div = n / dividends[i];
      return hangChuc(Math.floor(div / 10)) + hangDonvi(div % 10) + texts[i];
    }
    const div = Math.floor(n / dividends[i]);
    if (div >= 1) {
      units[i] = div;
      n = n % dividends[i];
    }
  }
  const [donvi, chuc, tram, ngan, van] = units;
  if (originNumber < 100) {
    result = hangChuc(chuc) + ' ' + hangDonvi(donvi);
  } else {
    result =
      hangVan(van) +
      ' ' +
      (ngan ? hangNgan(ngan) + ' ' : '') +
      hangTram(tram) +
      ' ' +
      hangChucTram(chuc, donvi) +
      ' ' +
      hangDonvi(donvi);
  }
  return result.trim();
}

console.log(readNumber(0));
console.log(readNumber(1));
console.log(readNumber(12));
console.log(readNumber(1001));
console.log(readNumber(1000));
console.log(readNumber(10001));
console.log(readNumber(12340));
console.log(readNumber(123456));
console.log(readNumber(100));
console.log(readNumber(2000));
console.log(readNumber(90000));
console.log(readNumber(900000));

function hangDonvi(n) {
  const texts = [
    '',
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
  return texts[n];
}

function hangChuc(n) {
  const texts = [
    '',
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
  if (n >= 2) return texts[n] + ' mươi';
  if (n === 1) return 'mười';
  if (n === 0) return '';
}
function hangChucTram(chuc, donvi) {
  const texts = [
    '',
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
  if (chuc >= 2) return texts[chuc] + ' mươi';
  if (chuc === 1) return 'mười';
  if (chuc === 0 && donvi !== 0) return 'linh';
  return '';
}
function hangTram(n) {
  if (n === 0) return 'không trăm';
  return hangDonvi(n) + ' trăm';
}
function hangNgan(n) {
  if (n === 0) return '';
  return hangDonvi(n) + ' ngàn';
}
function hangVan(n) {
  if (n === 0) return '';
  return hangChuc(Math.floor(n / 10)) + ' ' + hangDonvi(n % 10) + ' vạn';
}
