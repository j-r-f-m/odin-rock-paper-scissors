function computerPlay() {
    /**
     * cpu player choice
     * a random element from an array is chosen and returned
     */
    const elements = ["rock", "paper", "scissors"];   
    let randomElement = Math.floor(Math.random() * 3);
    choosenElement = elements.at(randomElement);
    return choosenElement
}


function playRound(playerSelection, computerSelection) {
    /**
     * the winner of one round is determined
     * the gameState()-function is called with the round winner as argument
     */
   
    lowerCasePlayerSelection = playerSelection.toLowerCase()
   
    if (lowerCasePlayerSelection == 'rock' && computerSelection == 'scissors') {
        gameState('player')
        return 'You win! Rock beats Scissors.'
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'paper') {
        // pass the winner of the current round to the gameState-function
        gameState('player')
        return 'You win! Scissors beats Paper.'
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'rock') {
        gameState('player')
        return 'You win! Paper beats Rock.'
    // computer winning conditions    
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'rock') {
        gameState('computer')
        return 'You lose! Rock beats Scissors.'
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'scissors') {
        gameState('computer')
        return 'You lose! Scissors beats Paper.'
    } else if (lowerCasePlayerSelection == 'rock' && computerSelection == 'paper') {
        gameState('computer')
        return 'You lose! Paper beats Rock.'
    // draw
    } else if (lowerCasePlayerSelection == computerSelection) {
        return 'Draw! Play again.'
    }
}

function gameState (winner) {
    /**
     * updates the score board
     * the playAgain()-function is called to check if the game has to be reset
     */

    if (winner == 'player') {
        const divPlayerScore = document.querySelector('#playerScore');
        PLAYER_SCORE += 1;
        divPlayerScore.textContent = PLAYER_SCORE.toString();
        console.log(PLAYER_SCORE)
        
        
    } else if (winner == 'computer') {
        const divComputerScore = document.querySelector('#computerScore');
        COMPUTER_SCORE += 1;
        divComputerScore.textContent = COMPUTER_SCORE.toString();
        console.log('com' + COMPUTER_SCORE)
        
    }

    playAgain()

}



function playAgain() {
    /**
     * it is determined if the game has to be reset
     */
    let again;
    if (PLAYER_SCORE == 5) {       
    alert("Your Win!\nPlay again?"); 
    again = true;   
    } else if (COMPUTER_SCORE == 5) {
        alert("Your Lose!\nPlay again?"); 
        again = true; 
    }

    console.log(again)
    if (again) {
        // reset scores of the players
        const divPlayerScore = document.querySelector('#playerScore');
        PLAYER_SCORE = 0;
        divPlayerScore.textContent = PLAYER_SCORE.toString();

        const divComputerScore = document.querySelector('#computerScore');
        COMPUTER_SCORE = 0;
        divComputerScore.textContent = COMPUTER_SCORE.toString();
    }
 
}

// initilize game state variables
let PLAYER_SCORE = 0;
let COMPUTER_SCORE = 0;
let ROUNDS_PLAYED = 0;



const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    let cpu = computerPlay();
    roundOutcome = playRound('rock', cpu);
    console.log(roundOutcome);
    
});

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    let cpu = computerPlay();
    roundOutcome = playRound('paper', cpu);
    console.log(roundOutcome);
});

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    let cpu = computerPlay();
    roundOutcome = playRound('scissors', cpu);
    console.log(roundOutcome);
});



