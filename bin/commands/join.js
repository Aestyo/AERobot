const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel
      .join()
      .then(connection => {
        console.log(
          `INFO : Connecté à ${message.member.voice.channel} ${message.member.voice.channel.name}`
        );
        if (
          message.author.id == `293802580918665216` ||
          message.author.id == `670697151235620886`
        ) {
          message.channel.send(
            `je Me CoNnEcTe DaNs Le ChAnNeL ${message.member.voice.channel.name}`
          );
        } else {
          message.channel.send(
            `Je me connecte dans le channel ${message.member.voice.channel.name}`
          );
        }
        connection.play(
          `C:/Users/Mathis Sauvage/Desktop/ÆRobot-old/Soundbox/Connexion.mp3`,
          { volume: 0.5 }
        );
      });
  } else {
    message.reply("You need to join a voice channel first!");
  }
};

module.exports.help = {
  name: "viens"
};
