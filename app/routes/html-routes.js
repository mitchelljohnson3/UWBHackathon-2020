var path = require("path");
module.exports = function (app) {
    // send the home page to the user
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/index.html"));
    });

    // send the quiz html file
    app.get("/quiz", function(req, res) {
        res.sendFile(path.join(__dirname, "/quiz.html"));
    });

    app.get("/scoreboard", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/scoreboard.html"));
    });
};