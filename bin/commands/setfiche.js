const Discord = require("discord.js");
const mongoose = require("mongoose");
const { Fiche } = require("../../models/index");

module.exports.run = async (client, message, args) => {
  const data = await client.getFiche(message);
  const getData = args[0];
  let newData = args.slice(1).join(" ");
  if (
    args[0] == "force" ||
    args[0] == "constitution" ||
    args[0] == "dextérité" ||
    args[0] == "apparence" ||
    args[0] == "intelligence" ||
    args[0] == "volonté" ||
    args[0] == "éducation"
  ) {
    var Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Fiche personnage__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La caractéristique **${args[0]}** de ${data.Nom} est maintenant de **${newData}**`
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/690260695186800641/697123503442362458/sheet.png"
      )
      .setTimestamp()
      .setFooter(
        "Powered by Æstyo Corp.",
        "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
      );
  }
  switch (getData) {
    case "force": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Force: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "constitution": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Constitution: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "dextérité": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Dextérité: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "apparence": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Apparence: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "intelligence": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Intelligence: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "volonté": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Volonté: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "éducation": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Éducation: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "hp": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { HealthPoint: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "sp": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { SanityPoint: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "age": {
      if (isNaN(newData))
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      if (newData) {
        await client.updateFiche(message, { Age: newData });
        return message.channel.send(Embed);
      }
      break;
    }
    case "genre": {
      if (isNaN(newData)) {
        await client.updateFiche(message, { Sexe: newData });
        var Embed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(`${data.Nom} est maintenant de genre **${newData}**`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697123503442362458/sheet.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        return message.channel.send(Embed);
      } else
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer n'est pas NaN."
        );
      break;
    }
    case "métier": {
      if (isNaN(newData)) {
        await client.updateFiche(message, { Métier: newData });
        return message.channel.send(Embed);
      } else
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer n'est pas NaN."
        );
      break;
    }
    case "occupation": {
      if (isNaN(newData)) {
        await client.updateFiche(message, { Occupation: newData });
        return message.channel.send(Embed);
      } else
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer n'est pas NaN."
        );
      break;
    }
    case "heal": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        var Embed = new Discord.MessageEmbed()
          .setColor("#36e05c")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} s'est soigné de **${newData}** points de vie !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.HP + newData;
        await client.updateFiche(message, { HP: newData });
        message.channel.send(Embed);
      }
      break;
    }
    case "damage": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        var Embed = new Discord.MessageEmbed()
          .setColor("#ff2929")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} a prit **${newData}** points de dégâts !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.HP - newData;
        await client.updateFiche(message, { HP: newData });
        message.channel.send(Embed);
      }
      break;
    }
    case "sanity": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        var Embed = new Discord.MessageEmbed()
          .setColor("#790991")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} a perdu **${newData}** points de santé mentale !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.SP - newData;
        await client.updateFiche(message, { SP: newData });
        message.channel.send(Embed);
      }
      break;
    }
    case "cure": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        var Embed = new Discord.MessageEmbed()
          .setColor("#ffba20")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} a gagné **${newData}** points de santé mentale !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.SP + newData;
        await client.updateFiche(message, { SP: newData });
        message.channel.send(Embed);
      }
      break;
    }
    case "vous-devienne-folle": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        var Embed = new Discord.MessageEmbed()
          .setColor("#790991")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(`Vous devienne folle de **${newData}** points !`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.SP - newData;
        await client.updateFiche(message, { SP: newData });
        message.channel.send(Embed);
      }
      break;
    }
    case "vous-gardez-calme": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        var Embed = new Discord.MessageEmbed()
          .setColor("#ffba20")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(`Vous gardez calme de **${newData}** points !`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.SP + newData;
        await client.updateFiche(message, { SP: newData });
        message.channel.send(Embed);
      }
      break;
    }
    case "folie": {
      if (isNaN(newData)) {
        await client.updateFiche(message, { Sexe: newData });
        var Embed = new Discord.MessageEmbed()
          .setColor("#790991")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} a maintenant comme folie : **${newData}** !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697845946477838376/fight.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        return message.channel.send(Embed);
      } else
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer n'est pas NaN."
        );
    }
    case "additem": {
      if (isNaN(newData)) {
        var Embed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} a rangé **${newData}** dans son inventaire !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697918474873339914/inventory.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        newData = data.Inventaire + "§" + newData;
        await client.updateFiche(message, { Inventaire: newData });
        return message.channel.send(Embed);
      } else
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer n'est pas NaN."
        );
    }
    case "remitem": {
      if (isNaN(newData)) {
        return message.channel.send(
          "La valeur que vous souhaitez d'entrer est NaN."
        );
      } else {
        if (data.Inventaire == "") {
          return message.channel.send(
            "Vous n'avez rien dans votre inventaire."
          );
        }
        const inventaire = data.Inventaire.split("§");
        var Embed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("**ÆRobot** - __Fiche personnage__")
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`
          )
          .setDescription(
            `${data.Nom} n'a plus **${inventaire[newData]}** dans son inventaire !`
          )
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/690260695186800641/697918474873339914/inventory.png"
          )
          .setTimestamp()
          .setFooter(
            "Powered by Æstyo Corp.",
            "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
          );
        console.log(inventaire);
        newData = inventaire.slice(newData);
        newData = inventaire.join("§");
        await client.updateFiche(message, { Inventaire: newData });
        return message.channel.send(Embed);
      }
    }
  }
};

module.exports.help = {
  name: "setfiche",
};
