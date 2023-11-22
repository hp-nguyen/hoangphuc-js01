import Node from '../Engine/Node.js';
import Card from './Card.js';

class GameBoard extends Node {
  constructor(gameItems) {
    super();
    this.gameItems = gameItems;
  }
  render() {
    const body = document.body;
    const gridData = {
      rowNum: 4,
      colNum: 5,
      gap: 12,
    };
    let index = 0;
    for (let row = 0; row < gridData.rowNum; row++) {
      for (let col = 0; col < gridData.colNum; col++) {
        const newCard = new Card(this.gameItems[index].src, this.gameItems[index].id, index);
        newCard.setSize(100, 100);
        // newCard.x = col * (newCard._size.width + gridData.gap);
        // newCard.y = row * (newCard._size.height + gridData.gap);
        this.addChild(newCard);
        index++;
      }
    }
    body.appendChild(this.element);
    this.centerInWindow();
  }
}

export default GameBoard;
