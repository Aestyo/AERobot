module.exports.run = async (client, message, args) => {
  client.player.on('trackStart', (message, track) =>
    message.channel.send(`En cours de lecture : ${track.title}...`)
  );
  if (client.player.isPlaying(message.guild.id)) {
    client.player.addToQueue(message, args.join(' '), true);
  }
  client.player.play(message, args.join(' '), true);
};
