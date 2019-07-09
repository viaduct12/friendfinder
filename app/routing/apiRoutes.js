var friends = require("../data/friends");

module.exports = function(app){

  app.get("/friends", (req, res) => {
    // res.send("worse name ever but i love you 3000 and one");
    res.json(friends)

  })

  app.post("/friends", (req, res) => {

    var index;

    for(var i = 0; i < friends.length; i++){
      var totalDiff = 0;
      var temp = 0;

      for(var j = 0; j< friends[i].Score.length; j++){
        totalDiff += Math.abs(parseInt(friends[i].Score[j] - parseInt(req.body.Score[j])));
      }
      
      if(totalDiff > temp){
        index = i;
        temp = totalDiff;
      }
    }

    friends.push(req.body);
    res.json(friends[index]);
  })

}