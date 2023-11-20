export class Node {
  // entity

  constructor() {
    this._x = 0;
    this._y = 0;
    this._width = 300;
    this._height = 300;
    this.scaleX = 1;
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
      width: '300px',
      height: '300px',
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


