let humanScore = 0;
let computerScore = 0;

const scoreDisplay = document.querySelector("#scoreDisplay");

const rockbtn = document.querySelector("#rockBtn");
const paperbtn = document.querySelector("#paperBtn");
const scissorsbtn = document.querySelector("#scissorsBtn");

const resultsEl = document.querySelector("#displayResults");

let resultDisplay = document.createElement("h1");

rockbtn.addEventListener("click", () => {
  playRound("rock");
});

paperbtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsbtn.addEventListener("click", () => {
  playRound("scissors");
});

const getComputerChoice = () => {
  let choices = ["rock", "paper", "scissors"]; 
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = (humanChoice) => {
  
  const computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);


  if (humanChoice === "rock" && computerChoice === "scissors") {

    resultDisplay.textContent = "You win! Rock beats Scissors";
    
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
 
    resultDisplay.textContent = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
   
    resultDisplay.textContent = "You win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === computerChoice) {
  
    resultDisplay.textContent = `Draw! You both chose ${humanChoice}`;
  } else {
  
    resultDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

    resultsEl.appendChild(resultDisplay);

    scoreDisplay.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;
    if (humanScore === 5) {
      scoreDisplay.textContent =
        "Game Over, Player Wins!!!....Click Rock, Paper or Scissors to restart";
      humanScore = 0;
      computerScore = 0;
      resultDisplay.textContent = "";
    } else if (computerScore === 5) {
      scoreDisplay.textContent = "Game Over, Computer Wins!!!....Click Rock, Paper or Scissors to restart";
      humanScore = 0;
      computerScore = 0;
      resultDisplay.textContent = "";
    }

    
};
