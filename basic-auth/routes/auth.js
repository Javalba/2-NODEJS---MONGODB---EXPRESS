var express = require('express');
var router = express.Router();

// User model
const User = require("../models/user");
// BCrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


/* GET users listing. */
router.get('/signup', function (req, res, next) {
    console.log("request:",req.session); //el parametro session es añadido por el paquete session 
    res.render('signup');
});

router.post("/signup", (req, res, next) => {
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
});

router.get("/login", (req, res, next) => {
  res.render("login");
});


router.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  if (username === "" || password === "") {
    return res.render("login", { //return arriba 
       errorMessage: "Indicate a username and a password to sign up"
    });
  }

  User.findOne({ "username": username }, (err, user) => {
      if (err || !user) {
        res.render("login", {
          errorMessage: "The username doesn't exist"
        });
        return; //return abajo
      }
      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        console.log("aaaaaaaaaaaaaa");
        res.redirect("/secret");
      } else {
        res.render("login", {
          errorMessage: "Incorrect password"
        });
      }
  });
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});

module.exports = router;
