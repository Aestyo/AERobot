const mongoose = require("mongoose");
const { defaultsettings: defaults } = require("../config");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  guildID: String,
  guildName: String,
  prefix: {
    type: String,
    default: defaults.prefix
  }
});

module.exports = mongoose.model("Guild", guildSchema);
