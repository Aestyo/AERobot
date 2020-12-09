// Évènement : Démarrage du bot terminé
module.exports = (client) => {
  console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: Bot connecté en tant que ${client.user.tag}`);
  var setpresence = "La fin de l'humanité";
  /*let ListMembers = [];
  let keys = Array.from(client.guilds.cache.entries());
  let NbServeurs = keys.length;

  for (let i = 0; i < keys.length; i++) {
    let keys2 = Array.from(keys[i][1].members.cache.entries());
    for (let j = 0; j < keys2.length; j++) {
      if (keys2[j][1].user.bot == false) {
        ListMembers.push(keys2[j][1].user.username);
      }
    }
  }
  var NbUsers = Array.from(new Set(ListMembers));*/
  

  client.user
    .setActivity(`${setpresence}`, { type: "COMPETING" })
    .then((presence) => console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: Présence définie en tant que ${setpresence}`))
    .catch(console.error);
};
