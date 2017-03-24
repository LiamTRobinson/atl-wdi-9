var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render("users/index", {
        users: users
      });
    });
});

// USER CREATE ROUTE
router.get("/new", function(req, res) {
  res.render("users/new");
});

router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.redirect("/users");
  });
});

// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    res.render("users/show", {
      user: user
    });
  });
});

// USER UPDATE ROUTE
router.get("/:id/edit", function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      console.log(user);
      res.render("users/edit", {
        user: user
      });
    });
});

router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.render("users/show", {
      user: user
    });
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log('User deleted!');
    res.redirect("/users");
  });
});

// ITEMS INDEX
router.get("/:id/items", function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) { console.log(err) };

      console.log(user);
      res.render("items/index", {
        user: user
      });
    });
});
// ITEM EDIT
router.get("/:userId/items/:id/edit", function(req, res) {
  Item.findById(req.params.id)
    .exec(function(err, item) {
      if (err) { console.log(err); }
      console.log(item);
      res.render("items/edit", {
        user: req.params.userId,
        item: item
      });
    });
});

router.patch("/:userId/items/:id/edit", function(req, res) {
  Item.findById(req.params.id)
    .exec(function(err, item) {
      if (err) { console.log(err); }
      item.name = req.body.name;
      item.in_progress = req.body.in_progress;
      item.save(function(err, user) {
        if (err) { conosle.log(err); }
        console.log(item);
      });
    });
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      var itemToUpdate = user.items.id(req.params.id);
      itemToUpdate.name = req.body.name;
      itemToUpdate.in_progress = req.body.in_progress;
      user.save(function(err, user) {
        if (err) { console.log(err); }
        console.log(user);
      });
      res.redirect(`/users/${req.params.userId}/items`);
    });
});

// ADD A NEW ITEM
router.get("/:id/items/new", function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.render("items/new", {
        user:user
      });
    });
});

router.post('/:id/items', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
    var newItem = new Item({name: req.body.name, in_progress: req.body.in_progress});
    newItem.save(function(err, item) {
      user.items.push(newItem);
      user.save(function(err){
        if (err) console.log(err);
        res.redirect(`/users/${req.params.id}/items`);
    });
    });
  });
});

// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
  .exec(function(err, item){
    if (err) console.log(err);
    res.redirect(`/users/${req.params.userId}/items`);
  });
});


module.exports = router;
