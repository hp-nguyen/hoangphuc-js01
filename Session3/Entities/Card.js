import Node from '../Engine/Node.js';
import Sprite from '../Engine/Sprite.js';

class Card extends Node {
  constructor(imgSrc, index) {
    super();
    this.cardContent = this.createCardContent(imgSrc);
    this.cardCover = this.createCardCover(cardCoverStyles, index);
    this.setStyle({
      position: 'absolute',
      backgroundColor: '#fff',
      border: '3px solid #3bc9db'
    });

  }
  createCardCover(styles, index) {
    const cardCover = new Node();
    cardCover.setStyle(styles);
    cardCover.element.innerText = index + 1;
    cardCover.element.dataset.id = index;
    this.addChild(cardCover);
    return cardCover;
  }
  createCardContent(imgSrc) {
    const cardContent = new Sprite(imgSrc);
    this.addChild(cardContent);
  }
  showContent() {
    // console.log('click')
    // console.log(this)
    this.cardCover.element.style.display = 'none';
  }
  hideContent() {
    this.cardCover.element.style.display = 'block';
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
