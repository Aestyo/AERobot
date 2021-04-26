const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  id: String,
  usertag: String,
  weapons: Array,
});

module.exports = mongoose.model('User', userSchema);
