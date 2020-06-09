const Discord = require("discord.js");
const config = require("../../config");

module.exports.run = async (client, message, args) => {
  if (args[0] == "force" || args[0] == "constitution" || args[0] == "dextérité" || args[0] == "apparence" || args[0] == "intelligence" || args[0] == "volonté" || args[0] == "éducation") {
    fiche();
  } else if (args[0] == "sanity") {
    sanity();
  } else {
    standard();
  }
  async function fiche() {
    const data = await client.getFiche(message);
    if (args[0] == undefined || args[1] == undefined) return message.channel.send("Il manque un ou des argument(s) à votre commande.");
    if (data == -1) return message.channel.send("Pour pouvoir faire cette commande il faut que vous ayez une fiche personnage.");
    var roll = Math.floor(Math.random() * 100 + 1);
    /*if (message.author.id == config.ownerID) {
      roll = Math.floor(Math.random() * 60 + 1);
    }*/
    var level = 0;
    if (args[1] == "extrême") level = 1;
    else if (args[1] == "extreme") level = 1;
    else if (args[1] == "difficile") level = 3;
    else if (args[1] == "standard") level = 5;
    else return message.channel.send(`${args[1]} n'est pas une difficultée valable pour un jet de dés.`);
    var Embed = new Discord.MessageEmbed();
    if (roll == 1) {
      Embed.addField(`\u200B`, `**C'est une réussite critique !**`).setColor("#43b581");
    } else if (roll == 100) {
      Embed.addField(`\u200B`, `**C'est un échec critique !**`).setColor("#f04747");
    } else {
      Embed.setColor("#0099ff");
    }
    Embed.setTitle("**ÆRobot** - __Lancé de dé de fiche personnage__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
      .setDescription(`${data.Nom} lance un dé de **${args[0]}** !`)
      .setImage("https://imgur.com/lsWZjoW.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    var stat = 0;
    if (args[0] == "force") stat = data.Force;
    else if (args[0] == "constitution") stat = data.Constitution;
    else if (args[0] == "dextérité") stat = data.Dextérité;
    else if (args[0] == "dexterite") stat = data.Dextérité;
    else if (args[0] == "apparence") stat = data.Apparence;
    else if (args[0] == "intelligence") stat = data.Intelligence;
    else if (args[0] == "volonté") stat = data.Volonté;
    else if (args[0] == "volonte") stat = data.Volonté;
    else if (args[0] == "éducation") stat = data.Éducation;
    else if (args[0] == "education") stat = data.Éducation;
    else return message.channel.send(`${args[0]} n'est pas une caractéristique valable pour un jet de dés.`);
    if (roll > stat * level) {
      Embed.addField(`Difficulté du jet : ${args[1]}`, `**${roll}** / 100. Il fallait faire **${stat * level}** / 100, c'est donc un échec.`);
      if (roll == 100) {
        Embed.addField(`\u200B`, `**C'est un échec critique !**`);
        Embed.setThumbnail("https://imgur.com/PcfYS4F.png");
      } else {
        Embed.setThumbnail("https://imgur.com/xwPGayr.png");
      }
    } else {
      Embed.addField(`Difficulté du jet : ${args[1]}`, `**${roll}** / 100. Il fallait faire **${stat * level}** / 100, c'est donc réussit !`);
      if (roll == 1) {
        Embed.addField(`\u200B`, `**C'est une réussite critique !**`);
        Embed.setThumbnail("https://imgur.com/UjtA1Zj.png");
      } else {
        Embed.setThumbnail("https://imgur.com/YHXc4Us.png");
      }
    }
    message.channel.send(Embed);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function sanity() {
    const data = await client.getFiche(message);
    if (data == -1) return message.channel.send("Pour pouvoir faire cette commande il faut que vous ayez une fiche personnage.");
    const roll = Math.floor(Math.random() * 100 + 1);
    var Embed = new Discord.MessageEmbed();
    if (roll == 1) {
      Embed.addField(`\u200B`, `C'est une réussite critique !`).setColor("#43b581");
    } else if (roll == 100) {
      Embed.addField(`\u200B`, `C'est un échec critique !`).setColor("#f04747");
    } else {
      Embed.setColor("#0099ff");
    }
    Embed.setTitle("**ÆRobot** - __Lancé de dé de fiche personnage__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
      .setDescription(`${data.Nom} lance un dé de **santé mentale** !`)
      .setImage("https://imgur.com/lsWZjoW.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    var stat = data.SanityPoint;
    if (roll > stat) {
      Embed.addField(`Jet de **santé mentale** :`, `**${roll}** / 100. Il fallait faire **${stat}** / 100, c'est donc un échec.`);
      if (roll == 100) {
        Embed.addField(`\u200B`, `C'est un échec critique !`);
        Embed.setThumbnail("https://imgur.com/PcfYS4F.png");
      } else {
        Embed.setThumbnail("https://imgur.com/xwPGayr.png");
      }
    } else {
      Embed.addField(`Jet de **santé mentale** :`, `**${roll}** / 100. Il fallait faire **${stat}** / 100, c'est donc réussit !`);
      if (roll == 1) {
        Embed.addField(`\u200B`, `C'est une réussite critique !`);
        Embed.setThumbnail("https://imgur.com/UjtA1Zj.png");
      } else {
        Embed.setThumbnail("https://imgur.com/YHXc4Us.png");
      }
    }
    message.channel.send(Embed);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function standard() {
    var total = 0;
    const commande = args[0].split("d");
    if (isNaN(commande[0]) || isNaN(commande[1])) return message.channel.send("Vous ne devenez entrer que des nombres dans cette commande.");
    if (commande[0] > 24) {
      const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Lancé de dé__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setThumbnail("https://imgur.com/VKHPSVi.png")
        .setImage("https://imgur.com/lsWZjoW.png")
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
      for (let i = 0; i < commande[0]; i++) {
        var roll = new Array(commande[0]);
        roll[i] = Math.floor(Math.random() * commande[1] + 1);
        total = total + roll[i];
      }
      if (args[1] == undefined) {
        Embed.setDescription("Lancé de " + commande[0] + " dé(s) de " + commande[1] + " faces.");
        Embed.addFields({
          name: "__**Total des dés jetés**__ :",
          value: `${total} / ${commande[0] * commande[1]}`,
        });
      } else {
        const add = args[1].split("+");
        Embed.setDescription("Lancé de " + commande[0] + " dé(s) de " + commande[1] + " faces + " + add[1] + ".");
        Embed.addFields({
          name: "__**Total des dés jetés**__ :",
          value: `${total + parseInt(add[1])} / ${commande[0] * commande[1] + parseInt(add[1])}`,
        });
      }
      message.channel.send(Embed);
    } else {
      const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Lancé de dé__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setThumbnail("https://imgur.com/VKHPSVi.png")
        .setImage("https://imgur.com/lsWZjoW.png")
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
      for (let i = 0; i < commande[0]; i++) {
        roll = new Array(commande[0]);
        roll[i] = Math.floor(Math.random() * commande[1] + 1);
        total = total + roll[i];
        Embed.addFields({
          name: `Tirage du dé ${i + 1}`,
          value: `${roll[i]} / ${commande[1]}`,
          inline: true,
        });
      }
      if (args[1] == undefined) {
        Embed.setDescription("Lancé de " + commande[0] + " dé(s) de " + commande[1] + " faces.");
        Embed.addFields({
          name: "__**Total des dés jetés**__ :",
          value: `${total} / ${commande[0] * commande[1]}`,
        });
      } else {
        const add = args[1].split("+");
        Embed.setDescription("Lancé de " + commande[0] + " dé(s) de " + commande[1] + " faces + " + add[1] + ".");
        Embed.addFields({
          name: "__**Total des dés jetés**__ :",
          value: `${total + parseInt(add[1])} / ${commande[0] * commande[1] + parseInt(add[1])}`,
        });
      }
      message.channel.send(Embed);
    }
  }
};
