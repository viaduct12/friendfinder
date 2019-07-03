var express = require("express");
var app = express();

var PORT = 3000;

app.get("/", (req,res) => {
  res.send("hello world");
})

app.listen(PORT, function(){
  console.log(PORT);
})
