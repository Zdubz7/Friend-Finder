// This variable links the routes to the data source that holds the friends array data. 
var friends = require('../data/friends.js');

module.exports = function (app) {
  // This is the api path that requires the friends data, it responds with a json object which is the array of friends. This is activated on both of the html pages with the blue link.
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  // This updates the array of friends database, the array sends back the json form of the most compatible new friend.
  app.post('/api/friends', function (req, res) {
    // This variable is the current user that filled out the survey.
    var newFriend = req.body;
    // This variable computes the best match from the scores listed.
    var bestMatch = {};

    for (var i = 0; i < newFriend.scores.length; i++) {
      if (newFriend.scores[i] == "1 (Strongly Disagree)") {
        newFriend.scores[i] = 1;
      } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
        newFriend.scores[i] = 5;
      } else {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
      }
    }
    // This variable compares the scores of a new friend with the score of each friend that is in the database and finds the friends with the smallest difference when each set of scores is compared to another.
    var bestMatchIndex = 0;
    // This variable is the greatest score difference for if a question is a 4, therefore the greatest difference is 4 times the number of questions in the survey.
    var bestMatchDifference = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      for (var index = 0; index < friends[i].scores.length; index++) {
        var differenceOneScore = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
        totalDifference += differenceOneScore;
      }
      // In this section if the total difference in scores is less than the matches so far, it saves the index and the difference in scores.
      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      }
    }
    // This variable represents the best match in the index and is used to require the best match data from the friends index.
    bestMatch = friends[bestMatchIndex];
    // This section puts the new friends from the survey in the database array.
    friends.push(newFriend);
    // This section returns the best match friend match for you.
    res.json(bestMatch);
  });

};