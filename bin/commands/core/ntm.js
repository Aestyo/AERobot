const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join().then((connection) => {
      console.log(`INFO : Connecté à ${message.member.voice.channel} ${message.member.voice.channel.name}`);
      connection.play(`E:/Utilisateurs/Mathis/Music/Soundbox/Meme n°1/ntm.mp3`, { volume: 0.6 });
      setTimeout(déconnexion, 1000);
      function déconnexion() {
        if (message.member.voice.channel.name) {
          const connection = message.member.voice.channel.leave();
        }
      }
    });
  } else {
    message.reply(`Tu as besoin d'être dans un channel vocal pour niquer des mères !`);
  }
};

module.exports.help = {
  name: "ntm",
};
