var express = require("express");
var router = express.Router();
var data = require("../data.js");

router.get('/', function(req,res) {
  res.render('movies/index', {
    movies: data.seededMovies,
    numOfMovies: data.seededMovies.length
  });
});

router.get("/new", function(req, res) {
  	res.render('movies/new');
});

router.get("/:id", function(req, res) {
  res.render("movies/show", {
    movie: data.seededMovies[req.params.id]
  	});
});

router.post("/", function(req, res) {
	var newObject = {
		title: req.body.title,
		viewed: req.body.viewed == "true"
	};
  data.seededMovies.push(newObject);
  res.redirect("/movies");
});

router.delete("/:id", function(req, res) {
  data.seededMovies.splice(req.params.id, 1);
  res.redirect("/movies");
});

router.get("/:id/edit", function(req, res) {
  res.render("movies/edit", {
    movie: {
      title: data.seededMovies[req.params.id].title,
      viewed: data.seededMovies[req.params.id].viewed,
      id: req.params.id
    }
  })
});

router.put("/:id", function(req, res) {
  var movieToEdit = data.seededMovies[req.params.id];

  movieToEdit.title = req.body.title;
  movieToEdit.viewed = req.body.viewed == "true";
  
  res.redirect("/movies");
});



module.exports = router;