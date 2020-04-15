// Amorçage des modules nécessaires
console.log("INFO: Démarrage de GLAD Operating System en cours...");
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const client = new Client();
const config = require("./config");
require("./utils/functions")(client);
client.mongoose = require("./utils/mongoose");

// Chargement des évènements.
fs.readdir("./bin/events", (error, files) => {
  if (error) return console.log(error);
  let nbEvents = 0;
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    nbEvents = nbEvents + 1;
    const event = require(`./bin/events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
  console.log(`INFO: ${nbEvents} évènements ont été chargés.`);
});

// Chargement des commandes de base.
client.commands = new Collection();
fs.readdir("./bin/commands", (error, files) => {
  let nbCommands = 0;
  if (error) return console.log(error);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    nbCommands = nbCommands + 1;
    const args = require(`./bin/commands/${file}`);
    const commandName = file.split(".")[0];
    client.commands.set(commandName, args);
  });
  console.log(`INFO: ${nbCommands} commandes ont été chargés.`);
});

// Connexion du bot aux serveurs de Discord
client.login(config.token);
client.mongoose.init();

// Commande complète : args.join(" ");

/*client.on("typingStart", function (channel, client) {
  if (client.tag != "Æstyo#8738") {
    channel.send(`<@${client.id}> tu fermes ta gueule !`);
  }
});*/

client.on("messageReactionAdd", function (messageReaction, user) {
  console.log(`a reaction is added to a message`);
});
