import Label from '../Engine/Label.js';

class GameMessage extends Label {
  constructor() {
    super();
  }
  showContent() {
    this.element.style.visibility = 'initial';
  }
  hideContent() {
    this.element.style.visibility = 'hidden';
  }
}

export default GameMessage