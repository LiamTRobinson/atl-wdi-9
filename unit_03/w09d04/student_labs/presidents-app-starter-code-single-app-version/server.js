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

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

app.use(cors());

app.use(logger('dev'));

app.use(express.static('public'));

app.listen(3000);
