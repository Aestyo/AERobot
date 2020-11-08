const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const connection = await message.member.voice.channel.join().then((connection) => {
    connection.play(`D:/Développement/ÆRobot/data/sounds/disconnection.mp3`, {
      volume: 0.6,
    });
    setTimeout(déconnexion, 2500);
    function déconnexion() {
      if (message.member.voice.channel.id) {
        message.channel.send(`Je me suis déconnecté du channel ${message.member.voice.channel.name}`);
        console.log(`INFO : Déconnecté de ${message.member.voice.channel.name}`);
        const connection = message.member.voice.channel.leave();
      }
    }
  });
};

module.exports.help = {
  name: "dégage",
};
