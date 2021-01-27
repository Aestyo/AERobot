// Évènement : Démarrage du bot terminé
module.exports = (client) => {
  client.log(`Bot connecté en tant que ${client.user.tag}`, "ready");
  var setpresence = "attendre que Chell me redémarre";
  client.user
    .setActivity(`${setpresence}`, { type: "PLAYING" })
    .then((presence) => client.log(`Présence définie en tant que ${setpresence}`, "ready"))
    .catch(console.error);
};
