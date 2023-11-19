export class Node {
  // entity

  constructor() {
    this._x = 0;
    this._y = 0;
    this._width = 100;
    this._height = 100;
    this.elm = this._createElement();
    this.children = [];
  }

  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this.elm.style.left = this._x + 'px';
  }

  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this.elm.style.top = this._y + 'px';
  }

  _createElement() {
    let elm = document.createElement('div');
    elm.style.position = 'absolute';
    Object.assign(elm.style, {
      width: '100px',
      height: '100px',
      'backgroundColor': 'black',
    });
    const body = document.body;
    body.appendChild(elm);
    return elm;
  }

  addChild(node) {
    // todo
  }
  removeChild(node) {
    // todo
  }
}
const box = new Node();

const width = window.innerWidth;
const height = window.innerHeight;

const spaceW = width - box._width
const spaceH = height - box._height
box.x = spaceW/2
box.y = spaceH/2

