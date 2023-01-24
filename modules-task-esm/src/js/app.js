console.log('app worked');

import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saweGame} from "./game.js";

const game = new Game();
game.start();