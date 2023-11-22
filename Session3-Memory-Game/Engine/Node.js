export default class Node {
  // entity
  constructor() {
    this._x = 0;
    this._y = 0;
    this._size = { width: 0, height: 0 };
    this._scaleX = 1;
    this.element = this._createElement();
    this.children = [];
    this.parent = null;
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
  centerInWindow() {
    const translationDistanceX = (window.innerWidth - this._size.width) / 2;
    const translationDistanceY = (window.innerHeight - this._size.height) / 2;
    this.x += translationDistanceX;
    this.y += translationDistanceY;
  }
  centerInParent() {
    const translationDistanceX = (this.parent.element.innerWidth - this._size.width) / 2;
    const translationDistanceY = (this.parent.elementt.innerHeight - this._size.height) / 2;
    
    this.x += translationDistanceX;
    this.y += translationDistanceY;
  }
  addChild(entity) {
    entity.parent = this;
    this.children.push(entity);
    this.element.appendChild(entity.element);
  }
  removeChild(entity) {
    const index = this.children.indexOf(entity);
    if (index > -1) {
      entity.parent = null;
      // this.children.splice(index, 1);
      entity.element.remove();
    }
  }
}
