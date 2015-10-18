var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/i-hate-ng');

var routes = require('./config/routes');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(routes);

console.log('Server up on port', port);
app.listen(port);