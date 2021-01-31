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
        client.log(`[${message.author.tag}/${message.guild.name}] Kick aléatoire de ${cible[1].displayName}`, 'admin');
        break;
      }
      default:{
         function getUserFromMention(mention) {
            if (!mention) return;
            if (mention.startsWith("<@") && mention.endsWith(">")) {
              mention = mention.slice(2, -1);
              if (mention.startsWith("!")) {
                mention = mention.slice(1);
              }
              return message.guild.members.cache.get(mention);
            }
          }
          let user = getUserFromMention(args[0]);
          if (!user) {
            message.reply("La personne que vous avez mentionnée n'existe pas.");
            client.log(`[${message.author.tag}/${message.guild.name}] Tentative de kick échouée ( Mention inexistante )`, 'admin');
            return;
          }else{
            user.kick().then(async(member) => {
              user = await client.users.fetch(user);
              await client.users.cache.get(user).send(`:postbox: Voici votre invitation : ${invite}`);
              message.channel.send(`${user.tag} était le maillont faible de l'équipe, allez on dit tous au revoir :wave:`);
              client.log(`[${message.author.tag}/${message.guild.name}] ${user.tag} a été kick`, 'admin');
            }).catch(() => {
              message.channel.send(`Je ne peux pas kick cet utilisateur ( ${user.displayName} )`);
              client.log(`[${message.author.tag}/${message.guild.name}] Tentative de kick échouée ( Permissions manquantes )`, 'admin');
            });
          }

          break;
      }
  }
};
