var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
  res.send("worse name over but i love you 3000 and one");
})

app.listen(PORT, function(){
  console.log("listening on " + PORT);
})
