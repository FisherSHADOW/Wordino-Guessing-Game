const keyboardDiv = document.querySelector('.keyboard-container')
const wordDisplay= document.querySelector('.answer-list')
let currentWord;
const initGame = (button, clickedLetter) =>{
    //checking if clicked letter is exist on the currentword
    if (currentWord.includes(clickedLetter)) {
        //show correct letter 
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter){
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed")
            }
        })
    }else{
        console.log(clickedLetter, "is not exist on the word") 
    }
}
//get random questions + answer box 
const getRandomWord= () =>{
    const {answer, question}= questionsList[Math.floor(Math.random() * questionsList.length)]
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
    button.addEventListener('click',e => initGame(e.target, String.fromCharCode(i)));
}
getRandomWord();