// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  const config = require("../../config");
  if (message.author.bot) return;
  if (message.author.id == config.cookieID) message.react("🍪");

  if (message.guild == null) {
    if (message.content.startsWith(config.prefix)) {
      console.log(`COMM: \"${message.author.tag}\" a émit une commande en message privé : ${message.content}`);
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const commande = args.shift();
      const cmd = client.commands.get(commande);
      if (!cmd) {
        message.channel.send('La commande que vous avez enter est invalide, faites "/help" pour reçevoir la liste des commandes en message privé.');
        return;
      }
      cmd.run(client, message, args);
      return;
    } else {
      console.log(`INFO: Le bot a reçu une commande en DM de ${message.author.tag} : ${message.content}`);
    }
  }

  if (message.content.startsWith(config.prefix)) {
    console.log(`COMM: \"${message.author.tag}\" a émit une commande sur le serveur \"${message.guild.name}\" : ${message.content}`);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send('La commande que vous avez enter est invalide, faites "/help" pour reçevoir la liste des commandes en message privé.');
      return;
    }
    cmd.run(client, message, args);
    return;
  }

  if (message.content.startsWith(config.prefix2)) {
    console.log(`COMM: \"${message.author.tag}\" a émit une commande : ${message.content}`);
    const args = message.content.slice(config.prefix2.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send('La commande que vous avez enter est invalide, faites "/aide" pour reçevoir la liste des commandes en message privé.');
      return;
    }
    cmd.run(client, message, args);
    return;
  }
};
