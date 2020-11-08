const mongoose = require("mongoose");

const reactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  message: String,
  reaction: String,
  action: String,
  subject: String,
});

module.exports = mongoose.model("Reaction", reactionSchema);
