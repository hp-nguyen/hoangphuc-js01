class Card {
    constructor(){
        this._scaleX = 1;
        this.element = document.createElement("div");
        document.body.appendChild(this.element);
        this.element.style.width = "200px";
        this.element.style.height = "200px";
        this.element.style.backgroundColor = "orange";
        this.element.style.border = "2px solid blue";
    }
    get scaleX() {
        return this._scaleX;
    }
    set scaleX(value) {
        this._scaleX = value;
        this.element.style.transform = `scaleX(${this._scaleX})`;
    }
}
const duration = 2;
const card = new Card();
gsap.to(card, {
    scaleX: 0, duration,
    onComplete: () => {
        card.element.style.backgroundColor = "red";
    }
})
gsap.to(card, { scaleX: 1, duration, delay: duration })

function tween(target, props) {
    // * your code, additional
    // gsap.to(target, props);
}