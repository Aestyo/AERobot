const mongoose = require("mongoose");

const werewolfSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  lobby: Array,
  premadeRoles: Array,
  customRoles: Array,
  playing: Array,
  id: String,
  channelID: Number,
  channelName: String,
  guildID: Number,
  guildName: String,
  maxPlayers: Number,
  customRole: Boolean,
  phase: String,
});

module.exports = mongoose.model("Werewolf", werewolfSchema);
