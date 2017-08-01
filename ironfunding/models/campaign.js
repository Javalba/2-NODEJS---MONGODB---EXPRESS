const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./campaign-types');
const moment = require('moment');


const CampaignSchema = new Schema({
  title         : { type: String, required: true },
  description   : { type: String, required: true },
  category      : { type: String, enum: TYPES, required: true },
  _creator      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  goal          : { type: Number, required: true },
  backerCount   : { type: Number, default: 0 },
  totalPledged  : { type: Number, default: 0 },
  deadline      : { type: Date, required: true },
});

/*Virtuals are document properties that you can get and set but that do not get persisted to MongoDB.
The getters are useful for formatting or combining fields,
 while setters are useful for de-composing a single value into multiple values for storage.
*/
CampaignSchema.virtual('timeRemaining').get(function () {
  let remaining = moment(this.deadline).fromNow(true).split(' ');
  let [days, unit] = remaining;
  return { days, unit };
});

//console.log(campaign.timeRemaining); // x days

// fromNow(true) prints the date without a suffix.

// moment(yesterday).fromNow()
// => 1 day ago

// moment(yesterday).fromNow(true)
// => 1 day



/**
 *virtual to return properly formatted for a date field:
 */
CampaignSchema.virtual('inputFormattedDate').get(function(){
  return moment(this.deadline).format('YYYY-MM-DD');
});

/**
 * add a method to compare if creator is equal in our Campaign model
 */
CampaignSchema.methods.belongsTo = function(user){
  return this._creator.equals(user._id);
};



module.exports = mongoose.model('Campaign', CampaignSchema);