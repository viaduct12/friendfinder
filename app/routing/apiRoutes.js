var friends = require("../data/friends");

module.exports = function(app){

  app.get("/api/friends", (req, res) => {
    res.json(friends);

  })

  app.post("/api/friends", (req, res) => {
    var index = 0;
    var temp = 100;
    for(var i = 0; i < friends.length; i++){
      var totalDiff = 0;

      for(var j = 0; j< friends[i].Score.length; j++){
        totalDiff += Math.abs(parseInt(friends[i].Score[j]) - parseInt(req.body.Score[j]));
      }

      if(totalDiff < temp){
        index = i;
        temp = totalDiff;
      }
    }

    friends.push(req.body);
    res.json(friends[index]);
  })

}