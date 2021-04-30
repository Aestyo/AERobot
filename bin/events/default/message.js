// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  const config = require('../../../etc/configuration');
  if (message.author.bot) return;

  if (message.guild == null) {
    if (
      message.content.startsWith(`${config.prefix}report`) ||
      message.content.startsWith(`${config.prefix}help`)
    ) {
      client.log(
        `${message.author.tag} a émit une commande en message privé : ${message.content}`,
        'mess'
      );
    } else if (message.content.startsWith(config.prefix)) {
      message.reply(
        'La commande que vous avez enter est invalide, faites "&help"'
      );
      return;
    } else {
      message.author.send('Tu sais que ça sert à rien de me raconter ta vie.');
    }
  } else {
  }

  if (message.content.startsWith(config.prefix)) {
    const args = message.content
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const commande = args.shift().toLowerCase();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send(
        `La commande que vous avez enter est invalide, faites "${config.prefix}help" pour reçevoir la liste des commandes en message privé.`
      );
      return;
    }
    client.log(
      `${message.author.tag} a émit une commande sur le serveur ${message.guild.name} : ${message.content}`,
      'mess'
    );
    cmd.run(client, message, args);
    return;
  } else if (message.content.startsWith(config.altprefix)) {
    const args = message.content
      .slice(config.altprefix.length)
      .trim()
      .split(/ +/g);
    const commande = args.shift().toLowerCase();
    const cmd = client.altcommands.get(commande);
    if (!cmd) {
      message.channel.send(
        `La commande que vous avez enter est invalide, faites "${config.prefix}help" pour reçevoir la liste des commandes en message privé.`
      );
      return;
    }
    client.log(
      `${message.author.tag} a émit une commande alternative sur le serveur ${message.guild.name} : ${message.content}`,
      'mess'
    );
    cmd.run(client, message, args);
    return;
  } else {
    client.log(
      `${message.author.tag} a envoyé un message sur le serveur ${message.guild.name} : ${message.content}`,
      'mess'
    );
  }
};
