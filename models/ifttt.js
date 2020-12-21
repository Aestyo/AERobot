const mongoose = require("mongoose");

const iftttSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  this: String,
  where: String,
  what: String,
  who: String,
  then: String,
  in: String,
  do: String,
  to: String,
});

module.exports = mongoose.model("ifttt", iftttSchema);
