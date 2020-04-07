const mongoose = require("mongoose");
const { Fiche } = require("../models/index");

module.exports = (client) => {
  client.getFiche = async (message) => {
    const data = await Fiche.findOne({ Auteur: message.author.tag });
    if (data) return data;
    return -1;
  };

  client.createFiche = async (fiche) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, fiche);
    const createFiche = await new Fiche(merged);
    createFiche.save();
  };
};
