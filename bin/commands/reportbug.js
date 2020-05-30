module.exports.run = async (client, message, args) => {
  const config = require("../../config");
  owner = client.users.cache.get(config.ownerID);
  owner.send(`**${message.author.tag}** a reporté un bug à **${message.createdAt}** dans le channel **${message.channel.name}** du serveur **${message.guild.name}** : \n\`\`\`${args.join(" ")}\`\`\``);
  message.reply("Le bug à été envoyé à " + owner.tag);
};
