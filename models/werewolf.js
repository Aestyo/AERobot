const mongoose = require("mongoose");

const werewolfSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  id: String,
  guild_id: Number,
  guild_name: String,
  player_max: Number,
  players: Array,
  setup_roles: Boolean,
  custom_roles: Array,
});

module.exports = mongoose.model("Werewolf", werewolfSchema);
