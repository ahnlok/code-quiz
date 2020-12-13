//Variables for questions & answers
var questions = [
    {
        title: "What are the commonly used data types that Not included:",
        choice: ["string", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }
    {
        title: "What is the condition in an if/else statement is enclosed within:",
        choice: ["quotes", "curly brackets", "parenthesis", "square brakets"],
        answer: "parentheses"
    }
    {
        title: "Arrays in Javascript can be used to store:",
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }
    {
        title: "String values must be enclosed within____when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    }
    {
        title: "A very useful tool for used during development and debugging for printing content to:",
        choice: ["Javascript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
];
//Variables to declare
var score = 0;
var questionList = 0;

var currentTime = document.querySelector("#time-left");
var timer = document.querySelector("#buttonstart");
var questionDiv = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");

var timeLeft = 60;
var holdInterval = 0;
var punish = 5;
var createUl = document.createElement("ul");

//Button for timer to responsive
timer.addEventListener("click", function() {
    if (holdInterval === 0){
        holdInterval = setInterval(function(){
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if(timeLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Finished";
            }
        }, 1100);
    }
    render(questionList);
});

//Rendering questions & choice to the page
function render(questionList){
    questionDiv.innerHTML = "";
    createUl.innerHTML = "";
    for (var i - 0; i < questions.length; i++) {
        var questionUser = questions[questionList].title;
        var choiceUser = questions[questionList].choice;
        questionDive.textContent = questionUser;
    }
    choiceUser.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionDiv.appendChile(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}