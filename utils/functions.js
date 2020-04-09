const mongoose = require("mongoose");
const { Fiche } = require("../models/index");

module.exports = (client) => {
  client.getFiche = async (message) => {
    const data = await Fiche.findOne({ id: message.author.id });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateFiche = async (message, settings) => {
    const data = await client.getFiche(message);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
  client.createFiche = async (fiche) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, fiche);
    const createFiche = await new Fiche(merged);
    createFiche.save();
  };
};
