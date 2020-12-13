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

//Option to compare user choices with answer
function compare(event){
    var element = event.target;
    if(element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if(element.textContent == questions[questionList].answer){
            score++;
            createDiv.textContent = "You are correct! " + questions[questionList].answer; 
        } else{
            timeLeft = timeLeft - punish;
            createDiv.textContent = "You are wrong, the correct answer is: " + questions[questionList].answer;
        }
    }
    questionList++;
    if (questionList >= questions.length){
        allDone();
        createDiv.textContent = "You are done" + "" + "Your score is " + score +"/" + questions.length + "Correct";
    } else{
        render(questionList);
    }
    questionDiv.appendChild(createDiv);
}
//This function will append last page
function allDone(){
    questionDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var userH1 = document.createElement("h1");
    userH1.setAttribute("id", "userH1");
    userH1.textContent = "Finshed"

    questionDiv.appendChild(userH1);

    var userP = document.createElement("p");
    userP.setAttribute("id", "userP");

    questionDiv.appendChild(userP);
    //Remaining time w/ final score
    if (timeLeft >= 0) {
        var remainingTime = timeLeft;
        var userP2 = document.createElement("p");
        clearInterval(holdInterval);
        userP.textContent = "The final score: " + remainingTime;
        questionDiv.appendChild(userP2);
    }
    //Label
    var makeLabel = document.createElement("label");
    makeLabel.setAttribute("id", "makeLabel");
    makeLabel.textContent = "Enter desired initials to be listed: ";

    questionDiv.appendChild(createLabel);

    //Input
    var makeInput = document.createElement("input");
    makeInput.setAttribute("type", "text");
    makeInput.setAttribute("id", "initials");
    makeInput.textContent = "";

    questionDiv.appendChild(makeInput);

    //Submit
    

}
