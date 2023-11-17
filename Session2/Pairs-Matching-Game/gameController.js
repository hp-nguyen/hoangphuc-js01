const states = {
  isPlaying: true,
  coin: 10000,
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
  gameContainerEl.innerHTML = '';
  states.isPlaying = true;
  states.coin = 10000;
  messageElement.innerText = '';
  gameBoard.initGame();
}

resetBtn.addEventListener('click', resetGame);
