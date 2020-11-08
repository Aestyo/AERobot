const mongoose = require("mongoose");

const amongusSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  id: String,
  channelID: Number,
  channelName: String,
  guildID: Number,
  guildName: String,
  playersID: Array,
  playersTag: Array,
  H: Number,
  M: Number,
});

module.exports = mongoose.model("AmongUs", amongusSchema);
