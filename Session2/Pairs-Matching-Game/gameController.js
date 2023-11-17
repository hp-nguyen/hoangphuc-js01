const states = {
  isPlaying: true,
  coin: 3000,
  updateCoinAmount(data) {
    if (data === 'up') {
      this.coin += 500;
    }
    if (data === 'down') {
      this.coin -= 500;
    }
  },
  checkPlaying() {
    if (this.coin === 0) {
      this.isPlaying = false;
      return false;
    }
    this.isPlaying = true;
    return true;
  },
};

gameBoard.initGame();
function resetGame() {
  gameContainerEl.innerHTML=''
  gameBoard.initGame.call(gameBoard);
  states.isPlaying = true;
  states.coin = 10000;
}

resetBtn.addEventListener('click', resetGame)