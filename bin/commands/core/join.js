const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [command/INFO]: Connecté en vocal à : "${message.member.voice.channel.name}" sur le serveur  "${message.guild.name}"`);
    connection.play(`../../../data/sounds/join.mp3`, {volume: 0.5,});
  } else {
    message.reply("Tu dois d'abord être dans un channel vocal pour ça.");
  }
};
