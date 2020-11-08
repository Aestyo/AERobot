const Discord = require("discord.js");
const ytdl = require("ytdl-core");

function Play(connection, message) {
  var server = servers[message.guild.id];
  server.dipatcher = connection.playStream(ytdl(server.queue[0], { filter: "audioonly" }));
  server.queue.shift();
  server.dipatcher.on("end", function () {
    if (server.queue[0]) {
      Play(connection, message);
    } else {
      connection.disconnect();
    }
  });
}

module.exports.run = async (bot, message, args) => {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join().then((connection) => {
      console.log(`INFO : Connecté à ${message.member.voice.channel} ${message.member.voice.channel.name}`);
      if (message.author.id == `293802580918665216` || message.author.id == `670697151235620886`) {
        message.channel.send(`je Me CoNnEcTe DaNs Le ChAnNeL ${message.member.voice.channel.name}`);
      } else {
        message.channel.send(`Je me connecte dans le channel ${message.member.voice.channel.name}`);
      }
      connection.play(`D:/DÃ©veloppement/Ã†Robot/data/sounds/connection.mp3`, {
        volume: 0.5,
      });
      if (!servers[message.guild.id]) {
        servers[message.guild.id] = { queue: [] };
      }
      server = servers[message.guild.id];
      server.queue.push(args);
      Play(connection, message);
    });
  } else {
    message.reply("Tu dois d'abord être dans un channel vocal pour ça.");
  }
};

module.exports.help = {
  name: "viens",
};
