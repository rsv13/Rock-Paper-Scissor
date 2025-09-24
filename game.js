console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

// Select buttons
const rockBtn = document.querySelector("#btn-rock");
const paperBtn = document.querySelector("#btn-paper");
const scissorBtn = document.querySelector("#btn-scissor");

// Results div
const resultsDiv = document.querySelector("#results");

// Button event listeners
rockBtn.addEventListener("click", () => {
    const humanChoice = "rock";
    const compChoice = getComputerChoice();
    playRound(compChoice, humanChoice);
});

paperBtn.addEventListener("click", () => {
    const humanChoice = "paper";
    const compChoice = getComputerChoice();
    playRound(compChoice, humanChoice);
});

scissorBtn.addEventListener("click", () => {
    const humanChoice = "scissors";
    const compChoice = getComputerChoice();
    playRound(compChoice, humanChoice);
});

// Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];
    console.log("Computer chose: " + compChoice);
    return compChoice;
}

// Function to play one round
function playRound(compChoice, humanChoice) {
    let message = "";

    // Compare choices and update scores
    if (compChoice === humanChoice) {
        message = "It's a draw!";
    } else if (
        (compChoice === "rock" && humanChoice === "scissors") ||
        (compChoice === "scissors" && humanChoice === "paper") ||
        (compChoice === "paper" && humanChoice === "rock")
    ) {
        computerScore++;
        message = "You Lose!";
    } else {
        humanScore++;
        message = "You Win!";
    }

    // Add choices and scores
    message += `<br>Computer chose: ${compChoice} <br>You chose: ${humanChoice}`;
    message += `<br>Score - You: ${humanScore} | Computer: ${computerScore}`;

    // Check if someone reached 5 points
    if (humanScore === 5) {
        message += "<br>🎉 You reached 5 points! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        message += "<br>💻 Computer reached 5 points! You lose the game!";
        disableButtons();
    }

    // Display the message
    resultsDiv.innerHTML = message;
}

// Function to disable buttons
function disableButtons() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}
