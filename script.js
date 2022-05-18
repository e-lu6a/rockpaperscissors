let throws = ["rock", "paper", "scissors"];

function computerPlay() {
    let x = Math.floor(Math.random()*3)
    return throws[x];
}

function playRound (playerSelection, computerSelection) {

    // make player's choice case insensitive
    playerSelection = playerSelection.toLowerCase();

    // in case of tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // user plays rock
    else if (playerSelection === "rock") {
        // if computer plays scissors, player wins
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!";

        // if computer plays paper, computer wins    
        } else {
            return "Computer won! Paper beats rock!"
        }
    }

    // user plays paper
    else if (playerSelection === "paper") {
        // if computer plays scissors, computer wins
        if (computerSelection === "scissors") {
            return "Computer wins! Scissors beats paper!";

        // if computer plays rock, you win    
        } else {
            return "You won! Paper beats rock!"
        }
    }

    // user plays scissors
    else if (playerSelection === "scissors") {
        // if computer plays rock, player wins
        if (computerSelection === "rock") {
            return "Computer wins! Rock beats scissors!";

        // if computer plays paper, computer wins    
        } else {
            return "You won! Scissors beats paper!"
        }
    }

}

let playerSelection = "paper";
let computerSelection = computerPlay();
console.log("You played: " + playerSelection);
console.log("Computer played: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));