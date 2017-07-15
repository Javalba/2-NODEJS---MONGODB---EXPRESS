var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy; // que quiero hacer. Ej: buscame el username en la db
//connect flash
const flash = require("connect-flash");

const User = require("./models/user");

//mongoose connection
mongoose.connect('mongodb://localhost:27017/passportJSDB'); //BBDDD que te quieres conectar

// Controllers
var auth = require('./routes/auth');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//SESSION
app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

//flash
app.use(flash());

//INITIALIZE
passport.serializeUser((user, cb) => {
  console.log("serialize user:", user);
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  console.log("desserialize id:", id);

  User.findOne({
    "_id": id
  }, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

passport.use(new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, next) => { //paso la req por el callback. Internamente podrá usar flash.
  console.log("local strat:", username, password);

  User.findOne({
    username
  }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, {
        message: "Incorrect username"
      });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, {
        message: "Incorrect password"
      });
    }

    return next(null, user);
  });
}));
//END INI

app.use(passport.initialize());
app.use(passport.session());

// Routes
//Si dentro de index hubiera una ruta /signup ejecutaría primero el index y nunca ejecutaria el auth.

app.use('/users', users);
app.use('/', index);
app.use('/', auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
