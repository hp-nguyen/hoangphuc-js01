import Node from './Node.js';
export default class Sprite extends Node {
  constructor(imageSrc) {
    super();
    this.element = this._createElement(imageSrc);
  }
  _createElement(imageSrc) {
    const elm = new Image();
    elm.src = imageSrc;
    elm.style.maxWidth = '100%';
    elm.onload = () => {
      return elm
    }
    return elm;
  }
}
