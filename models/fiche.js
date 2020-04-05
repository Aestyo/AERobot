const mongoose = require("mongoose");

const ficheSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  Auteur: String,
  Nom: String,
  Métier: String,
  Occupation: String,
  Sexe: String,
  Age: Number,
  HP: Number,
  HPMax: Number,
  SantéMentale: Number,
  SantéMentaleMax: Number,
  Force: Number,
  Constitution: Number,
  Dextérité: Number,
  Apparence: Number,
  Intelligence: Number,
  Volonté: Number,
  Éducation: Number,
  Folie: String,
});

module.exports = mongoose.model("Fiche", ficheSchema);
