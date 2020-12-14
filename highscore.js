//Static variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var previous = document.querySelector("#previous");
//Function to clear the score.
clear.addEventListener("click", function() {
    localStorage.clear();
    localStorage.reload();
});
var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse (scoreList);
//Retrieving local storage
if (scoreList !== null) {
    for (var i = 0; i < scoreList.length; i++) {
       liEl.textContent = scoreList[i].initials + " " + listScore[i].score;
        highScore.appendChild(liEl);
    }
}
//function to move back to index page
previous.addEventListener("click", function() {
    window.location.replace("index.html");
});
