var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var log4js = require('log4js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

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
app.use(session({
  secret: '12345',
  name: 'logbook',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {maxAge: 1800000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
 }));

app.use('/', routes);
app.use('/users', users);

//configuration log4js
log4js.configure({
  appenders:[
    {type:'console',category:'console'},
    {type:'file',filename:__dirname + "/logs/logbook.log",category:'logbook'}
  ]
});

var log = log4js.getLogger('logbook');
var cs = log4js.getLogger('console');

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
    var meta = '[' + new Date() + ']' + req.url + '\n';
    log.error(meta + err.stack + '\n');
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
  var meta = '[' + new Date() + ']' + req.url + '\n';
  log.error(meta + err.stack + '\n');
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
