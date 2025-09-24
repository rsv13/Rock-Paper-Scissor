console.log("Hello World!");


// Select buttons
const rockBtn = document.querySelector("#btn-rock");
const paperBtn = document.querySelector("#btn-paper");
const scissorBtn = document.querySelector("#btn-scissor");

// Rock button
rockBtn.addEventListener("click", () => {
    const humanChoice = "rock";
    const compChoice = getComputerChoice();
    playRound(compChoice, humanChoice);
});

// Paper button
paperBtn.addEventListener("click", () => {
    const humanChoice = "paper";
    const compChoice = getComputerChoice();
    playRound(compChoice, humanChoice);
});

// Scissors button
scissorBtn.addEventListener("click", () => {
    const humanChoice = "scissors";
    const compChoice = getComputerChoice();
    playRound(compChoice, humanChoice);
});



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

// //BRINGING GAME TO ACTION

// let compChoice = getComputerChoice();
// let humanChoice = getHumanChoice();
// playRound(compChoice, humanChoice);


//PLAY 5 ROUNDS OF GAME
// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`--- Round ${i} ---`);
//         let compChoice = getComputerChoice();   // NEW computer choice each round
//         let humanChoice = getHumanChoice();     // NEW human choice each round
//         playRound(compChoice, humanChoice);
//     }
// }

// // Start 5-round game
// playGame();

