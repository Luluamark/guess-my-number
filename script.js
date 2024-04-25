"use strict";

let score = 20;
let highscore = 0;

let guess = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").value = guess;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = guess;

  let randomNum = Number(document.querySelector(".guess").value);

  if (!randomNum) {
    displayMessage("No Number!");
  }

  if (randomNum === guess) {
    displayMessage("You win");
    document.querySelector("body").style.backgroundColor = "#60b347";
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }

  if (randomNum !== guess) {
    if (score > 1) {
      displayMessage(randomNum > guess ? "Too High" : "Too Low");
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  guess = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
