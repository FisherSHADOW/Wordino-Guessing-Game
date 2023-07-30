const keyboardDiv = document.querySelector('.keyboard-container');
const guessesText = document.querySelector('.wrong-guesses');
const wordDisplay = document.querySelector('.answer-list');
const tryAgainButton = document.querySelector('.try-again');
let currentWord, correctLetter = [], wrongGuesses = 0;
let profileHighScore=document.getElementById('gi-high-score')

const maxGuesses = 5;
let score = 0;
let highScore = 0;

// popup variables 

let popUpWordShow=document.getElementById('correct-word');
let highScoreShow=document.getElementById('high-score');
let scoreShow=document.getElementById('score-counter')
let popUpBtn=document.getElementById('popup-button')
scoreShow.innerText=score;

const updateProfileHighScore = () => { 
  //this function will update the highest score in profile info, (the high score in popUp will reset but the high score in profile info will remain till the page reloaded)
  profileHighScore.innerText = highScore;
};



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
    score +=10;   
    if (score > highScore) {
      highScore = score; // Update the high score if the current score is higher
      scoreShow.innerText=score
      updateProfileHighScore();
    }  
    resetGame();
  } else if (wrongGuesses === maxGuesses) {
    score=0
    popUpWordShow.innerText=currentAnswer;
    scoreShow.innerText=score
    highScoreShow.innerText=highScore
    $('.popup-container').fadeIn(500)
    
    
  }
};


let currentAnswer; // New variable to keep track of the current answer

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * persianQuestionsList.length);
  const { question, answer } = persianQuestionsList[randomIndex];
  currentWord = answer;
  currentAnswer = answer; // Store the correct answer in the currentAnswer variable
  document.querySelector('.question').innerText = question;
  wordDisplay.innerHTML = answer.split("").map(() => '<li class="answer-letter"></li>').join("");
};


const resetGame = () => {
  wrongGuesses = 0;
  guessesText.innerText = wrongGuesses + '/' + maxGuesses;
  correctLetter = [];
  $('.key').removeClass('key-disabled');

  // Delay the execution of getRandomWord() by 1 seconds
  setTimeout(() => {
    getRandomWord();
  }, 500);
};

//dynamic keyboard buttons : 
const persianCharacters = [
    'ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س',
    'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و',
    'ه', 'ی'
  ];
  
  for (let i = 0; i < persianCharacters.length; i++) {
    const button = document.createElement('button');
    button.classList.add('key');
    button.innerText = persianCharacters[i];
    keyboardDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, persianCharacters[i]));
  }
// start game 
getRandomWord();

// popup info 
$('#popup-button').click(function(){
  $('.popup-container').fadeOut()
  resetGame()
})



// burger menu 
$('.hamburger-button').click(function(){
  $('.hamburger-menu').css('left','0')
})
$('.hamburger-button').click(function(){
  $('.fade-bg').fadeIn(300)
})

$('.fa-xmark').click(function(){
  $('.hamburger-menu').css('left','-500px')
})
$('.fa-xmark').click(function(){
  $('.fade-bg').fadeOut(300)
})
$('.fade-bg').click(function(){
  $('.hamburger-menu').css('left','-500px')
  $('.fade-bg').fadeOut(300)
})

// gamer profile show on click 

$('.avatar').click(function(){
  $('.gamer-info').css('right','0')
})
$('#close-icon').click(function(){
  $('.gamer-info').css('right','-400px')
})