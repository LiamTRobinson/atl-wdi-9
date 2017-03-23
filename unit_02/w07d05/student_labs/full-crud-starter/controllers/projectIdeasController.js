var express = require('express');
var router = express.Router();

var User = require("../models/user");
var ProjectIdea = require("../models/project_idea");

// PROJECT IDEAS INDEX ROUTE
router.get("/:id", function(req, res) {
	User.findById(req.params.id)
		.exec(function(err, user) {
			if (err) { console.log(err); }
			console.log(user);
			res.render("project_ideas/index", {
				user: user
			});
		});
});

// PROJECT IDEAS DELETE ROUTE
router.delete("/:userId/:id", function(req, res) {
	User.findByIdAndUpdate(req.params.userId, {
		$pull: {
			project_ideas: {_id: req.params.id}
		}
	})
		.exec(function(err, project) {
			if (err) { console.log(err); }
			console.log(project);
			res.redirect(`/project_ideas/${req.params.userId}`)
		});
});

// PROJECT IDEAS UPDATE ROUTE
router.get("/:userId/:id/edit", function(req, res) {
	ProjectIdea.findById(req.params.id)
		.exec(function(err, project) {
			if (err) { console.log(err); }
			res.render("project_ideas/edit", {
				user: req.params.userId,
				project: project
			});
		});
});

router.patch("/:userId/:id/edit", function(req, res) {
	ProjectIdea.findByIdAndUpdate(req.params.id, {
		description: req.body.description,
		in_progress: req.body.in_progress
	})
		.exec(function(err, project) {
			project.save();
		});
	User.findById(req.params.userId)
		.exec(function(err, user) {
			var projectToEdit = user.project_ideas.id(req.params.id);
			projectToEdit.description = req.body.description;
			projectToEdit.in_progress = req.body.in_progress;
			user.save();
			res.redirect(`/project_ideas/${req.params.userId}`);
		});
});

// PROJECT IDEAS CREATE ROUTE
router.get("/:id/new", function(req, res) {
	User.findById(req.params.id)
		.exec(function(err, user) {
			if (err) { console.log(err); }
			res.render("project_ideas/new", {
				user: user
			});
		});
});

router.post("/:id/new", function(req, res) {

	var project = new ProjectIdea({
		description: req.body.description,
		in_progress: req.body.in_progress
	});
	project.save(function(err, np) {
		if (err) { console.log(err); }
		User.findById(req.params.id)
			.exec(function(err, user) {
				if (err) { console.log(err); }
				user.project_ideas.push(np);
				console.log(user);
				user.save(function(err, newuser){
					if (err) { console.log(err); }
					console.log(newuser);
					res.redirect(`/project_ideas/${req.params.id}`)
				});
			});
	});
});




module.exports = router;
