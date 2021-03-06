module.exports.run = async (client, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send("Vous n'avez pas la permission de supprimer des messages!");
  }
  if (!args[0]) {
    return message.channel.send("Vous devez spécifier un nombre de messages à supprimer !");
  } else if (isNaN(args[0])) {
    return message.channel.send("Il faut spécifier un nombre espèce de trisomique.");
  } else if (args[0] > 1000) {
    return message.channel.send("Vous ne pouvez pas supprimer plus de 1000 messages à la fois.");
  }
  let answer;
  message.channel
    .bulkDelete(Number(args[0]))
    .then(async(messages) => answer = await message.channel.send(`**${messages.size}** messages ont été supprimés !`))
    .catch(console.error);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  answer.delete().catch(console.error);
};
