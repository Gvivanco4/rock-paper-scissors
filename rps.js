// Define global variables

let humanScore = 0;
let computerScore = 0;
const GAME_DURATION = 5;

const buttons = document.querySelectorAll(".options");
const score = document.querySelector(".score");
const gameTitle = document.querySelector(".game-title");

// Event Listeners Function

function elementEventListener( element, type = "singleElement", event, callbackFunction  ) {

    if (type === "node") {
            const htmlNodeList = document.querySelectorAll(`${element}`);
            htmlNodeList.forEach((ele) => {
                ele.addEventListener(event, () => {
                   callbackFunction(ele)
                })})
            } else {
            const htmlElement = document.querySelector(`${element}`);
            htmlElement.addEventListener(event, () => {
                callbackFunction(ele)
            });
        }
    
    }
    
//Element class name helper function

function getHumanElection (election) {
    if (election.className === "options rock") {
        return "rock";
    } else if (election.className === "options paper") {
        return "paper";
    } else if (election.className === "options scissors") {
        return "scissors";
    }
}

//Computer Election

function getComputerElection () {

    //Return in a randomized way, number 0 or number 1

    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 10);

    // Return Rock, paper or scissors

     return validateComputerChoice(roundedNumber);
}

function validateComputerChoice ( roundedNumber ) {

    if (roundedNumber >= 7 && roundedNumber <= 10 ) {
        return "scissors"
    } else if (roundedNumber >= 0 && roundedNumber <= 3) {
        return "paper"
    }
    else {
        return "rock"
    }
}

// Play round function

function playRound ( ele ) {

    const humanSelection = getHumanElection(ele);
    const computerSelection = getComputerElection();
    const computerElectionIsRock = computerSelection === "rock";
    const computerElectionIsScissors = computerSelection === "scissors";
    const computerElectionIsPaper = computerSelection === "paper";

// Comparison logic

    if (computerElectionIsRock && humanSelection === "scissors") {
        ++computerScore
    } else if (computerElectionIsScissors && humanSelection === "paper") {
        ++computerScore 
    } else if (computerElectionIsPaper && humanSelection === "rock") {
        ++computerScore
    } else if (computerSelection === humanSelection ) {
        alert("Its a tie");
        return;
    } else {
        ++humanScore
    }

    console.log(humanScore, computerScore);

}
