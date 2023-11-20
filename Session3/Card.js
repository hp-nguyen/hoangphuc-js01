import { Node } from './Node.js';
const card = new Node();

const width = window.innerWidth;
const height = window.innerHeight;

const spaceW = width - card._width;
const spaceH = height - card._height;
card.x = spaceW / 2;
card.y = spaceH / 2;

let lastTime = 0;
function gameLoop(timeStamp) {
  const dt = (timeStamp - lastTime) / 1000;
  lastTime = timeStamp;
  // console.log(dt);
  let isFlliped = false;
  draw(dt);
  window.requestAnimationFrame(gameLoop);
}
function draw(dt) {
  let isOverMiddle = false;
  let isFlipped = false;
  let isDone = false;
  // if (card.scaleX > 1) return;
  if (card.scaleX <= 0) isOverMiddle = true;
  if (card.scaleX >1) isDone = true;
  console.log(card.scaleX);

  if (!isOverMiddle && !isDone) {
    card.scaleX -= dt * 1;
    card.elm.style.transform = `scaleX(${card.scaleX})`;
  } else if (isOverMiddle && !isDone) {
    card.elm.style.backgroundColor = 'red';
    card.scaleX += dt * 1;
    card.elm.style.transform = `scaleX(${card.scaleX})`;
  } 
}
// window.requestAnimationFrame(gameLoop)
