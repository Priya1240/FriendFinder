var newFriends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(newFriends);
    });

    app.post("/api/addFriend", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        var newObject = {};
        var scores = [];

        newObject.Name = newFriend.name;
        newObject.photo = newFriend.photo;

        for (i = 1; i < 11; i++) {

            var answer = parseInt(newFriend["q" + i]);
            scores.push(answer);
        }

        newObject.scores = scores;


        newFriends.push(newObject);
        res.json(newFriend);

    });
}
