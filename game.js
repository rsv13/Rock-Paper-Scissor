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