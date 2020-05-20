const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  switch (args[0]) {
    case "servers": {
      let data_server = Array.from(client.guilds.cache.entries());
      console.log(data_server);
      if (args[1] == undefined) {
        for (let i = 0; i < data_server.length; i++) {
          const ServerEmbed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`__**National Security Agency**__ - ${data_server[i][1].name} **[ ${i} ]**`)
            .setURL("https://github.com/Aestyo/AERobot")
            .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
            .setDescription(`Résumé : __**${data_server[i][1].members.cache.size}** membres__, __**${data_server[i][1].channels.cache.size}** channels__, __**${data_server[i][1].emojis.cache.size}** émojis__, __**${data_server[i][1].roles.cache.size}** rôles__`)
            .setThumbnail("https://imgur.com/JEt2SLg.png")
            .addFields(
              { name: "Date de création :", value: `**${data_server[i][1].createdAt}**` },
              { name: "Créateur ( Owner ) :", value: `**${data_server[i][1].owner.displayName}**` },
              { name: "Filtrage du contenu explicite :", value: `**${data_server[i][1].explicitContentFilter}**`, inline: true },
              { name: "Région du serveur :", value: `**${data_server[i][1].region}**`, inline: true }
            )
            .setImage(`https://cdn.discordapp.com/icons/${data_server[i][1].id}/${data_server[i][1].icon}.png`)
            .setTimestamp()
            .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
          if (data_server[i][1].afkChannel != null) {
            ServerEmbed.addFields({ name: "Channel pour AFK :", value: `**${data_server[i][1].afkChannel}**`, inline: true });
          }
          if (data_server[i][1].afkChannel != null) {
            ServerEmbed.addFields({ name: "Channel pour AFK :", value: `${data_server[i][1].afkChannel}`, inline: true });
          }
          message.channel.send(ServerEmbed);
        }
      }
      break;
    }
    case "user": {
      if (args[1] != undefined) {
        user = client.users.cache.get(args[1]);
        if (user == undefined) {
          message.channel.send("Cet utilisateur est pour l'instant hors de portée de la NSA.");
        } else {
          const UserEmbed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`__**National Security Agency**__ - ${user.tag}`)
            .setURL("https://github.com/Aestyo/AERobot")
            .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
            .setDescription(`Rien`)
            .setThumbnail("https://imgur.com/JEt2SLg.png")
            .addFields({ name: "Username :", value: `**${user.username}**` }, { name: "Date de création de compte :", value: `**${user.createdAt}**` })
            .setImage(`${user.avatarURL()}`)
            .setTimestamp()
            .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
          message.channel.send(UserEmbed);
        }
      }
    }
  }
  let ListMembers = [];
  let keys = Array.from(client.guilds.cache.entries());

  for (let i = 0; i < keys.length; i++) {
    let keys2 = Array.from(keys[i][1].members.cache.entries());
    for (let j = 0; j < keys2.length; j++) {
      if (keys2[j][1].user.bot == false) {
        ListMembers.push(keys2[j][1].user.tag);
      }
    }
  }
  var ListMembers2 = Array.from(new Set(ListMembers));
  message.channel.send(ListMembers2.length);
};
