// Évènement : Démarrage du bot terminé
module.exports = (client) => {
  console.log(`INFO: Bot connecté en tant que ${client.user.tag}`);
  var setpresence = "Portal 3";
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
    .setActivity(`${setpresence}`, { type: "PLAYING" })
    .then((presence) => console.log(`INFO: Présence définie comme : ${setpresence}`))
    .catch(console.error);
};
