const handsEl = document.querySelector(".image");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const resetBtn = document.querySelector(".reset");
const winLose = document.querySelector(".win-lose");
const counter = document.querySelector(".counter");
const loseCounter = document.querySelector(".lose-counter");

handsEl.classList.add("hidden");
let count = 0;
let loseCount = 0;
let hand = 0;

const resetScores = function () {
  count = 0;
  loseCount = 0;
  hand = 0;
  counter.textContent = `Wins: ${count}`;
  loseCounter.textContent = `Losses: ${loseCount}`;
  handsEl.classList.add("hidden");
};

const handRollR = function () {
  hand = Math.trunc(Math.random() * 3) + 1;
  handsEl.classList.remove("hidden");
  handsEl.src = `rps-${hand}.jpeg`;
};

resetBtn.addEventListener("click", resetScores);

rockBtn.addEventListener("click", function () {
  handRollR();
  if (hand === 1) {
    winLose.textContent = "DRAW";
  } else if (hand === 2) {
    winLose.textContent = "LOSE";
    loseCount += 1;
  } else {
    winLose.textContent = "WIN";
    count += 1;
  }
  counter.textContent = `Wins: ${count}`;
  loseCounter.textContent = `Loses ${loseCount}`;
});
paperBtn.addEventListener("click", function () {
  handRollR();
  if (hand === 1) {
    winLose.textContent = "WIN";
    count += 1;
  } else if (hand === 2) {
    winLose.textContent = "DRAW";
  } else {
    winLose.textContent = "LOSE";
    loseCount += 1;
  }
  counter.textContent = `Wins: ${count}`;
  loseCounter.textContent = `Loses ${loseCount}`;
});

scissorBtn.addEventListener("click", function () {
  handRollR();
  if (hand === 1) {
    winLose.textContent = "LOSE";
    loseCount += 1;
  } else if (hand === 2) {
    winLose.textContent = "WIN";
    count += 1;
  } else {
    winLose.textContent = "DRAW";
  }
  counter.textContent = `Wins: ${count}`;
  loseCounter.textContent = `Loses ${loseCount}`;
});
