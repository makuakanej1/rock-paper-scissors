let computerMove = '';
let result = '';
let humanScore = 0;
let computerScore = 0;



function playGame(humanChoice) {
    getComputerMove();
    
    if (humanChoice === 'rock') {
        if (computerMove === 'rock') {
            result = 'You Tie.';
        } else if (computerMove === 'paper') {
            result = 'You Lose.';
        } else if (computerMove === 'scissors') {
            result = 'You Win.';
        }
    } else if (humanChoice === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win.';
        } else if (computerMove === 'paper') {
            result = 'You Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You Lose.'
        }
    } else if (humanChoice === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose.';
        } else if (computerMove === 'paper') {
            result = 'You Win.';
        } else if (computerMove === 'scissors') {
            result = 'You Tie.'
        }
    }

    
    if (result === 'You Win.') {
        humanScore++;
    } else if (result === 'You Lose.') {
        computerScore++;
    } 

    document.getElementById('human-score').textContent = humanScore;
    document.getElementById('computer-score').textContent = computerScore;

    return alert(`You picked ${humanChoice}. Computer picked ${computerMove}. ${result}`)
}

function getComputerMove() {
    let randomNumber = Math.random(Math.floor());

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;

    document.getElementById('human-score').textContent = 0;
    document.getElementById('computer-score').textContent = 0;
}




