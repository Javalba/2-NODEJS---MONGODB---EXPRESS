var express = require('express');
var router = express.Router();
const Campaign = require('../models/campaign');

/* GET home page. */
router.get('/', (req, res, next) => {
  // New
  Campaign
    .find({})
    .populate('_creator')
    .exec((err, campaigns) => {
      res.render('index', { campaigns });
    });
  // New
});




module.exports = router;
