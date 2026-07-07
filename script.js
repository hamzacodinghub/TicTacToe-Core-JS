let btn = document.querySelectorAll(".btn");
let alert = document.querySelector("#alert");
let alertText = document.querySelector("#alert-text");
let gameBoard = document.querySelector("#game-board");
let newGameBtn = document.querySelector("#new-game-btn");
let movesLeft = 9;
let winnerFound = false;
let winnerPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWinner() {
  winnerPatterns.forEach(function (pattern) {
    let first = btn[pattern[0]].textContent;
    let second = btn[pattern[1]].textContent;
    let third = btn[pattern[2]].textContent;
    if (first !== "" && first === second && second === third) {
      winnerFound = true;
      alert.classList.add("flex");
      gameBoard.classList.add("blur");
      alertText.textContent = `${first} is Winner`;
      btn.forEach(function (box) {
        box.disabled = true;
      });
    } else if (winnerFound == false && movesLeft == 0) {
      alert.classList.add("flex");
      gameBoard.classList.add("blur");
      alertText.textContent = "tie";
      btn.forEach(function (box) {
        box.disabled = true;
      });
    }
  });
}
newGameBtn.addEventListener("click", function () {
  location.reload();
});
btn.forEach(function (box) {
  box.addEventListener("click", function () {
    if (box.textContent !== "") {
      return;
    }
    if (movesLeft % 2 !== 0) {
      box.textContent = "X";
    } else {
      box.textContent = "O";
    }
    movesLeft--;
    checkWinner();
  });
});
