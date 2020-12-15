
//Static variables
var topScore = document.querySelector("#highScores");
var clear = document.querySelector("#clear");
var previous = document.querySelector("#previous");
//Function to clear the score.
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

//Retrieving the list from localStorage
var listScore = localStorage.getItem("listScore");
listScore = JSON.parse(listScore);

if (listScore !== null) {

    for (var i = 0; i < listScore.length; i++) {

        var liEl = document.createElement("li");
       liEl.textContent = listScore[i].initial + " " + listScore[i].score;
        topScore.appendChild(liEl);
    }
}
//function to move back to index page
previous.addEventListener("click", function() {
    window.location.replace("./index.html");
});
