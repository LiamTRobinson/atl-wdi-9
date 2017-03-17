//packages
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var app         = express();
var port        = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//uses
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//controllers
var todosController = require("./controllers/todos.js");
app.use("/todos", todosController);
var moviesController = require("./controllers/movies.js");
app.use("/movies", moviesController);

/*Views*/
app.set('view engine', 'hbs');

// log
app.use( logger('dev'));

/* HOME */
app.get('/', function(req, res) {
  res.render("home");
});


// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
