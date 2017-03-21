//***************************
// REQUIREMENTS
//***************************

var express = require("express");
var app = express();
var hbs = require("hbs");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//***************************
// MIDDLEWARE
//***************************

app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//***************************
// CONTROLLERS
//***************************

var pokemonController = require("./controllers/pokemon.js");
app.use("/pokemon", pokemonController);

//***************************
// LISTENER
//***************************

app.listen(3000, function() {
	console.log("listening");
});
