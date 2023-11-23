import Label from './Engine/Label.js';
import Button from './Entities/Button.js';
import GameBoard from './Entities/GameBoard.js';
import GameMessage from './Entities/GameMessage.js';
import { shuffleEntities } from './tween.js';
import { shuffleGameItems } from './utils.js';

class GameController {
  constructor(gameItems) {
    this.gameItems = gameItems;
    this.totalPairs = gameItems.length / 2;
    this.curPicks = [];
    this.pairsMatchedCount = 0;
    this.coins = 5000;
    this.isPlaying = false;
    this.isDisableBoard = false;
    this.gameBoard = new GameBoard(this.gameItems);
    this.coinsLabel = new Label(`Coins: ${this.coins}`);
    this.renderCoins();
    this.resetBtn = new Button('New Game');
    this.renderResetBtn();
    this.gameMessage = new GameMessage();
    this.renderGameMessage();
  }
  initGame() {
    if (this.gameBoard.element) {
      this.gameBoard.element.remove();
    }
    this.gameMessage.hideContent();
    // this.gameItems = shuffleGameItems(this.gameItems)
    this.gameBoard = new GameBoard(this.gameItems);
    this.gameBoard.setSize(548, 436);
    this.gameBoard.render();
    this.gameBoard.children.forEach(child =>
      child.element.addEventListener('click', this.handleClickCard.bind(this))
    );
    this.curPicks = [];
    this.pairsMatchedCount = 0;
    this.coins = 5000;
    this.isPlaying = false;
    this.isDisableBoard = false;
    this.coinsLabel.setText(`Coins: ${this.coins}`);
    this.dealCards();
    setTimeout(() => {
      this.isPlaying = true;
    }, 4500);
  }
  handleClickCard(e) {
    if (!this.isPlaying || this.isDisableBoard) return;
    const cardEl = e.currentTarget;
    const cardEntity = this.gameBoard.children[cardEl.dataset.index];
    cardEntity.showContent();
    this.updateCurPicks(cardEntity, cardEl.dataset.id, cardEl.dataset.index);
    if (this.checkPairPicked()) {
      this.isDisableBoard = true;
      if (this.checkPairMatch()) {
        this.curPicks.forEach(cardData => {
          const cardEntity = cardData.cardEntity;
          cardEntity.element.style.zIndex = '1';
          cardEntity.onMatch();
        });
        setTimeout(() => {
          this.gameBoard.removeChild(cardEntity);
          this.isDisableBoard = false;
        }, 2200);
        this.pairsMatchedCount++;
        this.updateCoinAmount('up');
        this.checkWin();
      } else {
        this.updateCoinAmount('down');
        this.hidePickingCards();
        this.checkLose();
      }
      this.resetCurPicks();
    }
  }
  updateCurPicks(cardEntity, id, index) {
    if (
      this.curPicks.length === 0 ||
      (this.curPicks.length > 0 && this.curPicks[0].index !== index)
    ) {
      this.curPicks.push({ cardEntity, id, index });
    }
  }
  checkPairPicked() {
    if (this.curPicks.length === 2) return true;
    return false;
  }
  checkPairMatch() {
    const [card1, card2] = this.curPicks;
    if (card1.id === card2.id && card1.index !== card2.index) {
      return true;
    }
    return false;
  }
  updateCoinAmount(type) {
    if (type === 'up') {
      this.coins += 1000;
      setTimeout(() => {
        this.coinsLabel.setText(`Coins: ${this.coins}`);
      }, 1000);
    }
    if (type === 'down') {
      this.coins -= 500;
      setTimeout(() => {
        this.coinsLabel.setText(`Coins: ${this.coins}`);
      }, 1000);
    }
  }
  checkWin() {
    if (this.pairsMatchedCount === this.totalPairs) {
      this.isPlaying = false;
      setTimeout(() => {
        this.gameMessage.setText('YOU WIN 🥳🥳🥳');
        this.gameMessage.element.style.color = 'yellow';
        this.gameMessage.showContent();
      }, 2000);
      return true;
    }
    return false;
  }
  checkLose() {
    if (this.coins === 0) {
      this.isPlaying = false;
      setTimeout(() => {
        this.gameBoard.element.innerHTML = '';
        this.gameMessage.setText('YOU LOSE 😢😢😢');
        this.gameMessage.element.style.color = 'red';
        this.gameMessage.showContent();
      }, 3000);
      return true;
    }
    return false;
  }
  hidePickingCards() {
    const [cardData1, cardData2] = this.curPicks;
    setTimeout(() => {
      cardData1.cardEntity.hideContent();
      cardData2.cardEntity.hideContent();
      this.isDisableBoard = false;
    }, 2000);
  }
  resetCurPicks() {
    this.curPicks.length = 0;
  }
  renderCoins() {
    this.coinsLabel.setStyle({
      fontSize: '2.5rem',
      color: '#fff',
      position: 'absolute',
    });
    this.coinsLabel.x = 24;
    this.coinsLabel.y = 24;
    document.body.appendChild(this.coinsLabel.element);
  }
  renderResetBtn() {
    const body = document.body;
    this.resetBtn.x = 24;
    this.resetBtn.y = 80;
    this.resetBtn.setStyle({
      fontSize: '1.3rem',
      fontFamily: 'inherit',
      borderRadius: '6px',
      cursor: 'pointer',
      border: 'none',
    });
    body.appendChild(this.resetBtn.element);
    this.resetBtn.element.addEventListener('click', this.initGame.bind(this));
  }
  renderGameMessage() {
    const body = document.body;
    this.gameMessage.setSize(548, 60);
    this.gameMessage.setStyle({
      fontSize: '3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      position: 'absolute',
      visibility: 'hidden',
    });
    this.gameMessage.centerInWindow();
    this.gameMessage.y = 100;
    body.appendChild(this.gameMessage.element);
  }
  dealCards() {
    shuffleEntities(this.gameBoard, this.gameBoard.children);
  }
}

export default GameController;
