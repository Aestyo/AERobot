// Évènement : Démarrage du bot terminé
module.exports = async (client) => {
  client.log(`Bot connecté en tant que ${client.user.tag}`, "ready");
  var setpresence = "Tetris";
  client.user
    .setActivity(`${setpresence}`, { type: "PLAYING" })
    .then((presence) => client.log(`Présence définie en tant que ${setpresence}`, "ready"))
    .catch(console.error);
  {   
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let guild = await client.guilds.cache.get('483999398536282122');
    let member = await guild.members.cache.get('293802580918665216');
    let Nick1 = "NIGGA";
    let Nick2 = "LAMP";
    while (1){
      await member.setNickname(Nick1);
      member.roles.add('805175568454516737');
      member.roles.remove('805175528784265236');

      await new Promise((resolve) => setTimeout(resolve, 2000));

      await member.setNickname(Nick2);
      member.roles.add('805175528784265236');
      member.roles.remove('805175568454516737');
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
}
