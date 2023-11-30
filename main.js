//connect elements
const feedback = document.querySelector(".feedback");
const userInput = document.querySelector(".userInput");
const submit = document.querySelector(".btn");
const guesses = document.querySelector(".guesses");
const reset = document.querySelector(".reset");

//math import

let rndNumber = newRndNumber();

//take input
let guess = 0;

submit.addEventListener("click", function () {
  let guessNumber = Number(userInput.value);

  //compare input with mathimport
  console.log(rndNumber);

  if (guess < 5) {
    if (guessNumber < rndNumber) {
      feedback.textContent = "number is too low, try higher";
      guessList(guessNumber, "low");
      userInput.value = "";
      guess++;
    } else if (guessNumber > rndNumber) {
      feedback.textContent = "Number is too high, try lower";
      guessList(guessNumber, "high");
      userInput.value = "";
      guess++;
    } else feedback.textContent = "You have guessed it!";
  }

  if (guess == 5) {
    feedback.textContent =
      "you have guess to many times sorry the answer was " + rndNumber;
  }
});

reset.addEventListener("click", function () {
  guess = 0;
  feedback.textContent = "New number, new tries!";
  while (guesses.firstChild) {
    guesses.removeChild(guesses.firstChild);
  }
  rndNumber = newRndNumber();
});

function guessList(guess, lowHigh) {
  const newLi = document.createElement("li");
  newLi.textContent = `Your previous guess was ${guess}, this was too ${lowHigh}`;
  guesses.appendChild(newLi);
}

function newRndNumber() {
  return Math.floor(Math.random() * 100);
}

//give feedback

//count guesses

//display previous guesses
