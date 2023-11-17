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

const gameBoard = {
  totalPairs: baseItems.length,
  currentPick: [],
  pairsMatchedCount: 0,
  initGame() {
    this.pairsMatchedCount = 0;
    this.renderCoinAmount();
    this.shuffleItems();
    this.renderItems();
  },
  shuffleItems() {
    const temp = [];
    let currentLength = gameItems.length;
    while (currentLength > 0) {
      const currentIndex = randomNum(0, currentLength - 1);
      temp.push(gameItems.splice(currentIndex, 1)[0]);
      currentLength = gameItems.length;
    }
    gameItems = temp;
  },
  renderItems() {
    for (const i in gameItems) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.id = gameItems[i].id;
      cardElement.dataset.index = i;
      cardElement.addEventListener('click', this.onClickHandler.bind(this));
      Object.assign(cardElement.style, {
        position: 'relative',
        cursor: 'pointer',
      });
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
  },
  onClickHandler(e) {
    if (!states.isPlaying) return;
    const cardEl = e.currentTarget;
    const cardCoverEl = cardEl.querySelector('.card-cover');
    cardCoverEl.style.visibility = 'hidden';
    this.updateCurrentPick(cardEl, cardEl.dataset.id, cardEl.dataset.index, cardCoverEl);
    if (this.isPairPicked()) {
      if (this.isPairMatch()) {
        this.currentPick.forEach(cardData =>
          cardData.card.removeEventListener('click', this.onClickHandler)
        );
        this.pairsMatchedCount++;
        states.updateCoinAmount('up');
        this.renderCoinAmount();
        if (this.isWin()) {
          messageElement.style.color = 'yellow';
          messageElement.innerText = 'You win!!!';
        }
      } else {
        states.updateCoinAmount('down');
        this.renderCoinAmount();
        if (!states.checkPlaying()) {
          messageElement.style.color = 'red';
          messageElement.innerText = 'You lose :(((';
        }
        this.resetCardCover();
      }
      this.resetCurrentPick();
    }
  },
  renderCoinAmount() {
    coinAmountEl.innerText = states.coin;
  },
  isPairPicked() {
    if (this.currentPick.length === 2) return true;
    return false;
  },
  updateCurrentPick(card, id, index, cardCover) {
    if (
      this.currentPick.length === 0 ||
      (this.currentPick.length > 0 && this.currentPick[0].index !== index)
    ) {
      this.currentPick.push({ card, id, index, cardCover });
    }
  },
  resetCurrentPick() {
    this.currentPick.length = 0;
  },
  isPairMatch() {
    const [card1, card2] = this.currentPick;

    if (card1.id === card2.id && card1.index !== card2.index) {
      return true;
    }
    return false;
  },
  resetCardCover() {
    const [card1, card2] = this.currentPick;
    setTimeout(() => {
      card1.cardCover.style.visibility = 'initial';
      card2.cardCover.style.visibility = 'initial';
    }, 1000);
  },
  isWin() {
    if (this.pairsMatchedCount === this.totalPairs) return true;
    return false;
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
