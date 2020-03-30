// Amorçage des modules nécessaires
const { Client } = require("discord.js");
const client = new Client();
const config = require("./config.json");

// Évènement : Démarrage du bot terminé
client.on("ready", () => {
  console.log(`INFO: Bot connecté en tant que ${client.user.tag}`);
});

// Évènement : Récéption d'un message par le bot
client.on("message", message => {
  if (message.author.bot) return;
  if (message.author.id == config.cookieID) {
    message.react("🍪");
  }
  if (message.content.startsWith(config.prefix)) {
    const args = message.content.split("/ +g");
    const cmd = args.shift().toLowerCase;

    if (cmd == "dis") {
      message.channel.send(args.join(" "));
      message.channel.delete;
    }
  }
});

// Connexion du bot aux serveurs de Discord
client.login(config.token);

// Commande complète : args.join(" ");
