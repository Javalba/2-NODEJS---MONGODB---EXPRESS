const mongoose = require('mongoose');

//uppercase convection
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebSchema);

//Export Celebrity. Every program can read then. 
module.exports = Celebrity;
