const mongoose = require("mongoose");

const ficheSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
  id: Number,
  Auteur: String,
  Nom: String,
  Métier: String,
  Occupation: String,
  Sexe: String,
  Age: Number,
  HealthPoint: Number,
  HealthPointMax: Number,
  SanityPoint: Number,
  SanityPointMax: Number,
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
