var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
// add page
//var welcome = require('./routes/welcome');
//var creattion = require('/routes/creation');
//var help = require('/routes/help');

var app = express(); //let express handle user requests

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
//app.use('/welcome', welcome);
//app.use('/creation', creattion);
//app.use('/help', help);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var HIGH = 10;
var LOW = 0;

//learning
function getRandomNum() {
  return Math.floor(Math.random()*(HIGH - LOW + 1) + LOW);
}

function User() {
  this.habilete;
  this.endurance;
  this.initalHabilete = function initalHabilete() {
      this.habilete = 10 + getRandomNum();
      console.log("habilete " + this.habilete);
  }
  this.initialEndurance = function initialEndurance() {
    this.endurance = 20 + getRandomNum();
    console.log("endurance " + this.endurance);
  }
}

var myAccount = new User();
myAccount.initalHabilete();
myAccount.initialEndurance();
///////////

module.exports = app;
