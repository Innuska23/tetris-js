import {
  getRandomElement,
  PLAYFIELD_COLUMNS,
  PLAYFIELD_ROWS,
  rotateMatrix,
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

  moveTetraminoDown() {
    this.tetramino.row += 1;
    if (!this.isValid()) {
      this.tetramino.row -= 1;
    }
  }

  moveTetraminoLeft() {
    this.tetramino.column -= 1;
    if (!this.isValid()) {
      this.tetramino.column += 1;
    }
  }

  moveTetraminoRight() {
    this.tetramino.column += 1;
    if (!this.isValid()) {
      this.tetramino.column -= 1;
    }
  }

  rotateTetramino() {
    const oldMatrix = this.tetramino.matrix;
    const rotatedMatrix = rotateMatrix(this.tetramino.matrix);
    this.tetramino.matrix = rotatedMatrix;
    if (!this.isValid()) {
      this.tetramino.matrix = oldMatrix;
    }
  }

  isValid() {
    const matrixSize = this.tetramino.matrix.length;
    for (let row = 0; row < matrixSize; row++) {
      for (let column = 0; column < matrixSize; column++) {
        if (!this.tetramino.matrix[row][column]) continue;
        if (this.isOutsideOfGameBoard(row, column)) return false;
      }
    }
    return true;
  }

  isOutsideOfGameBoard(row, column) {
    return (
      this.tetramino.column + column < 0 ||
      this.tetramino.column + column >= PLAYFIELD_COLUMNS ||
      this.tetramino.row + row >= this.playfield.length
    );
  }
}
