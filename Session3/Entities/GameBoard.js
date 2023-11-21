import Node from '../Engine/Node.js';
import Card from './Card.js';

class GameBoard extends Node {
  constructor(gameItems) {
    super();
    this.gameItems = gameItems;
  }
  render() {
    const body = document.body;
    let curRow = -1;
    let curCol = 0;
    const gap = 12;
    for (let index = 0; index < this.gameItems.length; index++) {
      const newCard = new Card(this.gameItems[index].src, this.gameItems[index].id, index);
      newCard.setSize(100, 100);
      curRow = index % 5 === 0 ? curRow + 1 : curRow;
      curCol = index % 5;
      // newCard.x = curCol * (newCard._size.width + gap);
      // newCard.y = curRow * (newCard._size.height + gap);
      this.addChild(newCard);
    }
    body.appendChild(this.element);
    this.centerInWindow();
  }
}

export default GameBoard;
