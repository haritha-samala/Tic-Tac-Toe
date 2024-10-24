import "./styles.css";

const O_CLASS = "o";
const X_CLASS = "x";
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cells = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMsgElement = document.getElementById("winningMsg");
const winningMsg = document.querySelector("[data-winning-msg-text]");
const restartBtn = document.getElementById("restartBtn");
const bgMusic = document.getElementById("bgMusic");
const winSound = document.getElementById("win");
const drawSound = document.getElementById("draw");
const pauseBtn = document.getElementById("pauseBtn");

let oTurn;
bgMusic.play();
startGame();

restartBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", toggleMusic);

function startGame() {
  oTurn = false;
  cells.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMsgElement.classList.remove("show");
  // start bgMusic
  bgMusic.play();
}

function endGame(draw) {
  if (draw) {
    winningMsg.textContent = "Draw!";
    // play draw sound
    drawSound.currentTime = 0;
    drawSound.play();
  } else {
    winningMsg.textContent = `${oTurn ? "O" : "X"} Won!`;
    // play winning sound
    winSound.currentTime = 0;
    winSound.play();
  }
  winningMsgElement.classList.add("show");
  bgMusic.pause();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = oTurn ? O_CLASS : X_CLASS;
  // place mark
  placeMark(cell, currentClass);
  // check for win
  if (checkWin(currentClass)) {
    endGame(false);
  }
  // check for draw
  else if (isDraw()) {
    endGame(true);
  } else {
    // switch turns
    swapTurn();
    setBoardHoverClass();
  }
}

function isDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurn() {
  oTurn = !oTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(O_CLASS);
  if (oTurn) {
    board.classList.add(O_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  return winningPattern.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    pauseBtn.textContent = "Pause Music";
  } else {
    bgMusic.pause();
    pauseBtn.textContent = "Play Music";
  }
}
