const mongoose = require("mongoose");

const ReactionRoleManagerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  guild: String,
  channel: Array,
  message: Array,
  emoji: Array,
  role: Array,
});

module.exports = mongoose.model("ReactionRoleManager", ReactionRoleManagerSchema);
