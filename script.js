let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let roundNumber = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");

const resultDisplay = document.getElementById("result");

const historyList = document.getElementById("historyList");

const resetButton = document.getElementById("reset");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGame(playerChoice) {

    if (gameOver) {
        return;
    }

    roundNumber++;

    const computerChoice = getComputerChoice();

    let roundResult;

    if (playerChoice === computerChoice) {

        roundResult = "It's a tie!";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        playerScore++;

        roundResult = "You win!";

    } else {

        computerScore++;

        roundResult = "Computer wins!";
    }

    playerChoiceDisplay.textContent ="You chose: " + playerChoice;

    computerChoiceDisplay.textContent ="Computer chose: " + computerChoice;

    resultDisplay.textContent = roundResult;

    playerScoreDisplay.textContent = playerScore;

    computerScoreDisplay.textContent = computerScore;

    const historyItem = document.createElement("li");

    historyItem.textContent =
        "Round " + roundNumber +
        " — You: " + playerChoice +
        " | Computer: " + computerChoice +
        " | " + roundResult;

    historyList.appendChild(historyItem);

    if (playerScore === 5) {

        resultDisplay.textContent =
            "🎉 You won the game!";

        gameOver = true;

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

    } else if (computerScore === 5) {

        resultDisplay.textContent =
            "💻 Computer won the game!";

        gameOver = true;

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

rockButton.addEventListener("click", function () {
    playGame("rock");
});

paperButton.addEventListener("click", function () {
    playGame("paper");
});

scissorsButton.addEventListener("click", function () {
    playGame("scissors");
});

resetButton.addEventListener("click", function () {

    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    roundNumber = 0;

    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    playerChoiceDisplay.textContent =
        "You chose: -";

    computerChoiceDisplay.textContent =
        "Computer chose: -";

    resultDisplay.textContent =
        "Make your choice!";

    historyList.innerHTML = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
});