// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.guild == null) return;

  var prefix = "/";
  if (message.content.startsWith(prefix)) {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [mess/INFO]: ${message.author.tag} a émit une commande sur le serveur ${message.guild.name} : ${message.content}`);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send('La commande que vous avez enter est invalide, faites "/help" pour reçevoir la liste des commandes en message privé.');
      return;
    }
    cmd.run(client, message, args);
    return;
  }
};
