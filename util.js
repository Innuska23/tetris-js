export const PLAYFIELD_ROWS = 20;
export const PLAYFIELD_COLUMNS = 10;
export const TETRAMINO_NAMES = ["I", "J", "L", "O", "S", "Z", "T"];

export const TETRAMINOES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  L: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

export function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function convertPositionToIndex(row, column) {
  return row * PLAYFIELD_COLUMNS + column;
}

export function rotateMatrix(matrix) {
  const N = matrix.length;
  const rotateMatrix = [];
  for (let i = 0; i < N; i++) {
    rotateMatrix[i] = [];
    for (let j = 0; j < N; j++) {
      rotateMatrix[i][j] = matrix[N - j - 1][i];
    }
  }

  return rotateMatrix;
}
