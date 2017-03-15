var express = require("express");
var router = express.Router();

router.get("/:type", function(req, res){
	res.render("toppings", {
		topping: req.params.type
	});
});

module.exports = router;