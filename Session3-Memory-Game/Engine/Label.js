import Node from './Node.js';
class Label extends Node {
  constructor(text) {
    super();
    this.setText(text);
  }
  setText(text) {
    this.element.innerText = text;
  }
}

export default Label;
