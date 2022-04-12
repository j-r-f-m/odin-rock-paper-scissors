function computerPlay() {
    // define array with the different game elements
    const elements = ["rock", "paper", "scissors"];
    // create random number between 0 and 3
    let randomElement = Math.floor(Math.random() * 3);
    // element choosen by computer
    choosenElement = elements.at(randomElement);
    return choosenElement
}


function playRound(playerSelection, computerSelection) {
    // convert player input to lower case
    lowerCasePlayerSelection = playerSelection.toLowerCase()
    //console.log(lowerCasePlayerSelection)
    // player winning conditions
    if (lowerCasePlayerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors.'
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper.'
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! Paper beats Rock.'
    // computer winning conditions    
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors.'
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper.'
    } else if (lowerCasePlayerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose! Paper beats Rock.'
    // draw
    } else if (lowerCasePlayerSelection == computerSelection) {
        return 'Draw! Play again.'
    }
}


function game() {
    
    // initial score of players
    let scorePlayer = 0;
    let scoreComputer = 0;
    let countDraw = 0;
    // five round game
    for (let i = 0; i < 5; i++) {
        // get player input
        let playerSelection = prompt("Choose your weapon!", 'Rock');
        let computerSelection = computerPlay();
        // save result of game to variable
        let roundResult = playRound(playerSelection,computerSelection);
        console.log(`Player choice: ${playerSelection} | Computer choice: ${computerSelection}`)
        console.log(roundResult)
        // turn return string into array to determin winner
        let resultArr = roundResult.split("!")
        // DEBUG console.log(resultArr)
        if (resultArr[0] == 'You win') {
            scorePlayer += 1
        } else if (resultArr[0] == 'You lose') {
            scoreComputer += 1
        } else {
            countDraw += 1;
        }
    }
    console.log(`Player Score: ${scorePlayer} | Computer Score: ${scoreComputer} | Draw Count: ${countDraw}`)
}

// call game funciton
game()