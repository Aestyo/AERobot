// Évènement : Démarrage du bot terminé
module.exports = (client) => {
  let ListMembers = [];
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
  var NbUsers = Array.from(new Set(ListMembers));

  console.log(`INFO: Bot connecté en tant que ${client.user.tag}`);

  Presence();

  async function Presence() {
    for (let i = 0; i < NbUsers.length + 1; i++) {
      /*client.user
        .setActivity(NbUsers[i], { type: "WATCHING" })
        .then((presence) => console.log(`INFO: Présence définie comme : Regarde ${NbUsers[i]}`))
        .catch(console.error);*/
      client.user.setActivity("Wankil", { type: "STREAMING", url: "https://www.twitch.tv/wankilstudio/" });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      if (NbUsers.length == i) {
        i = 0;
      }
    }
  }
};
