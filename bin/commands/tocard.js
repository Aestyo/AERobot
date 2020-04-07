const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  message.channel.send(`C'est toi le tocard.`);
};

module.exports.help = {
  name: `tocard`,
};
