const keyboardDiv = document.querySelector('.keyboard-container')
const guessesText = document.querySelector('.wrong-guesses')
const wordDisplay= document.querySelector('.answer-list')
const tryAgainButton = document.querySelector('.try-again')
let currentWord, correctLetter = [], wrongGuesses = 0
const maxGuesses= 5

let score= 0;
const initGame = (button, clickedLetter) =>{
    //checking if clicked letter is exist on the currentword
    if (currentWord.includes(clickedLetter)) {
        //show correct letter 
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter){
                correctLetter.push(letter)
                console.log(correctLetter)
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
            }
        })
    }else{
        wrongGuesses++
    }
    guessesText.innerText = ''
    guessesText.innerText = wrongGuesses + '/' +maxGuesses
    button.classList.add('key-disabled')
    if (correctLetter.length===currentWord.length) {
        success();
     }
}
//get random questions + answer box 
const getRandomWord= () =>{
    const {answer, question} = questionsList[Math.floor(Math.random() * questionsList.length)]
    currentWord=answer;
    console.log(answer);
    document.querySelector('.question').innerText = question;
    wordDisplay.innerHTML=answer.split("").map(() => '<li class="answer-letter"></li>').join("");

}


//dynamic keyboard buttons : 
for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button')
    button.classList.add('key')
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

// reset game with the try again button 
    $('.try-again').click(function(){ 
        wrongGuesses = 0;
        guessesText.innerText = wrongGuesses + '/' +maxGuesses;
        $('.key').removeClass('key-disabled');
        getRandomWord();
    });