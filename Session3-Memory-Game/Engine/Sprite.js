import Node from './Node.js';
export default class Sprite extends Node {
  constructor(imageSrc) {
    super();
    this.element = this._createElement();
    this.setSrc(imageSrc);
  }
  _createElement() {
    const elm = new Image();
    elm.src = '';
    elm.style.maxWidth = '100%';
    return elm;
  }
  setSrc(imageSrc) {
    this.element.src = imageSrc;
  }
}
