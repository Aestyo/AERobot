const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.guild.members.fetch({ force: true })
    .then(members = Array.from(message.guild.members.cache.entries()))
    .catch(console.error);

  switch(args[0]){
      case "random":{
        
        let invite = await message.channel.createInvite(
          {
            maxAge: 86400, // maximum time for the invite, in milliseconds
            maxUses: 1 // maximum times it can be used
        });

        cible = members[Math.floor(Math.random() * Math.floor(members.length))];
        cible[1].kick().then(async(member) => {
          user = await client.users.fetch(cible[1]);
          await client.users.cache.get(cible[1]).send(`:postbox: Voici votre invitation : ${invite}`);
          message.channel.send(`${user.tag} était le maillont faible de l'équipe, allez on dit tous au revoir :wave:`);
        }).catch(() => {
          message.channel.send(`Je ne peux pas kick cet utilisateur ( ${cible[1].displayName} )`);
        });
        break;
      }
      default:{
          
          break;
      }
  }
};
