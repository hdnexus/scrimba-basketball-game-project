let homepoints = 0;
let guestpoints = 0;
let homeEl = document.getElementById("home-score-el");
let guestEl = document.getElementById("guest-score-el");
let homeScoreBox = document.getElementById("home-score-box");
let guestScoreBox = document.getElementById("guest-score-box");

function updateLeading() {
  homeScoreBox.classList.remove("leading");
  guestScoreBox.classList.remove("leading");

  if (homepoints > guestpoints) {
    homeScoreBox.classList.add("leading");
  } else if (guestpoints > homepoints) {
    guestScoreBox.classList.add("leading");
  }
}
function homepoint1() {
  homepoints += 1;
  homeEl.textContent = homepoints;
  updateLeading();
}

function homepoint2() {
  homepoints += 2;
  homeEl.textContent = homepoints;
  updateLeading();
}

function homepoint3() {
  homepoints += 3;
  homeEl.textContent = homepoints;
  updateLeading();
}

function guestpoint1() {
  guestpoints += 1;
  guestEl.textContent = guestpoints;
  updateLeading();
}

function guestpoint2() {
  guestpoints += 2;
  guestEl.textContent = guestpoints;
  updateLeading();
}

function guestpoint3() {
  guestpoints += 3;
  guestEl.textContent = guestpoints;
  updateLeading();
}

function startNewGame() {
  homeScoreBox.classList.remove("leading");
  guestScoreBox.classList.remove("leading");
  homepoints = 0;
  guestpoints = 0;
  homeEl.textContent = 0;
  guestEl.textContent = 0;
}
