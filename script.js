var currentTime = document.querySelector("#timeLeft");
var timer = document.querySelector("#buttonStart");
var questionDiv = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");

//Variables for questions & answers
var questions = [
    {
        title: "Q. What are the commonly used data types that Not included:",
        choice: ["1. string", "2. booleans", "3. alerts", "4. numbers"],
        answer: "4. alerts"
    },
    {
        title: "Q. What is the condition in an if/else statement is enclosed within:",
        choice: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square bracket"],
        answer: "3. parentheses"
    },
    {
        title: "Q. Arrays in Javascript can be used to store:",
        choice: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        title: "Q. String values must be enclosed within____when being assigned to variables.",
        choice: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        title: "Q. A very useful tool for used during development and debugging for printing content to:",
        choice: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"],
        answer: "4. console log"
    },
];
//Variables to declare
var score = 0;
var questionList = 0;

var timeLeft = 60;
var holdInterval = 0;
var punish = 5;
var createUl = document.createElement("ul");

//Button for timer to responsive
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if(timeLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Finished!";
            }
        }, 1100);
    }
    render(questionList);
});

//Rendering questions & choice to the page
function render(questionList) {
    questionDiv.innerHTML = "";
    createUl.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var questionUser = questions[questionList].title;
        var choiceUser = questions[questionList].choice;
        questionDiv.textContent = questionUser;
    }
    choiceUser.forEach(function (newItem) {
        var liEl = document.createElement("li");
        liEl.textContent = newItem;
        questionDiv.appendChild(createUl);
        createUl.appendChild(liEl);
        liEl.addEventListener("click", (compare));
    })
}

//Option to compare user choices with answer
function compare(event){
    var element = event.target;

    if(element.matches("li")) {
        var divEl = document.createElement("div");
        divEl.setAttribute("id", "divEl");

        if(element.textContent == questions[questionList].answer){
            score++;
            divEl.textContent = "You are correct! Answer is: " + questions[questionList].answer; 
        } else{
            timeLeft = timeLeft - punish;
            divEl.textContent = "You are wrong, the correct answer is: " + questions[questionList].answer;
        }
    }
    questionList++;

    if (questionList >= questions.length){
        allDone();
        divEl.textContent = "Finished!" + " " + "Your score is: " + score + "/" + questions.length;
    } else{
        render(questionList);
    }
    questionDiv.appendChild(divEl);
}
//This function will append last page
function allDone(){
    questionDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var userH1 = document.createElement("h1");
    userH1.setAttribute("id", "userH1");
    userH1.textContent = "Finished"

    questionDiv.appendChild(userH1);

    var userP = document.createElement("p");
    userP.setAttribute("id", "userP");

    questionDiv.appendChild(userP);
    //Remaining time w/ final score
    if (timeLeft >= 0) {
        var remainingTime = timeLeft;
        var userP2 = document.createElement("p");
        clearInterval(holdInterval);
        userP.textContent = "The final score is: " + remainingTime;
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
    makeInput.setAttribute("id", "initial");
    makeInput.textContent = "";

    questionDiv.appendChild(makeInput);

    //Submit
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "Submit");
    submitButton.textContent = "Submit";

    questionDiv.appendChild(submitButton);

    submitButton.addEventListener("click", function() {
        var initial = makeInput.value;

        if(initial === null) {

        } else{
            var yourScore = {
                initial: initial,
                score: remainingTime
            }
            var listScore = localStorage.getItem("listScore");
            if (listScore === null){
                listScore = [];
            } else{
                listScore = JSON.parse(listScore);
            }
            listScore.push(yourScore);
            var newScore = JSON.stringify(listScore);
            localStorage.setItem("listScore", newScore);
            
            window.location.replace("highscore.html");
        }
    });
}
