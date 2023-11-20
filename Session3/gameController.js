import gameItems from './assets/itemList.js';
import GameBoard from './Entities/GameBoard.js';

class GameController {
  constructor(gameItems) {
    this.gameItems = gameItems;
    this.totalPairs = gameItems.length / 2;
    this.curPicks = [];
    this.pairsMatchedCount = 0;
    this.isPlaying = true;
    this.gameBoard = new GameBoard(gameItems);
  }
  initGame() {
    this.gameBoard.setSize(548, 436);
    this.gameBoard.render();
    this.gameBoard.children.forEach(child =>
      child.element.addEventListener('click', child.showContent.bind(child))
    );
  }
}
const gameController = new GameController(gameItems);
gameController.initGame();
function handleClick() {}
