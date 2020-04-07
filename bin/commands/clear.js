const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send(
      "Vous n'avez pas la permission de supprimer des messages!"
    );
  }
  if (!args[0]) {
    return message.channel.send(
      "Vous devez spécifier un nombre de messages à supprimer !"
    );
  } else if (isNaN(args[0])) {
    return message.channel.send("Il faut spécifier un nombre !");
  } else if (args[0] > 100) {
    return message.channel.send(
      "Vous ne pouvez pas supprimer plus de 100 messages à la fois."
    );
  }

  message.channel.bulkDelete(args[0]).then((messages) => {
    message.channel.send(`**${messages.size}** messages ont été supprimés !`);
    setTimeout(() => {}, 2000);
  });
};

module.exports.help = {
  name: "clear",
};
