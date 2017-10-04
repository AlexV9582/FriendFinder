var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });
    app.post("/api/friends", function(req,res) {
        var bestMatch = {
            name  : "",
            pic   : "",
            userScore : 1000
        }

    var userData = req.body;
    var userScores = userData.scores;

    var score = 0;

    for (i = 0; i < friends.length; i++) {
        score = 0;
        for (j = 0; j < friends[i].scores[j]; j++) {
            score = Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j])));
            if (score <= bestMatch.userScore) {
                bestMatch.name = friends[i].name;
                bestMatch.pic  = friends[i].photo;
                bestMatch.userScore = score;
            }
        }
    }
    friends.push(userData);
    res.json(bestMatch);
    })
}