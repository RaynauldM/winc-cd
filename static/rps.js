let btnPlacement = document.getElementById("rpsBtnPlacement");

let btnList = btnPlacement.querySelectorAll("button");

let output = document.getElementById("rpsOutput");
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", onClick);

let comp = 0;
let player = 0;

for (btn of btnList) {
  btn.addEventListener("click", onClick);
}

function playerWins(who) {
  output.innerText = who + " win!";
}

function checkScore(player, comp) {
  if (player == 1 && comp == 2) {
    playerWins("I");
  } else if (player == 1 && comp == 3) {
    playerWins("You");
  } else if (player == 2 && comp == 1) {
    playerWins("you");
  } else if (player == 2 && comp == 3) {
    playerWins("I");
  } else if (player == 3 && comp == 1) {
    playerWins("I");
  } else if (player == 3 && comp == 2) {
    playerWins("you");
  } else {
    output.innerText = "it is a draw";
  }
}

function endOfRound() {
  btnPlacement.style.display = "none";
  resetBtn.style.display = "inline";
}

function playerChoice(choice) {
  if (choice == "Rock") {
    player = 1;
  } else if (choice == "Paper") {
    player = 2;
  } else if (choice == "Scissors") {
    player = 3;
  }
  comp = Math.floor(Math.random() * 3 + 1);
  checkScore(player, comp);
  endOfRound();
}

function onClick(event) {
  if (event.target.innerText == "Reset") {
    location.reload();
  }
  let choice = event.target.innerText;
  playerChoice(choice);
}

console.log("yo yo yo");
