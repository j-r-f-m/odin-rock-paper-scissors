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
    console.log(lowerCasePlayerSelection)
    // player winning conditions
    if (lowerCasePlayerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock beats Scissors. You win!'
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'paper') {
        return 'Scissors beats Paper. You win!'
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'rock') {
        return 'Paper beats Rock. You win!'
    // computer winning conditions    
    } else if (lowerCasePlayerSelection == 'scissors' && computerSelection == 'rock') {
        return 'Rock beats Scissors. You lose!'
    } else if (lowerCasePlayerSelection == 'paper' && computerSelection == 'scissors') {
        return 'Scissors beats Paper. You lose!'
    } else if (lowerCasePlayerSelection == 'rock' && computerSelection == 'paper') {
        return 'Paper beats Rock. You lose!'
    } else if (lowerCasePlayerSelection == computerSelection) {
        return 'Draw! Play again?'
    }
}


console.log(playRound('Rock', computerPlay()))