//***************************
// REQUIREMENTS
//***************************

var express = require("express");
var router = express.Router();
var data = require("../models/poke_array.js");

//***************************
// READ
//***************************

router.get("/", function(req, res) {
	res.render("pokemon/index", {
		data: data
	});
});

router.get("/index/:index", function(req, res) {
	res.render("pokemon/show", {
		data: data[req.params.index],
		index: req.params.index
	});
});

router.get("/new", function(req, res) {
	res.render("pokemon/new");
});

router.get("/:index/edit", function(req, res) {
	res.render("pokemon/edit", {
		data: data[req.params.index],
		index: req.params.index
	});
});

//***************************
// CREATE
//***************************

router.post("/", function(req, res) {
	data.push(req.body);
	res.redirect("/pokemon");
});

//***************************
// UPDATE
//***************************

router.put("/:index", function(req, res) {
	var pokemonToEdit = data[req.params.index];
	pokemonToEdit.id = req.body.id;
	pokemonToEdit.type = req.body.type;
	res.redirect("/pokemon");
});

//***************************
// DELETE
//***************************

router.delete("/:index", function(req, res) {
	data.splice(req.params.index, 1);
	res.redirect("/pokemon");
});

//***************************
// EXPORTS
//***************************

module.exports = router;
