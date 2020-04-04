const mongoose = require("mongoose");

const ficheSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  Auteur: String,
  Nom: String,
  Métier: String,
  Occupation: String
});

module.exports = mongoose.model("Fiche", ficheSchema);
