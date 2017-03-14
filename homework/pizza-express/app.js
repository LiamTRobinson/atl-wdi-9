var express = require("express");
var app = express();
var hbs = require("hbs");

app.set("view engine", "hbs");







app.listen(3000, function(){
	console.log("listening on port 3000");
});