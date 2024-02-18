"use strict";

let playerScore = 0;
let computerScore = 0;
//            rock, paper, scissors
// const choices = [1, 2, 3]

// ==================================CHECK WINNER===============
function checkWinner() {
  if (playerScore === 5) {
    document.querySelector(".game-title").style.display = "none";

    document.querySelector(".message").textContent = "YOU WIN!";
    document.querySelector(".message").style.fontSize = "50px";
    document.querySelector(".message").style.color = "#fff";
    document.querySelector(".message").style.fontStyle = "normal";

    document.querySelector(".message").style.padding = "85px";

    // document.querySelector(".message").style.margin = "auto";
    
    playerScore = 0;
    computerScore = 0;

    document.querySelector("header").style.background = "#006400";
  } else if (computerScore === 5) {
    document.querySelector(".game-title").style.display = "none";

    document.querySelector(".message").textContent = "YOU LOSE!";
    document.querySelector(".message").style.fontSize = "50px";
    document.querySelector(".message").style.color = "#fff";
    document.querySelector(".message").style.fontStyle = "normal";

    document.querySelector(".message").style.padding = "85px";

    // document.querySelector(".message").style.margin = "auto";

    playerScore = 0;
    computerScore = 0;

    document.querySelector("header").style.background = "orangered";
  }
}

// --------------------------------- ROCK ---------------------------------
const rockButtonClicked = function () {
  let randomPick = Math.trunc(Math.random() * 3 + 1);

  document.querySelector(".rock").disabled = true;
  document.querySelector(".rock").style.cursor = "auto";
  document.querySelector(".paper").style.display = "none";
  document.querySelector(".scissors").style.display = "none";

  if (randomPick === 1) {
    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background = "url('rock.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    // document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";
    console.log("Draw");
  } else if (randomPick === 2) {
    computerScore++;
    document.querySelector(".score-computer").textContent = computerScore;

    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background =
      "url('paper.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    // document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";

    console.log("You lose");
  } else {
    playerScore++;
    document.querySelector(".score-player").textContent = playerScore;
    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background =
      "url('scissors.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";

    console.log("You win");
  }

  checkWinner();
};

document.querySelector(".rock").addEventListener("click", rockButtonClicked);

// --------------------------------- PAPER ---------------------------------
const paperButtonClicked = function () {
  let randomPick = Math.trunc(Math.random() * 3 + 1);

  document.querySelector(".paper").disabled = true;
  document.querySelector(".paper").style.cursor = "auto";
  document.querySelector(".rock").style.display = "none";
  document.querySelector(".scissors").style.display = "none";

  if (randomPick === 1) {
    playerScore++;
    document.querySelector(".score-player").textContent = playerScore;

    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background = "url('rock.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";
    console.log("You win");
  } else if (randomPick === 2) {
    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background =
      "url('paper.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";

    console.log("Draw");
  } else {
    computerScore++;
    document.querySelector(".score-computer").textContent = computerScore;

    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background =
      "url('scissors.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";

    console.log("You lose");
  }

  checkWinner();
};
document.querySelector(".paper").addEventListener("click", paperButtonClicked);

// --------------------------------- SCISSORS ---------------------------------
const scissorsButtonClicked = function () {
  let randomPick = Math.trunc(Math.random() * 3 + 1);

  document.querySelector(".scissors").disabled = true;
  document.querySelector(".scissors").style.cursor = "auto";
  document.querySelector(".rock").style.display = "none";
  document.querySelector(".paper").style.display = "none";

  if (randomPick === 1) {
    computerScore++;
    document.querySelector(".score-computer").textContent = computerScore;

    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background = "url('rock.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";
    console.log("You lose");
  } else if (randomPick === 2) {
    playerScore++;
    document.querySelector(".score-player").textContent = playerScore;

    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background =
      "url('paper.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";

    console.log("You win");
  } else {
    document.querySelector(".question").style.display = "none";

    document.querySelector(".random-pick").style.background =
      "url('scissors.png')";
    document.querySelector(".random-pick").style.backgroundSize = "contain";
    document.querySelector(".random-pick").style.backgroundRepeat = "no-repeat";
    document.querySelector(".random-pick").style.color = "#00000000";

    document.querySelector(".again").style.display = "block";

    console.log("Draw");
  }

  checkWinner();
};

document
  .querySelector(".scissors")
  .addEventListener("click", scissorsButtonClicked);

// ---------------------------- AGAIN ----------------------------------

const again = function () {
  document.querySelector(".game-title").style.display = "block";
  document.querySelector("header").style.background = "#222";

  document.querySelector(".message").style.padding = "25px 0px";

  document.querySelector(".score-player").textContent = playerScore;
  document.querySelector(".score-computer").textContent = computerScore;

  document.querySelector(".message").textContent =
    "Race to 5. May the best player win!";

  document.querySelector(".message").style.fontSize = "20px";
  document.querySelector(".message").style.color = "tomato";

  document.querySelector(".rock").style.cursor = "pointer";
  document.querySelector(".paper").style.cursor = "pointer";
  document.querySelector(".scissors").style.cursor = "pointer";

  document.querySelector(".again").style.display = "none";
  document.querySelector(".question").style.display = "block";

  document.querySelector(".random-pick").style.background = "none";
  document.querySelector(".random-pick").style.backgroundColor = "#222";

  document.querySelector(".rock").style.display = "inline-block";
  document.querySelector(".paper").style.display = "inline-block";
  document.querySelector(".scissors").style.display = "inline-block";

  document.querySelector(".rock").disabled = false;
  document.querySelector(".paper").disabled = false;
  document.querySelector(".scissors").disabled = false;
};

document.querySelector(".again").addEventListener("click", again);
