function shuffleGameItems(gameItems) {
  const temp = [];
  let currentLength = gameItems.length;
  while (currentLength > 0) {
    const randomIndex = randomNum(0, currentLength - 1);
    temp.push(gameItems.splice(randomIndex, 1)[0]);
    currentLength = gameItems.length;
  }
  gameItems = temp;
  return gameItems
}
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export {shuffleGameItems}