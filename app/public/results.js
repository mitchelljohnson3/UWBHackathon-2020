const scoreboard = document.getElementById("scoreboardDiv");

// fetches the data from the scoreboard table from the server
function getScores() {
    fetch("/api/scoreboard")
    .then((data) => {
        return JSON.parse(data);
    }).then((response) => {
        appendScores(response);
    });
}

// appends the retrieved scoreboard data to the scoreboard div
function appendScores(data) {
    const scores = data.scores;
    scores.forEach(function(entry) {
        const list = document.createElement("li");
        list.textContent = `${entry.name} - Score: ${entry.score}`;
        scoreboard.appendChild(list);
    });
}