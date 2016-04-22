var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rn', {});

var oauthserver = require('oauth2-server');
var auth = require('./auth');
// var model = {
//   getAccessToken: function *() {
//     yield somethingAsync();
//
//     return 'works!'
//   },
//
//   getAuthorizationCode: async function() {
//     await somethingAsync();
//
//     return 'works';
//   },
//
//   // Or, calling a node-style callback.
//   getClient: function(done) {
//     if (/* something went wrong*/) {
//       return done(new Error());
//     }
//
//     done(null, 'works!');
//   },
//
//   // Or, returning a promise.
//   getUser: function() {
//     return new Promise('works!');
//   },
// };



nconf.argv().env('__');
global.env = process.env.NODE_ENV || 'production';

var	configFile = path.join(__dirname, '/config.json');
nconf.file({
  file: configFile
});


var db = require('./database');



var routes = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');



var app = express();

app.oauth = auth.server;

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


app.all('/oauth/token', app.oauth.grant());
app.get('/', app.oauth.authorise(), function (req, res) {
  res.send('Secret area');
});


app.use('/', routes);
app.use('/users', users);
app.use('/news', news);

app.use(app.oauth.errorHandler());
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


module.exports = app;
