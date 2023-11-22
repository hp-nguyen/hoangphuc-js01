import gameItems from './assets/itemList.js';
import GameController from './gameController.js';


const gameController = new GameController(gameItems)
gameController.initGame()
