var express = require('express');
var router = express.Router();
const passport = require('passport');

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const User = require('../models/user');

/* GET home page. */
router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;
  
  if (username === "" || password === "") {
    res.render("signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  User.findOne({ "username": username },
    "username",
    (err, user) => {
      if (user !== null) {
        res.render("signup", {
          errorMessage: "The username already exists"
        });
        return;
      }

      var salt = bcrypt.genSaltSync(bcryptSalt);
      var hashPass = bcrypt.hashSync(password, salt);

      var newUser = User({
        username,
        password: hashPass
      });

      newUser.save((err) => {
        if (err) {
          res.render("signup", {
            errorMessage: "Something went wrong"
          });
        } else {
          req.flash('success', "creado con exito")
          res.redirect("/");
        }
      });
    });
})

router.get('/login', (req, res, next) => {
  console.log('Login');
  
  res.render('login', { "message": req.flash("error") });
})

function pass(req, res, next) {
  console.log('post login');
  next()
}

router.post("/login", pass, passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

router.get("/auth/facebook", passport.authenticate("facebook"));

//te da la respuesta 
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/secret",
  failureRedirect: "/"
})); 

module.exports = router;
