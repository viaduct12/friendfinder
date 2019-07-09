var path = require("path");

module.exports = function(app){

  app.get("*", (req, res) => {
    // res.send("worse name ever but i love you 3000 and one");
    res.sendFile(path.join(__dirname, "home.html"));

  })

  app.get("survey", (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
  })

}