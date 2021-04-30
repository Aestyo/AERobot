module.exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  if (args[0]) {
    const user = getUserFromMention(args[0]);
    if (!user) {
      return message.reply(
        "La personne que vous avez mentionnée n'existe pas."
      );
    }

    return message.channel.send(
      `Avatar de : ${user.username} \n${user.displayAvatarURL({
        dynamic: true,
      })}`
    );
  }

  return message.channel.send(
    `Avatar de : ${user.username} \n${message.author.displayAvatarURL({
      dynamic: true,
    })}`
  );

  function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith("<@") && mention.endsWith(">")) {
      mention = mention.slice(2, -1);

      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }

      return client.users.cache.get(mention);
    }
  }
};
