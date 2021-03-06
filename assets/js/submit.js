var timer = document.querySelector(".clock");
var userFormEl = document.querySelector(".highscores");
var nameInputEl = document.querySelector(".form");
var queryString = document.location.search;
var score = queryString.split("=")[1];
timer.textContent = "Score: " + score;
var initialsObj = [];
var scoreObj = [];
// form used to set user initials into local storage
userFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  var initials = nameInputEl.value.trim();
  // use when local storage needs to show previous player scores
  if (!(localStorage.getItem("initials") === null)) {
    initialsObj = JSON.parse(localStorage.getItem("initials"));
    scoreObj = JSON.parse(localStorage.getItem("score"));
    initialsObj.push(initials);
    scoreObj.push(score);
  } else {
    initialsObj.push(initials);
    scoreObj.push(score);
  }
  // save player scores to local storage and transfers player to highscore screen
  localStorage.setItem("initials", JSON.stringify(initialsObj));
  localStorage.setItem("score", JSON.stringify(scoreObj));
  location.href = "highscores.html";
});
