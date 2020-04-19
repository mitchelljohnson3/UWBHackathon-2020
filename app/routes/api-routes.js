// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Add a new score to the database
  app.post("/api/new/", function(req, res) {
    var dbQuery = "INSERT INTO scoreboard (name, score) VALUES (?,?)";

    connection.query(dbQuery, [req.body.fname, req.body.fscore], function(err, result) {
      if (err) throw err;
      console.log("New score added to database");
    });
    
    res.redirect("/scoreboard");
  });

  // responds with the entries in the scoreboard table
  app.get("/api/scoreboard", function(req, res) {
    const dbQuery = "SELECT * FROM scoreboard";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
  });
};
