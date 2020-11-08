const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var argument = args[0].toLowerCase();
  if (!args[0]) {
    return message.channel.send(
      `Il faut me demander une image en particulier.`
    );
  }
  if (argument == `les-affaires`) {
    message.channel.send(`*Les affaires sont les affaires...*`);
    message.channel.send(
      `https://cdn.discordapp.com/attachments/690260695186800641/691644951402119228/Les_affaires.jpg`
    );
  } else {
    return message.channel.send(
      `La chanson : ${args[0]} n'est pas dans mon répertoire.`
    );
  }
};

module.exports.help = {
  name: "image",
};
