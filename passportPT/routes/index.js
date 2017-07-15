var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/flash', function(req, res, next) {
  res.flash('index', { title: 'Express' });
});


router.get('/secret', ensureLogin.ensureLoggedIn() ,function(req, res, next) {
  res.send('secret');
});

authRoutes.get("/logout", (req, res) => {
  req.logout(); // .logout passport 
  res.redirect("/login");
});

module.exports = router;
