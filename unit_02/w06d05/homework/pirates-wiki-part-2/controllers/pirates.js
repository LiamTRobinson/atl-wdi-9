//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.post("/", function(req, res) {
	pirates.push(req.body);
	res.redirect("/pirates");
});
//==============================
// UPDATE
//==============================
router.get("/:id/edit", function(req, res) {
	res.render("pirates/edit", {
		pirate: pirates[req.params.id],
		id: req.params.id
	});
});
router.put("/:id", function(req, res) {
	var pirateToUpdate = pirates[req.params.id];
	pirateToUpdate.name = req.body.name;
	pirateToUpdate.nickname = req.body.nickname;
	pirateToUpdate.birthplace = req.body.birthplace;
	pirateToUpdate.death_year = req.body.death_year;
	pirateToUpdate.base = req.body.base;
	res.redirect("/pirates/"+req.params.id);
});
//==============================
// DESTROY
//==============================
router.delete("/:id", function(req, res) {
	pirates.splice(req.params.id, 1);
	res.redirect("/pirates");
});
//==============================
// EXPORTS
//==============================

module.exports = router;
