console.log("Hello World!");

// Writing a function to let computer randomly choose its choice and battle against the human choice
// Using arrays to store all the available choices and then using Math.random function to pick only one choice at a time
    function getComputerChoice() {
        let choice = ["Rock", "Paper", "Scissors"];
        let randomChoice = Math.floor(Math.random() * choice.length);
        let compChoice = choice[randomChoice];
        console.log("Computer chose: " + compChoice.toLowerCase());
        return compChoice.toLowerCase();
    }

// Now we create a function which helps a human to make a choice

    function getHumanChoice() {
        let humanChoice = prompt("Kindly choose: " + "Rock, " + "Paper, " + "Scissors");
        console.log("You chose: " + humanChoice.toLowerCase());
        return humanChoice.toLowerCase();
    }

// THE REAL GAME BEGINS - Creating a function which will help in determining the winner 

    function playRound(compChoice, humanChoice) {
        if (compChoice === humanChoice) {
            alert("It's a draw!");
        } else if (
            (compChoice === "rock" && humanChoice === "scissors") || 
            (compChoice === "scissors" && humanChoice === "paper") ||
            (compChoice === "paper" && humanChoice === "rock")
        ) {
            alert("You Lose :( !! Computer Wins!")
            } else {
                alert ("You Win!! Hurray ");
            }
        }

//BRINGING GAME TO ACTION

let compChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(compChoice, humanChoice);

