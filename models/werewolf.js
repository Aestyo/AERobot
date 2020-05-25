const mongoose = require("mongoose");

const werewolfSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  roles: Array,
  players: Array,
  playing: Array,
  id: String,
  guild_id: Number,
  guild_name: String,
  player_max: Number,
  auto_roles: Boolean,
  phase: String,
});

module.exports = mongoose.model("Werewolf", werewolfSchema);
