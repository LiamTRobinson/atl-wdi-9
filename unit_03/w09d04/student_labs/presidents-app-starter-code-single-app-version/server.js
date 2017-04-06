var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/presidents-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

app.use(cors());

<<<<<<< HEAD
app.use(logger('dev'));

=======
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
app.use(express.static('public'));

app.listen(3000);
