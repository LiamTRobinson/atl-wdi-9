var express = require("express");
var app = express();
var hbs = require("hbs");
var toppingController = require(__dirname + "/controllers/topping_controller.js");
var orderController = require(__dirname + "/controllers/order_controller.js");

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("home", {
		data: "Welcome to Pizza Express!"
	});
});
app.use("/topping", toppingController);
app.use("/order", orderController);
app.get("/:thing", function(req, res) {
	res.render("home", {
		data: "404 Page Not Found"
	});
});

app.listen(3000, function(){
	console.log("listening on port 3000");
});