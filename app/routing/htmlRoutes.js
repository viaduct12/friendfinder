var path = require("path");

//exporting the route as an app
module.exports = function(app){
  //if you hit url plus /survey it will route you the the survey html
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  })
  // the catch all that will direct you to the home html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));

  })
}