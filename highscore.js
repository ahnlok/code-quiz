var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var previous = document.querySelector("#previous");

clear.addEventListener("click", function() {
    localStorage.clear();
    localStorage.reload();
});
var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse (scoreList);

if (scoreList !== null) {
    for (var i = 0; i < scoreList.length; i++) {
        HTMLDataListElement.textContent = scoreList[i].initials + " " + listScore[i].score;
        
    }
}
