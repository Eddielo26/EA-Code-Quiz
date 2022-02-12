// set variables
var startButton = document.querySelector('#start-Btn');
var questionSection = document.querySelector(".questions");
var quizSection = document.querySelector(".quiz-section");
var answerButtons = document.querySelector("#answer-buttons");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var timerCountdown = document.querySelector("#countdown");
var countdownMessage = document.querySelector(#"timer");
var timeLeft = 75;
var highScore = document.querySelector("high-scores");
var finalScore = 0;

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
    },
    1000);
}

function displayQuestion() {
    document.querySelector("#start-button").style.display="none";
    document.querySelector("#answer-buttons").style.display="block";
    var questionResult = quizQuestions[questionIndex].question;
    var answerOptions = quizQuestions[questionIndex].options;
    questionSection.textContent = questionResult;
    answerOptions = [answer1, answer2, answer3, answer4];
    answer1.textContent = (quizQuestions[questionIndex].choices[0]);
    answer2.textContent = (quizQuestions[questionIndex].choices[1]);
    answer3.textContent = (quizQuestions[questionIndex].choices[2]);
    answer4.textContent = (quizQuestions[questionIndex].choices[3]);

 // add eventlistener to each listed item
 var clickingAnswers = document.querySelectorAll("button")
        for (i = 0; i < clickingAnswers.length; i++) {
            clickingAnswers[i].addEventListener("click", checkAnswers);
        }
        if (questionIndex >= 4){
            return
        };
}

function checkAnswers(event) {
    event.preventDefault()
    var rightAnswer = event.target.textContent;
    var answerMessage = document.createElement ("p");
    answerButtons.append(answerMessage);
    {
        if (rightAnswer === quizQuestions[questionIndex].correctAnswer) {
            answerMessage.textContent = "Correct!";}

        else {
            answerMessage.textContent = "Incorrect!";
            timeLeft = timeLeft - 10;
        }
        
        if (questionIndex >= 4) {
            return;
        }

        else { 
            questionIndex++;
            displayQuestion();
        }
        }
    }

    document.querySelector("#startButton").addEventListener("click", timer);