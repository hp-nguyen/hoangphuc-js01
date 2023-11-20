import gameItems from './assets/itemList.js';
import Card from './Card.js';
import Node from './Node.js';

class GameLogic {
  constructor(gameBoard, gameItems) {
    this.gameItems = gameItems
    this.totalPairs = gameItems.length / 2;
    this.curPicks = [];
    this.pairsMatchedCount = 0;
    this.isPlaying = true;
    this.gameBoard = gameBoard;
  }
  renderGameBoard() {
    const body = document.body;
    let curRow = -1;
    let curCol = 0;
    const gap = 12;
    for (let index = 0; index < this.gameItems.length; index++) {
      const newCard = new Card(index);
      newCard.setSize(100, 100);
      curRow = index % 5 === 0 ? curRow + 1 : curRow;
      curCol = index % 5;
      this.gameBoard.appendChild(newCard.element);
      newCard.x = curCol * (newCard._size.width + gap);
      newCard.y = curRow * (newCard._size.height + gap);
    }
    body.appendChild(this.gameBoard);
  }
}


const gameBoard = new Node();
const gameLogic = new GameLogic(gameBoard.element, gameItems)
gameBoard.setSize(548, 436);
gameBoard.centerInPage();
gameLogic.renderGameBoard()

// function renderGameBoard() {
//   const body = document.body;
//   let curRow = -1;
//   let curCol = 0;
//   const gap = 12;
//   for (let index = 0; index < gameItems.length; index++) {
//     const newCard = new Card(index);
//     newCard.setSize(100, 100);
//     curRow = index % 5 === 0 ? curRow + 1 : curRow;
//     curCol = index % 5;
//     gameBoard.addChild(newCard.element);
//     newCard.x = curCol * (newCard._size.width + gap);
//     newCard.y = curRow * (newCard._size.height + gap);
//   }
//   body.appendChild(gameBoard.element);
// }

function handleClick() {}
