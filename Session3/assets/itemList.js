const baseItems = [
  { id: 1, src: './assets/1.png' },
  { id: 2, src: './assets/2.png' },
  { id: 3, src: './assets/3.png' },
  { id: 4, src: './assets/4.png' },
  { id: 5, src: './assets/5.png' },
  { id: 6, src: './assets/6.png' },
  { id: 7, src: './assets/7.png' },
  { id: 8, src: './assets/8.png' },
  { id: 9, src: './assets/9.png' },
  { id: 10, src: './assets/10.png' },
];
const copyItems = baseItems.map(item => ({ ...item }));
let gameItems = copyItems.concat(copyItems);

export default gameItems