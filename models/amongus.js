const mongoose = require("mongoose");

const amongusSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  id: String,
  accepted: Array,
  maybe: Array,
  rejected: Array,
  channelID: Number,
  channelName: String,
  Hours: String,
  Minutes: String,
});

module.exports = mongoose.model("AmongUs", amongusSchema);
