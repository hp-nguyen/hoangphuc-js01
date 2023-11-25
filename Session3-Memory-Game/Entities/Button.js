import Node from '../Engine/Node.js';

class Button extends Node {
  constructor(text) {
    super();
    this.element = this._createElement()
    this.element.innerText = text
  }
  _createElement() {
    const elm = document.createElement('button');
    Object.assign(elm.style, {
      position: 'absolute',
      padding: '12px'
    })
    return elm;
  }
}
 export default Button