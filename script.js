let humanScore = 0;
let computerScore = 0;

const rockbtn = document.querySelector("#rockBtn");
const paperbtn = document.querySelector("#paperBtn");
const scissorsbtn = document.querySelector("#scissorsBtn");

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
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log(`Draw! You both chose ${humanChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
};
