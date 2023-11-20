import Node from './Node.js';
import Sprite from './Sprite.js';
const body = document.body;
class Card extends Node {
  constructor(index) {
    super();
    this.cardContent = new Sprite('./assets/1.png');
    this.cardCover = new CardCover(cardCoverStyles, index);
    this.addChild(this.cardContent.element);
    this.addChild(this.cardCover.element);
    this.element.style.position = 'absolute';
  }
}
class CardCover extends Node {
  constructor(styles, index) {
    super();
    this.setStyle(styles);
    this.element.innerText = index + 1;
    this.element.dataset.id = index;
  }
}

const cardCoverStyles = {
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
};
export default Card;
