import { Tetris } from "./tetris.js";
import { convertPositionToIndex } from "./util.js";

const tetris = new Tetris();
const cells = document.querySelectorAll(".grid>div");

initKeydown();

draw();

function initKeydown() {
  document.addEventListener("keydown", onKeydown);
}

function onKeydown(e) {
  switch (e.key) {
    case "ArrowUp":
      rotate();
      break;
    case "ArrowDown":
      moveDown();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;

    default:
      break;
  }
}

function moveDown() {
  tetris.moveTetraminoDown();
  draw();
}

function moveLeft() {
  tetris.moveTetraminoLeft();
  draw();
}

function moveRight() {
  tetris.moveTetraminoRight();
  draw();
}

function rotate() {
  tetris.rotateTetramino();
  draw();
}

function draw() {
  cells.forEach((cell) => cell.removeAttribute("class"));
  drawTetramino();
}

function drawTetramino() {
  const name = tetris.tetramino.name;
  const tetraminoMatrixSize = tetris.tetramino.matrix.length;

  for (let row = 0; row < tetraminoMatrixSize; row++) {
    for (let column = 0; column < tetraminoMatrixSize; column++) {
      if (!tetris.tetramino.matrix[row][column]) continue;
      if (tetris.tetramino.row + row < 0) continue;
      const cellIndex = convertPositionToIndex(
        tetris.tetramino.row + row,
        tetris.tetramino.column + column
      );
      cells[cellIndex].classList.add(name);
    }
  }
}
