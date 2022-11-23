// state
let user__score = 0;
let computer__score = 0;

// selectors
const hands = document.querySelectorAll(".main__hands img");
const userScore = document.querySelector(".user__score");
const computerScore = document.querySelector(".computer__score");
const mainMessage = document.querySelector(".main__message");

// select choice
const play = (e) => {
  const hands = ["rock", "paper", "scissors"];
  //   computer choice
  const computerChoice = hands[Math.floor(Math.random() * hands.length)];

  //   check draw
  if (
    (e.target.id === "rock" && computerChoice === "rock") ||
    (e.target.id === "paper" && computerChoice === "paper") ||
    (e.target.id === "scissors" && computerChoice === "scissors")
  ) {
    // display message
    mainMessage.textContent = `Draw! Both players selected ${e.target.id}.`;
  }
  //   check user win
  if (
    (e.target.id === "rock" && computerChoice === "scissors") ||
    (e.target.id === "paper" && computerChoice === "rock") ||
    (e.target.id === "scissors" && computerChoice === "paper")
  ) {
    // display message
    mainMessage.textContent = `You win! ${e.target.id} beats ${computerChoice}.`;
    // update score
    user__score++;
    userScore.textContent = user__score;
  }
  // check user lose
  if (
    (e.target.id === "rock" && computerChoice === "paper") ||
    (e.target.id === "paper" && computerChoice === "scissors") ||
    (e.target.id === "scissors" && computerChoice === "rock")
  ) {
    mainMessage.textContent = `You lose! ${computerChoice} beats ${e.target.id}.`;
    // update score
    computer__score++;
    computerScore.textContent = computer__score;
  }
};

hands.forEach((e) => {
  e.addEventListener("click", play);
});

window.addEventListener("load", function () {
  userScore.textContent = user__score;
  computerScore.textContent = computer__score;
});
