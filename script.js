function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  console.log(getComputerChoice()); // Test the function

  function getHumanChoice() {
    return prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  }
  console.log(getHumanChoice()); // Test the function

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
      console.log("You lost the game! Better luck next time.");
    } else {
      console.log("The game is a tie!");
    }
  }
  playGame();
  