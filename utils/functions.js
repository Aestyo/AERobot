const mongoose = require("mongoose");
const { Fiche } = require("../models/index");

module.exports = (client) => {
  client.createFiche = async (fiche) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, fiche);
    const createFiche = await new Fiche(merged);
    createFiche.save();
  };
};
