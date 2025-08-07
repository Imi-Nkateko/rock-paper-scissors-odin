// Declare the players Score variable in the Global scope
// default score should be 0
let humanScore = 0
let computerScore = 0



// Create a function to get computer choice
// Write the code so that getComputerChoice will RANDOMly 
// RETURN one of the following string values: “rock”, “paper” or “scissors”. 
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    }
    return "scissors"
}
console.log(getComputerChoice())

// Create a new function named getHumanChoice.
// Write code that will get User INPUT and RETURN the value
const getHumanChoice = () => {
    let humanChoice = prompt("Rock Paper or Scisssors", "")
    return humanChoice.toLowerCase()
    
}
console.log(getHumanChoice())

//  Write the logic to play a single round
// Create a new function named playRound().
// define parameters as arguments PlayRound(humanChoice, computerChoice)
const playRound = (humanChoice, computerChoice) => {
    // write playRound logic
    // Increment humanScore or computerChoice based on this logic
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win!, Rock beats Scissors");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win!, Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win!, Paper beats Rock");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose!, Rock beats Scissors");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose!, Scissors beats Paper");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose!, Paper beats Rock");
      computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`Draw! you both chose ${humanChoice}`)
        humanScore++
        computerChoice++
    } else {
        console.log("Enter Rock, Paper or Scissors")
    }
}