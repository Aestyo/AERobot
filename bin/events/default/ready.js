// Évènement : Démarrage du bot terminé
module.exports = async (client) => {
  client.log(`Bot connecté en tant que ${client.user.tag}`, 'ready');
  var setpresence = 'World of Warcraft';
  client.user
    .setActivity(`${setpresence}`, { type: 'PLAYING' })
    .then((presence) =>
      client.log(`Présence définie en tant que ${setpresence}`, 'ready')
    )
    .catch(console.error);
  /*{   
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let guild = await client.guilds.cache.get('483999398536282122');
    let member = await guild.members.cache.get('293802580918665216');
    let Nick1 = "NIGGA";
    let Nick2 = "LAMP";
    while (1){
      await member.setNickname(Nick1);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await member.setNickname(Nick2);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }*/
};
