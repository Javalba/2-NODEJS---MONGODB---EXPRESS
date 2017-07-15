var express = require('express');
var router = express.Router();
const ensureLogin = require("connect-ensure-login");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('req.session: ', req.session );
  
  res.render('index', { title: 'Express', message: req.flash() });
});

router.get('/flash', (req, res, next) => {
  req.flash('info', 'estoy en flash y envio esto a otro lado')
  res.redirect('/')
})

router.get('/secret', ensureLogin.ensureLoggedIn() ,(req, res, next) => {
  res.send('secret')
})

module.exports = router;
