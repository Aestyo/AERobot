// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  const config = require('../../../etc/configuration');
  if (message.author.bot) return;

  if (message.guild == null) {
    let messageAttachment =
      message.attachments.size > 0 ? message.attachments.array()[0].url : '';
    client.log(
      `[DMChannel/${message.author.tag}] : ${message.content} ${messageAttachment}`,
      'logs'
    );
    if (
      message.content.startsWith(`${config.prefix}report`) ||
      message.content.startsWith(`${config.prefix}help`)
    ) {
    } else if (message.content.startsWith(config.prefix)) {
      message.reply(
        'La commande que vous avez enter est invalide, faites "&help"'
      );
      return;
    } else {
      message.author.send('Tu sais que ça sert à rien de me raconter ta vie.');
    }
  } else {
    let messageAttachment =
      message.attachments.size > 0 ? message.attachments.array()[0].url : '';
    client.log(
      `[${message.guild.name}/${message.channel.name}/${message.author.tag}] : ${message.content} ${messageAttachment}`,
      'logs'
    );
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
    cmd.run(client, message, args);
    return;
  }
};
