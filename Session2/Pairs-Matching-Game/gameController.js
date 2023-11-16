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
const gameItems = copyItems.concat(copyItems);
const pairsAmount = baseItems.length;
let currentPick = [];
let pairsMatchedCount = 0;
const body = document.body;
const containerEl = document.getElementById('container');
const messageElement = document.createElement('div');
Object.assign(messageElement.style, {
  'font-size': '3rem',
  'margin-bottom': '24px',
  color: 'red',
});
body.prepend(messageElement);
for (const i in gameItems) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.id = gameItems[i].id;
  cardElement.dataset.index = i;
  cardElement.addEventListener('click', onClickHandler);

  const cardContentElement = document.createElement('img');
  cardContentElement.src = gameItems[i].src;

  const cardCoverElement = document.createElement('div');
  cardCoverElement.classList.add('card-cover');
  Object.assign(cardCoverElement.style, {
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

function onClickHandler(e) {
  const cardEl = e.currentTarget;
  const cardCoverEl = cardEl.querySelector('.card-cover');
  cardCoverEl.style.visibility = 'hidden';
  updateCurrentPick(cardEl, cardEl.dataset.id, cardEl.dataset.index, cardCoverEl);
  if (isPairPicked()) {
    if (isPairMatch()) {
      currentPick.forEach(cardData => cardData.card.removeEventListener('click', onClickHandler));
      pairsMatchedCount++;
      if (isWin()) {
        messageElement.innerText = 'You win!!!';
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
function updateCurrentPick(card, id, index, cardCover) {
  if (currentPick.length === 0 || (currentPick.length > 0 && currentPick[0].index !== index)) {
    currentPick.push({ card, id, index, cardCover });
  }
}
function resetCurrentPick() {
  currentPick.length = 0;
}
function isPairMatch() {
  const [card1, card2] = currentPick;

  if (card1.id === card2.id && card1.index !== card2.index) {
    return true;
  }
  return false;
}
function resetCardCover() {
  const [card1, card2] = currentPick;
  setTimeout(() => {
    card1.cardCover.style.visibility = 'initial';
    card2.cardCover.style.visibility = 'initial';
  }, 1000);
}
function isWin() {
  if (pairsMatchedCount === pairsAmount) return true;
  return false;
}
