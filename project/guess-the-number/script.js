"use strict";
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const attemptsDisplay = document.querySelector("#attempts");
const guessInput = document.querySelector("#guess"); 
const checkButton = document.querySelector("#check-button");
const feedback = document.querySelector("#feedback");

checkButton.addEventListener("click", function () {
  const guess = Number(guessInput.value);
 

  if (guessInput.value === "")  {
    feedback.textContent = "Please enter a number.";
    return;
  }

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Enter a number from 1 to 100.";
    return;
  }
   
   attempts = attempts + 1;
   attemptsDisplay.textContent = "Attempts: " + attempts;

  if (guess === secretNumber) {
    feedback.textContent = "You got it in " + attempts + " attempts!";
  } else if (guess > secretNumber)  {
    feedback.textContent = "Too high! Try again.";
  } else   {
    feedback.textContent = "Too low!  Try again.";      
  }
  });
