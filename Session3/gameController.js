import gameItems from './assets/itemList.js';
import Label from './Engine/Label.js';
import GameBoard from './Entities/GameBoard.js';

const totalPairs = gameItems.length / 2;
const curPicks = [];
let pairsMatchedCount = 0;
let coins = 5000;
let isPlaying = true;
const gameBoard = new GameBoard(gameItems);
const coinsLabel = new Label(`Coins: ${coins}`);

function initGame() {
  coins = 5000;
  curPicks.length = 0;
  pairsMatchedCount = 0;
  isPlaying = true;
  gameBoard.setSize(548, 436);
  gameBoard.render();
  gameBoard.children.forEach(child => child.element.addEventListener('click', handleClick));
  renderCoins();
}
function handleClick(e) {
  if (!isPlaying) return;
  const cardEl = e.currentTarget;
  const cardEntity = gameBoard.children[cardEl.dataset.index];
  cardEntity.showContent();
  updateCurPicks(cardEntity, cardEl.dataset.id, cardEl.dataset.index);
  if (checkPairPicked()) {
    updateHandleClick('remove');
    if (checkPairMatch()) {
      curPicks.forEach(cardData => {
        setTimeout(() => {
          cardData.cardEntity.element.style.display = 'none';
        }, 1000);
      });
      pairsMatchedCount++;
      updateCoinAmount('up');
      coinsLabel.setText(`Coins: ${coins}`);
      if (checkWin()) {
        console.log('WIN');
        // messageElement.style.color = 'yellow';
        // messageElement.innerText = 'You win!!!';
      }
    } else {
      updateCoinAmount('down');
      coinsLabel.setText(`Coins: ${coins}`);
      if (checkLose()) {
        console.log('Lose');
        // messageElement.style.color = 'red';
        // messageElement.innerText = 'You lose :(((';
      }
      hideCards();
      return;
    }
    resetCurPicks();
  }
}

function checkPairPicked() {
  if (curPicks.length === 2) return true;
  return false;
}

function updateCurPicks(cardEntity, id, index) {
  if (curPicks.length === 0 || (curPicks.length > 0 && curPicks[0].index !== index)) {
    curPicks.push({ cardEntity, id, index });
  }
}

function resetCurPicks() {
  curPicks.length = 0;
}

function checkPairMatch() {
  const [card1, card2] = curPicks;

  if (card1.id === card2.id && card1.index !== card2.index) {
    return true;
  }
  return false;
}

function hideCards() {
  const [cardData1, cardData2] = curPicks;
  setTimeout(() => {
    cardData1.cardEntity.hideContent();
    cardData2.cardEntity.hideContent();
    updateHandleClick('add');
    resetCurPicks();
  }, 4000);
}

function checkWin() {
  if (pairsMatchedCount === totalPairs) {
    isPlaying = false;
    return true;
  }
  return false;
}

function updateCoinAmount(data) {
  if (data === 'up') {
    coins += 1000;
  }
  if (data === 'down') {
    coins -= 500;
  }
}

function checkLose() {
  if (coins === 0) {
    isPlaying = false;
    return true;
  }
  isPlaying = true;
  return false;
}

function renderCoins() {
  coinsLabel.setStyle({
    fontSize: '2.5rem',
    color: '#fff',
    position: 'absolute',
  });
  coinsLabel.x = 24;
  coinsLabel.y = 24;
  document.body.appendChild(coinsLabel.element);
}
function updateHandleClick(type) {
  if (type === 'add') {
    curPicks.forEach(cardData =>
      cardData.cardEntity.element.addEventListener('click', handleClick)
    );
  }
  if (type === 'remove') {
    curPicks.forEach(cardData =>
      cardData.cardEntity.element.removeEventListener('click', handleClick)
    );
  }
}
 export {initGame, gameBoard}
