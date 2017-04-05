var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

app.use(logger('dev'));

app.use(express.static('public'));

var criminalsController = require("./controllers/criminals.js");
app.use('/criminals', criminalsController);

app.listen(3000);
