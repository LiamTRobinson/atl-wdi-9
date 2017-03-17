var express = require("express");
var router = express.Router();
var data = require("../data.js");

router.delete("/:id", function(req, res) {
  data.seededTodos.splice(req.params.id, 1);
  res.redirect("/todos");
});

router.get('/', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos,
    numOfTodos: data.seededTodos.length
  });
});

router.get("/new", function(req, res) {
  res.render('todos/new');
});

router.get("/:id", function(req, res) {
  res.render("todos/show", {
    todo: data.seededTodos[req.params.id]
  });
});

router.post("/", function(req, res) {
  var newObject = {
    location: req.body.location,
    description: req.body.description,
    urgent: req.body.urgent == "true"
  };
  data.seededTodos.push(newObject);
  res.redirect("/todos");
});

router.get("/:id/edit", function(req, res) {
  res.render("todos/edit", {
    todo: {
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
      location: data.seededTodos[req.params.id].location,
      id: req.params.id
    }
  })
});

router.put("/:id", function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.location = req.body.location;
  todoToEdit.urgent = req.body.urgent == "true";
  
  res.redirect("/todos");
});



module.exports = router;