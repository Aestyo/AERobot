const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send("Vous n'avez pas la permission de supprimer des messages!");
  }
  if (!args[0]) {
    return message.channel.send("Vous devez spécifier un nombre de messages à supprimer !");
  } else if (isNaN(args[0])) {
    return message.channel.send("Il faut spécifier un nombre !");
  } else if (args[0] > 100) {
    return message.channel.send("Vous ne pouvez pas supprimer plus de 100 messages à la fois.");
  }
  copy = message;
  message.channel.bulkDelete(args[0] + 1);
  answer = await copy.channel.send(`**${args[0]}** messages ont été supprimés !`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  answer.delete();
};

module.exports.help = {
  name: "clear",
};
