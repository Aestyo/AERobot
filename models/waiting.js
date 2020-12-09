const mongoose = require("mongoose");

const waitingSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  action: String,
  subject: String,
  hour: Number,
  minute: Number,
});

module.exports = mongoose.model("Waiting", waitingSchema);
