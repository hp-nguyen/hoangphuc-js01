import { gameBoard, initGame } from './gameController.js';
import { shuffleEntities } from './tween.js';

initGame();
const cardEntities = gameBoard.children;
shuffleEntities(gameBoard ,cardEntities)
