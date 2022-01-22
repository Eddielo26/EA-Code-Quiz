// set variables
var startButton = document.getElementById('start-Btn');
var questionSection = document.getElementById("questions");
var quizSection = document.getElementById("quiz-section");
var answerButtons = document.getElementById("answer-buttons");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var timerCountdown = document.getElementById("countdown");
var countdownMessage = document.getElementById("timer");
var timeLeft = 75;
var highScores = document.getElementById("high-scores");
var finalScores = 0;

// questions for the quiz
var questions = [
    {
        question:"Commonly used data types DO NOT include:",
        choices:["strings", "boolean", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question:"The condition in an if/else statement is enclosed within ______",
        choices:["curly brackets", "parenthesis","quotes", "square brackets"],
        correctAnswer:"parenthesis"
    },
    {
        question:"Arrays in JavaScript can be used to store ______.",
        choices:["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer:"all of the above"
    },
    {
        question:"Strings values must be enclosed within ______ when being assigned to variables.",
        choices:["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer:"quotes"
    },
    {
       question:"A very useful tool used during development and debugging for printing content to the debugger is:",
       choices:["JavaScript", "terminal/bash", "for loops", "console.log"],
       correctAnswer:"console.log" 
    },
]

var questionIndex = 0;
// set timer to countdown 
function timer() {
    displayQuestion();
    var timerInterval = setInterval(function (){
        timeLeft--;
        countdownMessage.textContent = "Timer: " + timeLeft;
        if(timeLeft === 0 || questionIndex >= 4) {
            clearInterval(timerInterval);
            highScores();
            return;
        }
    }
}