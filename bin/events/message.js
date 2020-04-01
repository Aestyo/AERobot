// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  const config = require("../../config.json");
  if (message.author.bot) return;
  if (message.author.id == config.bannedID) return;
  if (message.author.id == config.cookieID) message.react("🍪");

  if (message.content.startsWith(config.prefix)) {
    console.log(
      `INFO: Le bot a reçu une commande de ${message.author.tag}: `,
      message.content
    );
    const args = message.content
      .toLowerCase()
      .slice(config.prefix.length)
      .trim()
      .split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send("Vous devez entrer une commande.");
      console.log(`WARN: ${message.author.tag} n'a pas tapé de commande.`);
      return;
    }
    cmd.run(client, message, args);
  }

  if (message.content.startsWith(config.prefix2)) {
    console.log(
      `INFO: Le bot a reçu une commande de ${message.author.tag}: `,
      message.content
    );
    const args = message.content
      .toLowerCase()
      .slice(config.prefix2.length)
      .trim()
      .split(/ +/g);
    const commande = args.shift();
    const cmd = client.commandsjdr.get(commande);
    if (!cmd) {
      message.channel.send("Vous devez entrer une commande.");
      console.log(`WARN: ${message.author.tag} n'a pas tapé de commande.`);
      return;
    }
    cmd.run(client, message, args);
  }
};
