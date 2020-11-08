const Discord = require("discord.js");
const config = require("../../../config/tokens");

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
      if (args[1] == undefined) {
        message.channel.send("Vous n'avez pas entrer de tag d'utilisateur. ( Exemple : **ÆRobot#9206** )");
      }

      response = await message.channel.send(":mag_right: Recherche des informations de l'utilisateur ...");
      for (let i = 0; i < 2; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response.edit(":mag_right: Recherche des informations de l'utilisateur .");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response.edit(":mag_right: Recherche des informations de l'utilisateur ..");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response.edit(":mag_right: Recherche des informations de l'utilisateur ...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      user = client.users.cache.find((user) => user.tag === args[1]);
      if (user.id == config.ownerID) {
        message.channel.send(":no_entry: Cet utilisateur ne peut pas être espionné.");
        break;
      }
      if (user == undefined) {
        message.channel.send(":no_entry: L'utilisateur n'existe pas ou il est hors d'atteinte.");
        break;
      }
      for (let i = 0; i < 2; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response.edit(":mag_right: Informations de l'utilisateur trouvées !\n:package: Paquetage des informations de l'utilisateur .");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response.edit(":mag_right: Informations de l'utilisateur trouvées !\n:package: Paquetage des informations de l'utilisateur ..");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response.edit(":mag_right: Informations de l'utilisateur trouvées !\n:package: Paquetage des informations de l'utilisateur ...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      if (Math.floor(Math.random() * Math.floor(3)) == 0) {
        response.edit(":mag_right: Informations de l'utilisateur trouvées !\n:package: Informations paquetées !\n:no_entry: Requête bloquée par les serveurs de Discord.");
        break;
      }
      response.edit(":mag_right: Informations de l'utilisateur trouvées !\n:package: Informations paquetées !\n:mailbox: Requête autorisée par les serveurs de Discord.");
      console.log(user);
      message.channel.send(
        `‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎\nTag : **${user.tag}** \nID : **${user.id}** \nBot : **${user.bot}** \nDate de création : **${user.createdAt}** \nURL Avatar par défaut : **${user.defaultAvatarURL}** \nAvatar actuel : **${user.avatarURL({
          format: "png",
          dynamic: true,
          size: 1024,
        })}**`
      );
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
  //message.channel.send(ListMembers2.length);
};
