//packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var hbs = require("hbs");
app.set("view engine", "hbs");

//uses
app.use(express.static(__dirname + '/public'));


//paths
app.get("/", function(req, res) {
	res.redirect("/pirates");
});

var piratesController = require("./controllers/pirates.js");
app.use("/pirates", piratesController);


app.listen(3000, function(){
	console.log("listening");
});