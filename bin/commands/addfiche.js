const mongoose = require("mongoose");
const { Fiche } = require("../../models/index");

module.exports.run = async (client, message, args) => {
  if (args[0] == "aide") {
    message.channel.send(
      'La commande fonctionne comme ceci : \n tocard addfiche "Nom" "Métier" "Occupation" [...]'
    );
  }
  const newFiche = {
    Auteur: message.author.tag,
    Nom: args[0],
    Métier: args[1],
    Occupation: args[2],
  };
  await client.createFiche(newFiche);
  console.log(`INFO: Nouvelle fiche de personnage crée : ${args[0]}`);
};

module.exports.help = {
  name: "addfiche",
};
