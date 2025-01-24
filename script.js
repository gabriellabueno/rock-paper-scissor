let msg = `~~ ROCK PAPER SCISSORS ~~\n
            Make your choice:\n
            1 | Rock
            2 | Paper
            3 | Scissors
            0 | EXIT`

let getComputerChoice = () => Math.floor(Math.random() * 3);

function getHumanChoice(msg) {
    let userChoice = parseInt(prompt(msg));

    return (userChoice < 0 || userChoice > 3 || isNaN(userChoice)) ?
            alert("Invalid input! Try again"):
        (userChoice == 0) ?
            null:
            userChoice-1;
}

function checkWin(computer, human) {
    let winner;
    
    winner = 
        (computer == human) ? 
            "It's a tie!" :
        (computer == 0 && human == 2) || (computer == 1 && human == 0) || (computer == 2 && human == 1) ?
            "Computer wins!" : 
            "Human wins!";
    
    return result(computer, human, winner);
}

function result(computer, human, winner){
    computer = convertNumberToWord(computer);
    human = convertNumberToWord(human);
    alert(`Human: ${human} \nComputer: ${computer} \n\n ${winner}`);

    return winner;
}

function convertNumberToWord(value) {
    switch(value) {
        case 0: value = "Rock"; break;
        case 1: value = "Paper"; break;
        case 2: value = "Scissors"; break;
    }
    return value;
}

function playRound() {
    let humanScore = 0;
    let computerScore = 0;

    while (true) {
        let humanChoice = getHumanChoice(msg);
        let computerChoice = getComputerChoice();

        if (humanChoice === null) break;
        
        let roundWinner = checkWin(computerChoice, humanChoice);

        if (roundWinner == "Computer wins!") computerScore++;
        else if(roundWinner == "Human wins!") humanScore++;

        alert(`SCORE \n Human: ${humanScore} \n Computer: ${computerScore}`);
    }
    
    alert(`FINAL SCORE \n Human: ${humanScore} \n Computer: ${computerScore}`);
    alert("Bye =D");
}

playRound();



