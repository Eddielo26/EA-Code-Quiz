// set variables
var startButton = document.querySelector('#start-Btn');
var intro = document.querySelector(".intro");
var questionSection = document.querySelector(".questions");
var quizSection = document.querySelector(".quiz-section");
var answerButtons = document.querySelector(".answer-buttons");
var answerBtn = document.querySelector(".btn");
var btn;
var countDown = document.querySelector("#timer");
var timeLeft = 75;
var questionCounter = 0;
var timerInterval;

startButton.addEventListener("click", function() {
    intro.textContent = "";
    quizSection.style.display = "block";
// questions for the quiz
var questions = [
    {
        question:"Commonly used data types DO NOT include:",
        choices:[
            {answers: "1. strings", isCorrect: false}, 
            {answers: "2. boolean", isCorrect: false},
            {answers: "3. alerts",  isCorrect: true}, 
            {answers: "4. numbers", isCorrect: false},
        ]
    
    },
    {
        question:"The condition in an if/else statement is enclosed within ______",
        choices:[
            {answers: "1. curly brackets", isCorrect: false}, 
            {answers: "2. parenthesis", isCorrect: true},
            {answers: "3. quotes", isCorrect: false}, 
            {answers: "4. square brackets", isCorrect: false}
        ]
    },
    {
        question:"Arrays in JavaScript can be used to store ______.",
        choices:[
            {answers: "1. numbers and strings", isCorrect: false}, 
            {answers: "2. other arrays", isCorrect: false},
            {answers: "3. booleans", isCorrect: false}, 
            {answers: "4. all of the above", isCorrect: true},
        ]
        
    },
    {
        question:"Strings values must be enclosed within ______ when being assigned to variables.",
        choices:[
            {answers: "1. commas", isCorrect: false},
            {answers: "2. curly brackets", isCorrect: false},
            {answers: "3. quotes", isCorrect: true},
            {answers: "4. parenthesis", isCorrect: false},
        ]
    },
    {
       question:"A very useful tool used during development and debugging for printing content to the debugger is:",
       choices:[
           {answers: "1. JavaScript", isCorrect: false},
           {answers: "2. terminal/bash", isCorrect: false},
           {answers: "3. for loops", isCorrect: false},
           {answers: "4. console.log", isCorrect: true},
       ]
    },
];

    displayQuestion();
    timerInterval = setInterval(function() {
       if(timeLeft > 0) {
           countDown.textContent = "Score: " + timeLeft;
           timeLeft--; 
       }
       else {
            clearInterval(timerInterval);
            countDown.textContent = "Time is Up!";
    }
},1000)

function displayQuestion() {

    answerButtons.textContent="";
    questionSection.textContent = questions[questionCounter].question;
    for ( var i = 0; i < 4; i++) {
        btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.setAttribute("is-correct", questions[questionCounter].choices[i].isCorrect);
        btn.textContent = questions[questionCounter].choices[i].answers;
        answerButtons.appendChild(btn);
        }
    }

    answerButtons.addEventListener("click", function (event){
        var answerSubmit = event.target;
        var isCorrect = (answerSubmit.getAttribute("is-correct") === "true");

        if(isCorrect){
            if (questionCounter === questions.length-1) {
                clearInterval(timerInterval);
                location.href = "submit.html?score="+timeLeft;
            }

            questionCounter++;
            displayQuestion();
        }
        else {
            var wrong = document.querySelector("#wrong");

            if (wrong === null) {
                var wrongAlert = document.createElement("p");
                wrongAlert.id = "wrong";
                wrongAlert.textContent = "Wrong!";
                answerButtons.append(wrongAlert);
                timeLeft = timeLeft-10;
            }
        }
    });

});