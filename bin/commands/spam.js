const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(
      "Vous n'avez pas la permission de spammer ce salon!"
    );
  }
  if (!args[0]) {
    return message.channel.send(
      "Vous devez spécifier un nombre de messages à envoyer !"
    );
  } else if (isNaN(args[0])) {
    return message.channel.send("Il faut spécifier un nombre !");
  }
  message.channel.send("ça va spammer sec.");
  for (i = 0; i < args[0]; i++) {
    message.channel.send(`Allez ça spam!`);
  }
};

module.exports.help = {
  name: "spam",
};
