let throws = ["rock", "paper", "scissors"];

let playerWins = 0;
let computerWins = 0;

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

    // in each of the cases below, add 1 to winner's score

    // user plays rock
    else if (playerSelection === "rock") {
        // if computer plays scissors, player wins
        if (computerSelection === "scissors") {
            playerWins++;
            return "You win!";

        // if computer plays paper, computer wins    
        } else {
            computerWins++;
            return "Computer won!"
        }
    }

    // user plays paper
    else if (playerSelection === "paper") {
        // if computer plays scissors, computer wins
        if (computerSelection === "scissors") {
            computerWins++;
            return "Computer wins!";

        // if computer plays rock, you win    
        } else {
            playerWins++;
            return "You won!!"
        }
    }

    // user plays scissors
    else if (playerSelection === "scissors") {
        // if computer plays rock, computer wins
        if (computerSelection === "rock") {
            computerWins++;
            return "Computer wins!";

        // if computer plays paper, player wins    
        } else {
            playerWins++;
            return "You won!"
        }
    }

    else {
        return "You can't play that. Let's try again."
    }

}

/* testing logic of playRound 

let playerSelection = "paper";
let computerSelection = computerPlay();
console.log("You played: " + playerSelection);
console.log("Computer played: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
*/

function game() {

    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        
        console.log("++++ ROUND " + (i+1) + " ++++");

        // get each player's throws, and display them
        playerSelection = prompt("Type rock, paper, or scissors: ")
        computerSelection = computerPlay();

         // if player cancels the dialog without any input
         if (playerSelection === null) {
        console.log("Looks like you ended the game! If you want to play again, just type 'game()' into the console.");
        i = 6; 
        break;
        }

        console.log("You played: " + playerSelection);
        console.log("Computer played: " + computerSelection);

        //evaluate throw, and display results
        console.log("\n"+playRound(playerSelection, computerSelection));
        
        //display overall score
        console.log("Your score: " + playerWins);
        console.log("Computer score: " + computerWins + "\n");
        console.log("\n");

    }

    console.log("That's the game! If you want to play again, type 'game()' into the console and hit enter.");
}