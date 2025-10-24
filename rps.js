// Define global variables

let humanScore = 0;
let computerScore = 0;
const GAME_DURATION = 5;
let roundPlayed = 0;

const buttons = document.querySelectorAll(".options");
const score = document.querySelector(".score");
const gameTitle = document.querySelector(".game-title");
const div = document.createElement("div");
div.classList.add("result")
const roundScore = document.querySelector(".round-score")

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

    if (roundPlayed >= GAME_DURATION) {
        determineWinner();
    } 

    if (roundPlayed < GAME_DURATION) {

        if (computerElectionIsRock && humanSelection === "scissors") {
            ++computerScore
        } else if (computerElectionIsScissors && humanSelection === "paper") {
            ++computerScore 
        } else if (computerElectionIsPaper && humanSelection === "rock") {
            ++computerScore
        } else if (computerSelection === humanSelection ) {
            return;
        } else {
            ++humanScore
        }

        ++roundPlayed

    } 

        roundScore.textContent = `Round: ${roundPlayed}/${GAME_DURATION}`;
        score.textContent = `Score — Computer: ${computerScore}, Player: ${humanScore}`;

}

function determineWinner () {

    if(humanScore > computerScore) {
        div.textContent = "Human Wins";
        score.appendChild(div);
    } else if (computerScore > humanScore) {
        div.textContent = "Computer Wins";
        score.appendChild(div);
    } else {
         div.textContent = "It's a tie";
        score.appendChild(div);
    }

    humanScore = 0;
    computerScore = 0;
    roundPlayed = 0;
    
}

elementEventListener(".options", "node", "click", playRound);




