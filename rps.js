// Write a function that returns rock, paper or scissors.

function getComputerChoice () {

    //Return in a randomized way, number 0 or number 1

    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 10);

    // Return Rock, paper or scissors

    if (roundedNumber >= 7 && roundedNumber <= 10 ) {
        return "Scissors"
    } else if (roundedNumber >= 0 && roundedNumber <= 3) {
        return "Paper"
    }
    else {
        return "Rock"
    }

}


