//packages
var express = require("express");
var router = express.Router();
var data = require("../models/pirates.js");

//paths
router.get("/", function(req, res){
	res.render("pirates/index", {
		data: data
	});
});

router.get("/new", function(req, res) {
	res.render("pirates/new", {
		
	});
});

router.get("/:id", function(req, res){
	res.render("pirates/show", {
		pirate: data[req.params.id]
	});
});

router.post("/", function(req, res) {
	data.push(req.body);
	res.redirect("/pirates");
});


module.exports = router;