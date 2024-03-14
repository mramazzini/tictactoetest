const gameButtons = document.querySelectorAll(".game-button");
const gameOverElement = document.querySelector("#gameOver");
const resetButton = document.querySelector("#reset");
let isXTurn = true;

let buttonState;

function startGame() {
  for (const button of gameButtons) {
    button.textContent = "";
  }
  buttonState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}
startGame();

// This will update the buttonState variable with
// an "X" or an "O", depending on whose turn it is.
function updateState(event) {
  const button = event.target;
  const index = parseInt(button.id);

  const arrayIndex = Math.floor(index / 3);
  const buttonIndex = index % 3;

  //Check if the button already has a value
  if (
    buttonState[arrayIndex][buttonIndex] == "X" ||
    buttonState[arrayIndex][buttonIndex] == "O"
  ) {
    return;
  }

  //Player makes a move and change the buttons and buttonState to the current players turn.
  if (isXTurn) {
    buttonState[arrayIndex][buttonIndex] = "X";
    event.target.textContent = "X";
    isXTurn = false;
  } else {
    buttonState[arrayIndex][buttonIndex] = "O";
    event.target.textContent = "O";
    isXTurn = true;
  }

  //Check to see if someone has won (rows)
  for (let i = 0; i < buttonState.length; i++) {
    if (
      buttonState[i][0] == "X" &&
      buttonState[i][1] == "X" &&
      buttonState[i][2] == "X"
    ) {
      endGame("X");
    } else if (
      buttonState[i][0] == "O" &&
      buttonState[i][1] == "O" &&
      buttonState[i][2] == "O"
    ) {
      console.log("3 Os");
    }
  }

  //Check to see if someone has won (col)
  for (let i = 0; i < buttonState.length; i++) {
    if (
      buttonState[0][i] == "X" &&
      buttonState[1][i] == "X" &&
      buttonState[2][i] == "X"
    ) {
      endGame("X");
    } else if (
      buttonState[0][i] == "O" &&
      buttonState[1][i] == "O" &&
      buttonState[2][i] == "O"
    ) {
      endGame("O");
    }
  }

  if (
    buttonState[0][0] == "X" &&
    buttonState[1][1] == "X" &&
    buttonState[2][2] == "X"
  ) {
    endGame("X");
  } else if (
    buttonState[0][0] == "O" &&
    buttonState[1][1] == "O" &&
    buttonState[2][2] == "O"
  ) {
    endGame("O");
  }

  if (
    buttonState[0][2] == "X" &&
    buttonState[1][1] == "X" &&
    buttonState[2][0] == "X"
  ) {
    endGame("X");
  } else if (
    buttonState[0][2] == "O" &&
    buttonState[1][1] == "O" &&
    buttonState[2][0] == "O"
  ) {
    endGame("O");
  }
}

function endGame(winner) {
  gameOverElement.textContent = `Player ${winner} has won the game!`;
}

for (const button of gameButtons) {
  button.addEventListener("click", updateState);
}

resetButton.addEventListener("click", startGame);
