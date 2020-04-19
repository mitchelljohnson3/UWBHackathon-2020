const scoreboard = document.getElementById("scoreboardDiv");

// fetches the data from the scoreboard table from the server
function getScores() {
    fetch("/api/scoreboard")
    .then((data) => {
        return data.json();
    }).then((response) => {
        appendScores(response);
        console.log(response);
    });
}

// appends the retrieved scoreboard data to the scoreboard div
function appendScores(data) {
    for(var i = 0; i < data.length; i++) {
        const list = document.createElement("li");
        list.textContent = `${data[i].name} - Score: ${data[i].score}`;
        scoreboard.appendChild(list);
    };
}

getScores();