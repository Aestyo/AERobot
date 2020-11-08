const mongoose = require("mongoose");

const reactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  message: Object,
  reaction: String,
  result: String,
});

module.exports = mongoose.model("Reaction", reactionSchema);
