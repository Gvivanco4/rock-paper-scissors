// Write a function that returns rock, paper or scissors.

function getComputerChoice () {

    //Return in a randomized way, number 0 or number 1

    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 10);

    // Return Rock, paper or scissors

     return validateComputerChoice(roundedNumber);
}

function getHumanChoice () {
    const humanChoice = prompt("Rock, paper or Scissors?");

    if (humanChoice === null) {
        alert("Invalid answer, please try again")
    }

    return humanChoice;
}

function validateComputerChoice ( roundedNumber ) {

    if (roundedNumber >= 7 && roundedNumber <= 10 ) {
        return "Scissors"
    } else if (roundedNumber >= 0 && roundedNumber <= 3) {
        return "Paper"
    }
    else {
        return "Rock"
    }
}

function playRound (getComputerChoice, getHumanChoice) {

    const computerElection = getComputerChoice().toLowerCase();
    const humanChoice = getHumanChoice().toLowerCase();
    const computerElectionIsRock = computerElection === "rock";
    const computerElectionIsScissors = computerElection === "scissors";
    const computerElectionIsPaper = computerElection === "paper";
    console.log(humanChoice);


    //Validate computer vs human choice elections

    if (computerElectionIsRock && humanChoice === "scissors") {
        ++computerScore
    } else if (computerElectionIsScissors && humanChoice === "paper") {
        ++computerScore 
    } else if (computerElectionIsPaper && humanChoice === "rock") {
        ++computerScore
    } else if (computerElection === humanChoice ) {
        alert("Its a tie");
        return;
    } else {
        ++humanScore
    }

}

function playGame () {
    const GAMEDURATION = 5;


    for (let i = 1; i <= GAMEDURATION; i++) {
        playRound(getComputerChoice, getHumanChoice)
        alert(`Round ${i} is completed`)
        alert(`Score is Human:${humanScore} vs Computer: ${computerScore}`)
    }

    determineWinner();

}

function determineWinner () {

    if (humanScore > computerScore) {
        alert("Human Wins!");
    } else {
        alert("Computer Wins!")
    }
}


let humanScore = 0;
let computerScore = 0;

playGame();





