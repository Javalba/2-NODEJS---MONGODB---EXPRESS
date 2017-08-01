const express = require('express');
const Campaign = require('../models/campaign');
const TYPES = require('../models/campaign-types');
const router = express.Router();
const {
  ensureLoggedIn
} = require('connect-ensure-login');

const { 
  authorizeCampaign,
  checkOwnership 
  } = require('../middleware/campaign-authorization');



router.get('/new', (req, res) => {
  res.render('campaigns/new', {
    types: TYPES
  });
});

router.post('/campaigns', ensureLoggedIn('/login'), (req, res, next) => {
  const newCampaign = new Campaign({
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    category: req.body.category,
    deadline: req.body.deadline,
    // We're assuming a user is logged in here
    // If they aren't, this will throw an error
    _creator: req.user._id
  });
  newCampaign.save((err) => {
    if (err) {
      res.render('campaigns/new', {
        campaign: newCampaign,
        types: TYPES
      });
    } else {
      res.redirect(`/campaigns/${newCampaign._id}`);
    }
  });
});

/* router.get('/campaigns/:id', (req, res, next) => {
  Campaign.findById(req.params.id, (err, campaign) => {
    if (err){ return next(err); }

    campaign.populate('_creator', (err, campaign) => {
      if (err){ return next(err); }
      return res.render('campaigns/show', { campaign });
    });
  });
}); */



router
  .get('/campaigns/:id', checkOwnership,(req, res, next) => {
    Campaign.findById(req.params.id, (err, campaign) => {
      if (err) {
        return next(err);
      }

      campaign.populate('_creator', (err, campaign) => {
        if (err) {
          return next(err);
        }
        return res.render('campaigns/show', {
          campaign
        });
      });
    });
  })
  
  .post('/campaigns/:id', ensureLoggedIn('/login'), authorizeCampaign,(req, res, next) => {
  const updates = {
    title: req.body.title,
    goal: req.body.goal,
    description: req.body.description,
    category: req.body.category,
    deadline: req.body.deadline
  };

  Campaign.findByIdAndUpdate(req.params.id, updates, (err, campaign) => {
    if (err) {
      return res.render('campaigns/edit', {
        campaign,
        errors: campaign.errors
      });
    }
    if (!campaign) {
      return next(new Error('404'));
    }
    return res.redirect(`/campaigns/${campaign._id}`);
  });
});


/*
Find the campaign by the id in parameters
If there is an error, forward to the error handler
If there is no campaign with that id, forward to the 404 handler
If all goes well, render the edit form
*/
router.get('/campaigns/:id/edit', ensureLoggedIn('/login'), authorizeCampaign,(req, res, next) => {
  Campaign.findById(req.params.id, (err, campaign) => {
    if (err) {
      return next(err);
    }
    if (!campaign) {
      return next(new Error("404"));
    }
    return res.render('campaigns/edit', {
      campaign,
      types: TYPES
    })
  });
});

module.exports = router;