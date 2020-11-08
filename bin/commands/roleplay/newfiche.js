const mongoose = require("mongoose");
const { Fiche } = require("../../../models/index");

module.exports.run = async (client, message, args) => {
  if (args[0] == "aide" || args[0] == undefined || args[1] == undefined) {
    message.channel.send(
      "La commande fonctionne comme ceci : \n`tocard addfiche [Nom] [Prénom]`. ( Sans les crochets )"
    );
    return;
  }
  const newFiche = {
    id: message.author.id,
    Auteur: message.author.tag,
    Nom: `${args[0]} ${args[1]}`,
    Métier: "Indéfini",
    Occupation: "Indéfini",
    Sexe: "Indéfini",
    Age: -1,
    HealthPoint: -1,
    HealthPointMax: -1,
    SanityPoint: -1,
    SanityPointMax: -1,
    Force: -1,
    Constitution: -1,
    Dextérité: -1,
    Apparence: -1,
    Intelligence: -1,
    Volonté: -1,
    Éducation: -1,
    Folie: "Aucune",
    Inventaire: "",
  };
  await client.createFiche(newFiche);
  console.log(
    `INFO: Nouvelle fiche de personnage crée : ${args[0]} ${args[1]}`
  );
  message.channel.send(
    `Nouveau personnage crée sous le nom de : ${args[0]} ${args[1]}`
  );
};
