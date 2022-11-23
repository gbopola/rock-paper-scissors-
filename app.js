// state
let user__score = 0;
let computer__score = 0;

// selectors
const hands = document.querySelectorAll(".main__hands img");
const userScore = document.querySelector(".user__score");
const computerScore = document.querySelector(".computer__score");
const mainMessage = document.querySelector(".main__message");

// get computer choice
const getComputerChoice = () => {
  const hands = ["rock", "paper", "scissors"];
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];
  return computerChoice;
};

// display message and update
const displayMessageAndUpdate = (e, condition, computerChoice) => {
  if (condition === "draw") {
    // display message
    mainMessage.textContent = `Draw! Both players selected ${e.target.id}.`;
  }
  if (condition === "win") {
    // display message
    mainMessage.textContent = `You win! ${e.target.id} beats ${computerChoice}.`;
    // update score
    user__score++;
    userScore.textContent = user__score;
  }
  if (condition === "lose") {
    // display message
    mainMessage.textContent = `You lose! ${computerChoice} beats ${e.target.id}.`;
    // update score
    computer__score++;
    computerScore.textContent = computer__score;
  }
};

// select choice
const play = (e) => {
  // Get computer choice
  const computerChoice = getComputerChoice();

  // check draw
  if (
    (e.target.id === "rock" && computerChoice === "rock") ||
    (e.target.id === "paper" && computerChoice === "paper") ||
    (e.target.id === "scissors" && computerChoice === "scissors")
  ) {
    displayMessageAndUpdate(e, "draw", computerChoice);
  }
  //   check user win
  if (
    (e.target.id === "rock" && computerChoice === "scissors") ||
    (e.target.id === "paper" && computerChoice === "rock") ||
    (e.target.id === "scissors" && computerChoice === "paper")
  ) {
    displayMessageAndUpdate(e, "win", computerChoice);
  }
  // // check user lose
  if (
    (e.target.id === "rock" && computerChoice === "paper") ||
    (e.target.id === "paper" && computerChoice === "scissors") ||
    (e.target.id === "scissors" && computerChoice === "rock")
  ) {
    displayMessageAndUpdate(e, "lose", computerChoice);
  }
};

hands.forEach((e) => {
  e.addEventListener("click", play);
});

window.addEventListener("load", function () {
  userScore.textContent = user__score;
  computerScore.textContent = computer__score;
});
