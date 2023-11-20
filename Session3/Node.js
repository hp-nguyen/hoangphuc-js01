export default class Node {
  // entity
  constructor() {
    this._x = 0;
    this._y = 0;
    this._size = { width: 0, height: 0 };
    this._scaleX = 1;
    this.element = this._createElement();
    this.children = [];
  }

  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this.element.style.left = this._x + 'px';
  }

  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this.element.style.top = this._y + 'px';
  }

  _createElement() {
    const body = document.body;
    const elm = document.createElement('div');
    elm.style.position = 'relative';
    return elm;
  }
  setSize(width, height) {
    this._size.width = width;
    this._size.height = height;
    Object.assign(this.element.style, {
      width: width + 'px',
      height: height + 'px',
    });
  }
  setStyle(styles) {
    Object.assign(this.element.style, styles);
  }
  centerInPage() {
    const wdWidth = window.innerWidth;
    const wdHeight = window.innerHeight;
    const spaceW = wdWidth - this._size.width;
    const spaceH = wdHeight - this._size.height;
    this.x = spaceW / 2;
    this.y = spaceH / 2;
  }
  addChild(child) {
    child.parent = this;
    this.children.push(child);
    this.element.appendChild(child);
  }
  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index > -1) {
      child.parent = null;
      this.children.splice(index, 1);
    }
  }
}
