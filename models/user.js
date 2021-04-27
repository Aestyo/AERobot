const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  id: Number,
  usertag: String,
  money: Number,
  health: Number,
  level: Number,
  experience: Number,
  weapons: Array,
  boxes: Array,
});

module.exports = mongoose.model('User', userSchema);
