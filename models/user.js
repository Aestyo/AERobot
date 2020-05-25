const mongoose = require("mongoose");

const werewolfSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  message: Array,
  tag: String,
  id: Number,
  bot: Boolean,
  createdAt: String,
  avatar: Array,
});

module.exports = mongoose.model("Werewolf", werewolfSchema);
