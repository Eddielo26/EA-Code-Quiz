var highscoresEl = document.querySelector(".scores-list");
var clearBtn = document.querySelector(".clear-scores");
// creating empty spaces for user information
var initialsObj = [];
var scoreObj = [];

// retrieving information from local storage
if(!(localStorage.getItem("initials") === null)) {
    // using json parse to change from a string to an object
    initialsObj = JSON.parse(localStorage.getItem("initials"));
    scoreObj = JSON.parse(localStorage.getItem("score"));

    // creating information given by the user
    for (var i = 0; i < initialsObj.length; i++) {
        var scoreEl = document.createElement("p");
        scoreEl.setAttribute("class","scores");
        scoreEl.textContent = (i+1) + ". " + initialsObj[i] + " - " + scoreObj[i];

        highscoresEl.appendChild(scoreEl);
    }
    

}
else {
    console.log("error");
}
// used to remove any user datas stored
clearBtn.addEventListener("click", function() {
    highscoresEl.textContent = "";
    localStorage.removeItem("initials");
    localStorage.removeItem("score");

});