function computerPlay() {
    // define array with the different game elements
    const elements = ["rock", "paper", "scissors"];
    // create random number between 0 and 3
    let randomElement = Math.floor(Math.random() * 3);
    // element choosen by computer
    choosenElement = elements.at(randomElement);
    return choosenElement
}


