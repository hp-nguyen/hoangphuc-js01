let lastTime;
function gameLoop(timeStamp) {
    lastTime = lastTime || timeStamp;
    let dt = (timeStamp - lastTime)/1000;
    lastTime = timeStamp;
    update(dt);
    window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

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
    get scaleX (){
        return this._scaleX;
    }
    set scaleX (value){
        this._scaleX = value;
        this.element.style.transform = `scaleX(${this._scaleX})`;
    }
}

const card = new Card();

let isUpdating = false;
let duration = 3;
let timer = 0;
let isFinished = true;
let state = "scaleDown";

function update(dt) {
    if (!isUpdating || isFinished) return;
    timer += dt;
    if (state === "scaleDown") {
        card.scaleX = 1 - timer / duration;
        if (timer >= duration) {
            card.scaleX = 0;
            card.element.style.backgroundColor = "red";
            timer = 0;
            state = "scaleUp";
        }
    } else {
        card.scaleX = timer / duration;
        if (timer >= duration) {
            card.scaleX = 1;
            isFinished = true;
        }
    }
}

function flip(){
    isUpdating = true;
    timer = 0;
    isFinished = false;
    state = "scaleDown";
}