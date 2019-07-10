var friends = require("../data/friends");

//exporting all the routes as an app
module.exports = function(app){

  //a get request that will hit the api
  app.get("/api/friends", (req, res) => {
    res.json(friends);

  })

  //post request that will find your best friend using the newFriend object from the survey
  app.post("/api/friends", (req, res) => {

    //local variables initiated
    var index = 0;
    var temp = 100;

    //for loop that will loop through the friends array which we imported from the api
    for(var i = 0; i < friends.length; i++){
      //local variable for this loop that will keep the sum of the differences between the scores
      var totalDiff = 0;

      //nested for loop that will go through the score array
      for(var j = 0; j< friends[i].Score.length; j++){
        //adding the absolute value of the difference between the scores to total difference
        totalDiff += Math.abs(parseInt(friends[i].Score[j]) - parseInt(req.body.Score[j]));
      }

      //comparator to check if the total difference is less than temp 
      if(totalDiff < temp){
        //saves the index of the friend which
        index = i;
        //updates temp to a totalDiff which would be lower
        temp = totalDiff;
      }
    }

    //once it completes all the loops it will add the newFriend into the friends array. had to do this last because if you did this first you would match with yourself
    friends.push(req.body);

    //send a response of the friend with the lowest difference
    res.json(friends[index]);
  })

}