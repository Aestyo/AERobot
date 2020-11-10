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

module.exports.run = async (message) => {
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join().then((connection) => {
      console.log(`INFO : Connecté à ${message.member.voice.channel} ${message.member.voice.channel.name}`);
      connection.play(`../../../data/sounds/connection.mp3`, {volume: 0.5,});
      /*if (!servers[message.guild.id]) {
        servers[message.guild.id] = { queue: [] };
      }
      server = servers[message.guild.id];
      server.queue.push(args);
      Play(connection, message);*/
    });
  } else {
    message.reply("Tu dois d'abord être dans un channel vocal pour ça.");
  }
};
