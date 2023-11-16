const baseItems = [
  { id: 1, src: './assets/1.png' },
  { id: 2, src: './assets/2.png' },
  { id: 3, src: './assets/3.png' },
  { id: 4, src: './assets/4.png' },
  { id: 5, src: './assets/5.png' },
  { id: 6, src: './assets/6.png' },
  { id: 7, src: './assets/6.png' },
  { id: 8, src: './assets/6.png' },
  { id: 9, src: './assets/6.png' },
  { id: 10, src: './assets/6.png' },
];
const copyItems = baseItems.map(item => ({ ...item }));
const gameItems = copyItems.concat(copyItems);
const pairsNum = baseItems.length;
let currentPick = [];
let pairsCount = 0;
const body = document.getElementsByTagName('body')
const containerEl = document.getElementById('container');
const messageElement = document.createElement('div');
Object.assign(messageElement.style, {
  'font-size': '4rem',
  'margin-bottom': '32px',
  'color': 'red'
})
body[0].prepend(messageElement)
for (const i in gameItems) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.id = gameItems[i].id;
  cardElement.dataset.index = i;
  const cardContentElement = document.createElement('img');
  cardContentElement.src = gameItems[i].src;
  const cardCoverElement = document.createElement('div');
  cardCoverElement.classList.add('card-cover');
  Object.assign(cardCoverElement.style, {
    width: '150px',
    height: '150px',
    'background-color': '#1c7ed6',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'font-size': '3.6em',
    color: 'aliceblue',
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    'object-fit': 'cover',
  });
  cardCoverElement.innerText = +i + 1;
  cardElement.appendChild(cardCoverElement);
  cardElement.appendChild(cardContentElement);
  containerEl.appendChild(cardElement);
}

const cardEls = containerEl.getElementsByClassName('card');
for (const cardEl of cardEls) {
  cardEl.addEventListener('click', onClickHandler);
}
function onClickHandler(e) {
  const cardEl = e.currentTarget;
  const cardCoverEl = cardEl.querySelector('.card-cover');
  cardCoverEl.style.visibility = 'hidden';
  updateCurrentPick(
    cardEl,
    cardEl.dataset.id,
    cardEl.dataset.index,
    cardCoverEl
  );
  if (isPairPicked()) {
    if (isMatch()) {
      const [card1, card2] = currentPick;
      card1.card.removeEventListener('click', onClickHandler);
      card2.card.removeEventListener('click', onClickHandler);
      pairsCount++;
      if (isWin()) {
        messageElement.innerText = 'You win!!!';
        console.log('win');
      }
    } else {
      resetCardCover();
    }
    resetCurrentPick();
  }
}
function isPairPicked() {
  if (currentPick.length === 2) return true;
  return false;
}
function updateCurrentPick(card, id, index, questionMark) {
  if (
    currentPick.length === 0 ||
    (currentPick.length > 0 && currentPick[0].index !== index)
  ) {
    currentPick.push({ card, id, index, questionMark });
  }
}
function resetCurrentPick() {
  currentPick = [];
}
function isMatch() {
  const [card1, card2] = currentPick;

  if (card1.id === card2.id && card1.index !== card2.index) {
    console.log('match');
    return true;
  }
  return false;
}
function resetCardCover() {
  const [card1, card2] = currentPick;
  setTimeout(() => {
    card1.questionMark.style.visibility = 'initial';
    card2.questionMark.style.visibility = 'initial';
  }, 500);
}
function isWin() {
  if (pairsCount === pairsNum) return true;
  return false;
}
