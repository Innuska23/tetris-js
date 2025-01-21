import {
  getRandomElement,
  PLAYFIELD_COLUMNS,
  PLAYFIELD_ROWS,
  TETRAMINO_NAMES,
  TETRAMINOES,
} from "./util.js";

export class Tetris {
  constructor() {
    this.playfield;
    this.tetramino;
    this.init();
  }

  init() {
    this.generatePlayfield();
    this.generateTetromine();
  }

  generatePlayfield() {
    this.playfield = new Array(PLAYFIELD_ROWS)
      .fill()
      .map(() => new Array(PLAYFIELD_COLUMNS).fill(0));
  }

  generateTetromine() {
    const name = getRandomElement(TETRAMINO_NAMES);
    const matrix = TETRAMINOES[name];

    const column = PLAYFIELD_COLUMNS / 2 - Math.floor(matrix.length / 2);
    // const row = -2;
    const row = 3;

    this.tetramino = {
      name,
      matrix,
      row,
      column,
    };
  }
}
