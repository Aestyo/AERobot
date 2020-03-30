// Amorçage des modules nécessaires
const { Client } = require("discord.js");
const client = new Client();

// Évènement : Démarrage du bot terminé
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Évènement : Récéption d'un message par le bot
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

// Connexion du bot aux serveurs de Discord
const { token } = require("./config.json");
client.login(token);
