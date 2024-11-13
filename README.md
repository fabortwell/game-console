
# Rock, Paper, Scissors Console Game

This is a simple "Rock, Paper, Scissors" game built using HTML and JavaScript. The game is played entirely in the browser console and allows a human player to play against a computer opponent.

## Project Overview

The project demonstrates fundamental JavaScript concepts, including:
- Function definitions and calls
- Conditionals and control flow
- DOM interaction through the console
- Random number generation for computer choice

## How to Play

1. Open the project in your browser.
2. Open the browser's developer console (usually accessible via F12 or right-click > "Inspect" > "Console" tab).
3. The game will prompt you to enter either "rock", "paper", or "scissors" as your choice.
4. The computer will make its choice at random.
5. After each round, the score is updated, and a winner is declared for that round.
6. After five rounds, the final score and game winner are displayed in the console.

## Project Structure

The project consists of two main files:
- `index.html` - A minimal HTML document that links to the JavaScript file.
- `script.js` - Contains all JavaScript code for game functionality.

## Features

- **Computer Choice**: Randomly generated selection of either "rock", "paper", or "scissors."
- **Human Choice**: User input is accepted through a `prompt()` dialog.
- **Score Tracking**: Keeps track of the scores for both the human player and computer.
- **Round Results**: Each round's result is displayed in the console.
- **Final Game Result**: After five rounds, the game announces the overall winner.

## Setup Instructions

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/fabortwell/game-console
   ```
2. Open `index.html` in your preferred web browser.
3. Open the developer console to play the game.

## Example Code

```javascript
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  // Game logic goes here
}
```

## Sample Output

```plaintext
Round 1: You win! Rock beats Scissors.
Round 2: You lose! Paper beats Rock.
...
Final Result: You won the game!
```

## Contributing

Feel free to fork the project and submit pull requests if you have improvements or new features to add.
