const Discord = require("discord.js");

module.exports.play = async function (client, message) {
  var data = await client.getWerewolf(message);
  while (data.phase != "finished") {
    data = await client.getWerewolf(message);
    switch (data.phase) {
      case "starting": {
        var villagerSide = "";
        var werewolfSide = "";
        var listPlayers = "";
        if (data.customRole == true) {
          for (let i = 0; i < data.customRoles.length; i++) {
            if (data.customRoles[i] == ":wolf: Loup-garou") {
              werewolfSide = werewolfSide + `- ${data.customRoles[i]}\n`;
            }
            if (data.customRoles[i] == ":ear_of_rice: Villageois" || data.customRoles[i] == ":test_tube: Sorcière" || data.customRoles[i] == ":dart: Chasseur") {
              villagerSide = villagerSide + `- ${data.customRoles[i]}\n`;
            }
          }
        } else if (data.premadeRoles == false) {
          for (let i = 0; i < data.premadeRoles.length; i++) {
            if (data.premadeRoles[i] == ":wolf: Loup-garou") {
              werewolfSide = werewolfSide + `- ${data.premadeRoles[i]}\n`;
            }
            if (data.premadeRoles[i] == ":ear_of_rice: Villageois" || data.premadeRoles[i] == ":test_tube: Sorcière" || data.premadeRoles[i] == ":dart: Chasseur") {
              villagerSide = villagerSide + `- ${data.premadeRoles[i]}\n`;
            }
          }
        }
        for (let i = 0; i < data.maxPlayers; i++) {
          listPlayers = listPlayers + "- " + data.lobby[i].name + "\n";
        }
        const launchMessage = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle(`**ÆRobot** - __Loup-Garou__`)
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
          .setDescription(`Une partie de loup-garou commence dans le serveur __**${message.guild}**__\nDans le channel ${message.channel} \nAvec l'identifiant : [**${data.id}**] `)
          .setThumbnail("https://imgur.com/MUpkdlb.png")
          .setTimestamp()
          .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
          .addField(`**Liste des joueurs :**`, `${listPlayers}`, false)
          .addField(`**Camp des villageois :**`, `${villagerSide}`, true)
          .addField(`**Camp des loup-garous :**`, `${werewolfSide}`, true)
          .setImage("https://imgur.com/9NsatA6.png");
        message.channel.send(launchMessage);
        await require("./werewolf").distributeRoles(client, message);
        await client.updateWerewolf(message, { phase: "wolvesTurn" });
        break;
      }
      case "wolvesTurn": {
        for (let i = 0; i < data.maxPlayers; i++) {
          if (data.playing[i].role == ":wolf: Loup-garou") {
            discordPlayer = client.users.cache.get(data.playing[i].id);
            const Embed = new Discord.MessageEmbed()
              .setColor("#ff2929")
              .setTitle(`**ÆRobot** - __Loup-Garou__`)
              .setURL("https://github.com/Aestyo/AERobot")
              .setDescription(`Vous vous réveillez dans la nuit, avec une soudaine envie de dévorer quelqu'un ! Mais qui allez-vous choisir ? \nFaites \"/werewolf vote **${data.id}** *[numéro de joueur]* \" pour en décider !`)
              .setThumbnail("https://imgur.com/m1gKbSi.png")
              .setTimestamp()
              .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
              .setImage("https://imgur.com/Vm1Jwpq.png");
            for (let k = 0; k < data.maxPlayers; k++) {
              if (data.playing[k].role == ":wolf: Loup-garou") {
                Embed.addField(`Joueur n°${k + 1}`, `- **${data.playing[k].name}** :wolf:`, false);
              } else {
                Embed.addField(`Joueur n°${k + 1}`, `- **${data.playing[k].name}** :question:`, false);
              }
            }
            discordPlayer.send(Embed);
            await new Promise((resolve) => setTimeout(resolve, 15000));
          }
        }
        await client.updateWerewolf(message, { phase: "finished" });
        break;
      }
      case "finished": {
        data = await client.getWerewolf(message);
        pastebin
          .createPaste({
            text: data.log,
            title: `Logs Werewolf #${data.id}`,
            format: null,
            privacy: 3,
            expiration: "1D",
          })
          .then(function (data) {
            message.channel.send(data);
          })
          .fail(function (err) {
            console.log(err);
          });
        break;
      }
      default: {
        await client.updateWerewolf(message, { phase: "finished" });
      }
    }
  }
};
