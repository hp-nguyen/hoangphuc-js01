import { gameBoard, initGame } from './gameController.js';
import { shuffleEntities } from './tween.js';

const cardEntities = gameBoard.children;
initGame();
shuffleEntities(cardEntities)
