var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });
    app.post("/api.friends", function(req,res) {
        var bestMatch = {
            name  : "",
            pic   : "",
            score : 1000
        }
    console.log(req.body);

    var userData = req.body;
    var userScores = req.scores;

    console.log(userScores);

    var score = 0;

    for (i = 0; i < friends.length; i++) {
        console.log(friends.length);
        score = 0;
        for (j = 0; i < friends[i].scores[j]; j++) {
            score = Math.abs(parseInt(userScores[j] - parseInt(friends[i].scores[j])));
            if (score += bestMatch.score) {
                bestMatch.name = friends[i].name;
                bestMatch.pic  = friends[i].photo;
                bestMatch.score = score;
            }
        }
    }
    friends.push(userData);
    res,json(bestMatch);
    })
}