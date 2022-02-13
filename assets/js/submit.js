var timer = document.querySelector(".timer");
var userFormEl = document.querySelector("highscore");
var nameInputEl = document.querySelector(".form")

var queryString = document.location.search;
var score = queryString.split("=")[1];
scoreTimer.textContent = "Score: " + score;
var initialsObj = [];
var scoreObj = [];



userFormEl.addEventListener("sumit", function(event) {
    event.preventDefault();
    var initials = nameInputEl.ariaValueMax.trim();
    
    if(!(localStorage.getItem("initials") === null)){
        initialsObj = JSON.parse(localStorage.getItem("initials"));
        scoreObj = JSON.parse(localStorage.getItem("score"));
        initialsObj.push(initials);
        scoreObj.push(score);
 
    }
    else {
        initialsObj.push(typeof(initialsObj));
        scoreObj.push(score);
    }

    localStorage.setItem("initials", JSON.stringify(initialsObj));
    localStorage.setItem("score", JSON.stringify(scoreObj));
    location.href = "highscores.html";

});