module.exports = function (app) {
    // send the home page to the user
    app.get("/", function (req, res) {
        res.sendFile("../public/index.html");
    });

    // send the quiz html file
    app.get("/quiz", function(req, res) {
        res.sendFile("../public/quiz.html");
    });

    // send the scoreboard html file
    app.get("/scoreboard", function(req, res) {
        res.sendFile("../public/results.html");
    })
};