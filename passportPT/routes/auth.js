var express = require('express');
var router = express.Router();

// User model
const User = require("../models/user");
// BCrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
//auth
const ensureLogin = require("connect-ensure-login");

//passport
const passport = require("passport");
/* GET users listing. */
router.get('/signup', function (req, res, next) {
    // console.log('WAT')

    //console.log("request:",req.session); //el parametro session es añadido por el paquete session 
    res.render('signup');
});

/* router.post("/signup", (req, res, next) => {
    var username = req.body.username; //html inputs --> name ="username"
    var password = req.body.password;
    //hash generation
    var salt = bcrypt.genSaltSync(bcryptSalt);
    var hashPass = bcrypt.hashSync(password, salt);

    var newUser = User({
        username,
        password: hashPass
    });

    newUser.save((err) => {
        res.redirect("/");
    });
}); */


router.post("/signup", (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    if (username === "" || password === "") {
        res.render("signup", {
            errorMessage: "Indicate a username and a password to sign up"
        });
        return;
    }

    User.findOne({
        "username": username
    }, "username", (err, user) => {
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
                    errorMessage: "Something went wrong when signing up"
                });
            } else {
                // User has been created...now what?
                res.redirect("/");
            }
        });
    });
});

/* GET users listing. */
router.get("/login", (req, res, next) => {
      console.log("Login:",user);

  //res.render("login");
    res.render("auth/login", { "message": req.flash("error") });

});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/", //si has tenido exito 
  failureRedirect: "/login", //si fallas al login
  failureFlash: true, // error managment 
  passReqToCallback: true //
}));

router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {

  res.render("private", { user: req.user });
});

module.exports = router;