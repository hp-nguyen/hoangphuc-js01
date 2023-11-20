import gameItems from './assets/itemList.js';
import Label from './Engine/Label.js';
import GameBoard from './Entities/GameBoard.js';

class GameController {
  constructor(gameItems) {
    this.gameItems = gameItems;
    this.totalPairs = gameItems.length / 2;
    this.curPicks = [];
    this.pairsMatchedCount = 0;
    this.coins = 5000;
    this.isPlaying = true;
    this.gameBoard = new GameBoard(gameItems);
    this.coinsLabel = new Label(`Coins: ${this.coins}`);
  }
  initGame() {
    this.gameBoard.setSize(548, 436);
    this.gameBoard.render();
    this.gameBoard.children.forEach(child =>
      child.element.addEventListener('click', this.handleClick.bind(this))
    );
    this.renderCoins();
  }
  handleClick(e) {
    if (!this.isPlaying) return;
    const cardEl = e.currentTarget;
    const cardEntity = this.gameBoard.children[cardEl.dataset.index];
    cardEntity.showContent();
    this.updateCurPicks(cardEntity, cardEl.dataset.id, cardEl.dataset.index);
    if (this.checkPairPicked()) {
      if (this.checkPairMatch()) {
        this.curPicks.forEach(cardData => {
          cardData.cardEntity.element.removeEventListener('click', this.handleClick);
          setTimeout(() => {
            cardData.cardEntity.element.style.display = 'none';
          }, 1000);
        });
        this.pairsMatchedCount++;
        this.updateCoinAmount('up');
        this.coinsLabel.setText(`Coins: ${this.coins}`);
        if (this.checkWin()) {
          console.log('WIN');
          // messageElement.style.color = 'yellow';
          // messageElement.innerText = 'You win!!!';
        }
      } else {
        this.updateCoinAmount('down');
        this.coinsLabel.setText(`Coins: ${this.coins}`);
        if (this.checkLose()) {
          console.log('Lose');
          // messageElement.style.color = 'red';
          // messageElement.innerText = 'You lose :(((';
        }
        this.hideCards();
      }
      this.resetCurPicks();
    }
  }

  checkPairPicked() {
    if (this.curPicks.length === 2) return true;
    return false;
  }

  updateCurPicks(cardEntity, id, index) {
    if (
      this.curPicks.length === 0 ||
      (this.curPicks.length > 0 && this.curPicks[0].index !== index)
    ) {
      this.curPicks.push({ cardEntity, id, index });
    }
  }

  resetCurPicks() {
    this.curPicks.length = 0;
  }

  checkPairMatch() {
    const [card1, card2] = this.curPicks;

    if (card1.id === card2.id && card1.index !== card2.index) {
      return true;
    }
    return false;
  }

  hideCards() {
    const [cardData1, cardData2] = this.curPicks;
    setTimeout(() => {
      cardData1.cardEntity.hideContent();
      cardData2.cardEntity.hideContent();
    }, 1000);
  }

  checkWin() {
    if (this.pairsMatchedCount === this.totalPairs) {
      this.isPlaying = false;
      return true;
    }
    return false;
  }

  updateCoinAmount(data) {
    if (data === 'up') {
      this.coins += 1000;
    }
    if (data === 'down') {
      this.coins -= 500;
    }
  }

  checkLose() {
    if (this.coins === 0) {
      this.isPlaying = false;
      return true;
    }
    this.isPlaying = true;
    return false;
  }

  renderCoins() {
    this.coinsLabel.setStyle({
      fontSize: '2.5rem',
      color: '#fff',
      position: 'absolute',
    });
    this.coinsLabel.x = this.gameBoard.x;
    this.coinsLabel.y = 24;
    document.body.appendChild(this.coinsLabel.element);
  }
}
const gameController = new GameController(gameItems);
gameController.initGame();
