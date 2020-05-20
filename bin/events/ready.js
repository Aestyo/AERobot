// Évènement : Démarrage du bot terminé
module.exports = (client) => {
  let ListMembers = [];
  let keys = Array.from(client.guilds.cache.entries());
  let NbServeurs = keys.length;

  for (let i = 0; i < keys.length; i++) {
    let keys2 = Array.from(keys[i][1].members.cache.entries());
    for (let j = 0; j < keys2.length; j++) {
      if (keys2[j][1].user.bot == false) {
        ListMembers.push(keys2[j][1].user.tag);
      }
    }
  }
  var NbUsers = Array.from(new Set(ListMembers));

  const catchline = `${NbUsers.length} utilisateurs sur ${NbServeurs} serveurs`;

  client.user
    .setActivity(catchline, { type: "WATCHING" })
    .then((presence) => console.log(`INFO: Présence définie comme : ${catchline}`))
    .catch(console.error);
  console.log(`INFO: Bot connecté en tant que ${client.user.tag}`);
};
