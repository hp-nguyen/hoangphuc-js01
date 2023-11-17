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
const totalPairs = baseItems.length;
let currentPick = [];
let pairsMatchedCount = 0;
const body = document.body;
const gameContainerEl = document.getElementById('gameContainer');
const messageElement = document.getElementById('message');

const stateContainer = document.createElement('div');
stateContainer.innerHTML = ``;
const coinAmountEl = document.getElementById('coin-amount');
const states = {
  isPlaying: true,
  coinAmountEl,
  messageElement,
  coin: 3000,
  initCoinAmount() {
    coinAmountEl.innerText = this.coin;
  },
  updateCoinAmount(data) {
    if (data === 'up') {
      this.coin += 500;
      coinAmountEl.innerText = this.coin;
    }
    if (data === 'down') {
      this.coin -= 500;
      coinAmountEl.innerText = this.coin;
    }
  },
  checkPlaying() {
    if (this.coin === 0) {
      this.isPlaying = false;
      return false;
    }
    return true;
  },
};

states.initCoinAmount();
shuffleItems();
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
    'font-size': '2.5em',
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
  gameContainerEl.appendChild(cardElement);
}
function onClickHandler(e) {
  if (!states.isPlaying) return
  const cardEl = e.currentTarget;
  const cardCoverEl = cardEl.querySelector('.card-cover');
  cardCoverEl.style.visibility = 'hidden';
  updateCurrentPick(cardEl, cardEl.dataset.id, cardEl.dataset.index, cardCoverEl);
  if (isPairPicked()) {
    if (isPairMatch()) {
      currentPick.forEach(cardData => cardData.card.removeEventListener('click', onClickHandler));
      pairsMatchedCount++;
      states.updateCoinAmount('up');
      if (isWin()) {
        states.messageElement.style.color = 'yellow';
        states.messageElement.innerText = 'You win!!!';
      }
    } else {
      states.updateCoinAmount('down');
      if (!states.checkPlaying()) {
        states.messageElement.style.color = 'red';
        states.messageElement.innerText = 'You lose :(((';
      }
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
  if (pairsMatchedCount === totalPairs) return true;
  return false;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffleItems() {
  const temp = [];
  let currentLength = gameItems.length;
  while (currentLength > 0) {
    const currentIndex = randomNum(0, currentLength - 1);
    temp.push(gameItems.splice(currentIndex, 1)[0]);
    currentLength = gameItems.length;
  }
  gameItems = temp;
}