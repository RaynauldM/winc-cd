let output = document.getElementById("guessNumberOutput");

let btnPlacement = document.getElementById("guessBtnPlacement");
let btnList = document.getElementsByClassName("guessNumberBtns");

let resetBtn = document.getElementById("resetBtn");

for (btn of btnList) {
  btn.addEventListener("click", onClick);
}

let comp = Math.floor(Math.random() * 10 + 1);

resetBtn.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.innerText == "Reset") {
    location.reload();
  }
  chosenNum = event.target.innerText;
  if (chosenNum < comp) {
    output.innerText = "Higher";
  } else if (chosenNum > comp) {
    output.innerText = "Lower";
  } else {
    output.innerText = "Correct!";
    btnPlacement.style.display = "none";
    resetBtn.className = "visible";
  }
}
