"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// Get click function
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No number");
    // document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = " You Win";
    displayMessage("You win");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      // document.querySelector(".message").textContent =
      // guess > secretNumber ? "too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = "";
    } else {
      // document.querySelector(".message").textContent = "You lost the game";
      displayMessage("You lost the game");
    }
    // } else if (guess > secretNumber) {
    //   if (score > 0) {
    //     document.querySelector(".message").textContent = "too high";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //     document.querySelector(".guess").value = "";
    //   } else {
    //     document.querySelector(".message").textContent = "You lost the game";
    //   }
    //   // when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 0) {
    //     document.querySelector(".message").textContent = "too low";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //     document.querySelector(".guess").value = "";
    //   } else {
    //     document.querySelector(".message").textContent = "You lost the game";
    //   }
  }
});
// again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing ...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
