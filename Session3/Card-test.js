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
  // lastTime = lastTime || timeStamp;
  const dt = (timeStamp - lastTime) / 1000;
  lastTime = timeStamp;

  draw(dt);
  window.requestAnimationFrame(gameLoop);
}
function draw(dt) {
  let isOverMiddle = false;
  let isDone = false;
  if (card.scaleX <= 0) isOverMiddle = true;
  if (card.scaleX > 1) isDone = true;

  if (!isDone) {
    if (!isOverMiddle) {
      card.scaleX -= dt * 1;
      card.element.style.transform = `scaleX(${card.scaleX})`;
    } else {
      card.element.style.backgroundColor = 'red';
      card.scaleX += dt * 1;
      card.element.style.transform = `scaleX(${card.scaleX})`;
    }
  } else return;
}
// window.requestAnimationFrame(gameLoop)
