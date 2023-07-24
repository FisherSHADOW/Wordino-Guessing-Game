const keyboardDiv = document.querySelector('.keyboard-container');
const guessesText = document.querySelector('.wrong-guesses');
const wordDisplay = document.querySelector('.answer-list');
const tryAgainButton = document.querySelector('.try-again');
let currentWord, correctLetter = [], wrongGuesses = 0;
const maxGuesses = 5;

let score = 0;
let highestScore = 0

const checkWin = () => {
  const uniqueLetters = [...new Set(currentWord)];
  for (const letter of uniqueLetters) {
    if (!correctLetter.includes(letter)) {
      return false;
    }
  }
  return true;
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetter.push(letter);
        console.log(correctLetter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuesses++;
  }

  guessesText.innerText = '';
  guessesText.innerText = wrongGuesses + '/' + maxGuesses;
  button.classList.add('key-disabled');

  const hasWon = checkWin();
  if (hasWon) {
    console.log("Congratulations! You guessed the word correctly!");
    score+=10;
    score +=highestScore
    resetGame();
  } else if (wrongGuesses === maxGuesses) {
    console.log("You lost! The correct word was:", currentWord);
    score=0
    console.log(highestScore)
    resetGame();
  }
};

const getRandomWord = () => {
  const { answer, question } = questionsList[Math.floor(Math.random() * questionsList.length)];
  currentWord = answer;
  console.log(answer);
  document.querySelector('.question').innerText = question;
  wordDisplay.innerHTML = answer.split("").map(() => '<li class="answer-letter"></li>').join("");
};

const resetGame = () => {
  wrongGuesses = 0;
  guessesText.innerText = wrongGuesses + '/' + maxGuesses;
  correctLetter = [];
  console.log(score)
  $('.key').removeClass('key-disabled');
  getRandomWord();
};

//dynamic keyboard buttons : 
for (let i = 97; i <= 122; i++) {
  const button = document.createElement('button');
  button.classList.add('key');
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

// reset game with the try again button 
