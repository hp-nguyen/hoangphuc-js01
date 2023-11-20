export class Node { // entity

    constructor() {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this.elm = this._createElement();
        this.children = [];
    }

    get x() { return this._x; }
    set x(value) {
        this._x = value;
        this.elm.style.left = this._x + "px";
    }

    get y() { return this._y; }
    set y(value) {
        this._y = value;
        this.elm.style.top = this._y + "px";
    }

    _createElement() {
        let elm = document.createElement("div");
        elm.style.position = "absolute";
        return elm;
    }

    addChild(node) {
        // todo
    }
    removeChild(node) {
         // todo
    }

}