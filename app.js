// Game values 
let min = 1, 
    max = 10, 
    winningNum = 2, 
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;       

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
            

        //validate
        if(isNaN(guess) || guess < min || guess > max){
            setMessage(`Please enter a number between ${min} and ${max},`, 'red');
        }

        //check if won
        if (guess === winningNum){
            //game over - won
            gameOver(true, `${winningNum} is correct. YOU WIN!!`);

        }else{
        //wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0){
            //Game over 
            gameOver(false, `Game over. You lost. The correct number is ${winningNum}`);
        }else{
            //game continues - answer wrong

             setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left`, 'red');
        }
    }
});

//Game over 
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
//disable input
        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = color;
        //TEXT COLOR
        message.style.color = color;
        setMessage(msg);

}



//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}