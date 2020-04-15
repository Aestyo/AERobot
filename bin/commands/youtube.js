module.exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  const config = require("../../config.js");
  const { Player } = require("discord-player");
  const player = new Player(client, config.ytoken);
  const youtube = require("scrape-youtube");
  const search = youtube.search;
  guild = message.guildID;
  /*player.play(
    message.member.voice.channel,
    "https://www.youtube.com/watch?v=h_d8t8nqN0I"
  );*/

  if (args[0] == "play") {
    if (args[1] == null)
      return message.channel.reply(
        ", Vous devez entrer une chanson à chercher."
      );
    if (player.isPlaying(guild) == true) {
      Add(args, message);
    } else {
      Play(args, message);
    }
  } else if (args[0] == "pause") {
    Pause(args, message);
  } else if (args[0] == "resume") {
    Resume(args, message);
  } else if (args[0] == "volume") {
    Volume(args, message);
  } else if (args[0] == "mute") {
    Mute(args, message);
  }

  function Play(args, message) {
    search(args.join(" ")).then(function (results) {
      const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Lecteur YouTube__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(
          message.author.username,
          message.author.avatarURL(),
          `https://discordapp.com/users/${message.author.id}`
        )
        .setDescription(
          `**${results[0].title}** est maintenant en cours de lecture sur "**${message.member.guild}**".`
        )
        .setThumbnail("https://imgur.com/q8RlMjZ.png")
        .addFields({
          name: "Information sur la vidéo :",
          value: `**Auteur**: ${results[0].channel} \n**Nombre de vues**: ${results[0].views} \n**Description**: ${results[0].description}`,
        })
        .setImage(results[0].thumbnail)
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
      player.play(message.member.voice.channel, results[0].link);
      message.channel.send(Embed);
    });
  }

  function Pause(message) {
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La lecture en cours sur "**${message.member.guild}**" est maintenant en pause.`
      )
      .setThumbnail("https://imgur.com/80q1HvD.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    player.pause(guild);
    message.channel.send(Embed);
  }

  function Resume(message) {
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La lecture en cours sur "**${message.member.guild}**" est maintenant en pause.`
      )
      .setThumbnail("https://imgur.com/80q1HvD.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    player.resume(guild);
    message.channel.send(Embed);
  }

  function Add(args, message) {
    search(args.join(" ")).then(function (results) {
      const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Lecteur YouTube__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(
          message.author.username,
          message.author.avatarURL(),
          `https://discordapp.com/users/${message.author.id}`
        )
        .setDescription(
          `**${results[0].title}** a été ajoutée à la liste de lecture de "**${message.member.guild}**".`
        )
        .setThumbnail("https://imgur.com/q8RlMjZ.png")
        .addFields({
          name: "Information sur la vidéo :",
          value: `**Auteur**: ${results[0].channel} \n**Nombre de vues**: ${results[0].views} \n**Description**: ${results[0].description}`,
        })
        .setImage(results[0].thumbnail)
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
      player.play(message.member.voice.channel, results[0].link);
      message.channel.send(Embed);
    });
  }
};
