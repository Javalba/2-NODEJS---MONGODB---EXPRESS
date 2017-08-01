const Campaign = require('../models/campaign.js');

function authorizeCampaign(req, res, next) {
    Campaign.findById(req.params.id, (err, campaign) => {
        // If there's an error, forward it
        if (err) {
            return next(err);
        }
        // If there is no campaign, return a 404
        if (!campaign) {
            return next(new Error('404'));
        }
        // If the campaign belongs to the user, next()
        if (campaign.belongsTo(req.user)) {
            return next();
        } else {
            return res.redirect(`/campaigns/${campaign._id}`);
        }
/*         if (campaign._creator.equals(req.user._id)) {
            return next();
        } else {
            // Otherwise, redirect
            return res.redirect(`/campaigns/${campaign._id}`);
        } */
    });
}

/**
 * We should use res.locals over req when the data will only be used in the view.
 */
function checkOwnership(req, res, next){
  Campaign.findById(req.params.id, (err, campaign) => {
    if (err){ return next(err); }
    if (!campaign){ return next(new Error('404')); }

    if (campaign.belongsTo(req.user)){
      res.locals.campaignIsCurrentUsers = true;
    } else {
      res.locals.campaignIsCurrentUsers = false;
    }
    return next();
  });
}

module.exports = {
  authorizeCampaign,
  checkOwnership
};