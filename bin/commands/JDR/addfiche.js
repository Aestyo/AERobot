const mongoose = require("mongoose");
const { Fiche } = require("../../../models/index");

module.exports.run = async (client, message, args) => {
  if (args[0] == "aide") {
    message.channel.send(
      'La commande fonctionne comme ceci : \n tocard addfiche "Nom".'
    );
  }
  const newFiche = {
    Auteur: message.author.tag,
    Nom: `${args[0]} ${args[1]}`,
    Métier: "Indéfini",
    Occupation: "Indéfini",
    Sexe: "Indéfini",
    Age: -1,
    HP: -1,
    HPMax: -1,
    SantéMentale: -1,
    SantéMentaleMax: -1,
    Force: -1,
    Constitution: -1,
    Dextérité: -1,
    Apparence: -1,
    Intelligence: -1,
    Volonté: -1,
    Éducation: -1,
    Folie: "Indéfini",
  };
  await client.createFiche(newFiche);
  console.log(
    `INFO: Nouvelle fiche de personnage crée : ${args[0]} ${args[1]}`
  );
};

module.exports.help = {
  name: "addfiche",
};
