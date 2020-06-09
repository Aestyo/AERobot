// Amorçage des modules nécessaires
console.info("INFO: Démarrage de GLAD Operating System en cours...");
const { Client, Collection } = require("discord.js");
const PastebinAPI = require("pastebin-js");
const fs = require("fs");
const client = new Client();
const config = require("./config");
require("./utils/functions")(client);
require("./utils/werewolf-functions")(client);
client.mongoose = require("./utils/mongoose");

// Chargement des évènements.
fs.readdir("./bin/events", (error, files) => {
  if (error) return console.info(error);
  let nbEvents = 0;
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    nbEvents = nbEvents + 1;
    const event = require(`./bin/events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
  console.info(`INFO: ${nbEvents} évènements ont été chargés.`);
});

// Chargement des commandes de base.
client.commands = new Collection();
fs.readdir("./bin/commands", (error, files) => {
  let nbCommands = 0;
  if (error) return console.info(error);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    nbCommands = nbCommands + 1;
    const args = require(`./bin/commands/${file}`);
    const commandName = file.split(".")[0];
    client.commands.set(commandName, args);
  });
  console.info(`INFO: ${nbCommands} commandes ont été chargés.`);
});

// Connexion du bot aux APIs
pastebin = new PastebinAPI({
  api_dev_key: config.api_dev_key,
  api_user_name: config.api_user_name,
  api_user_password: config.api_user_password,
});
client.login(config.token);
client.mongoose.init();

global.servers = {};

// Commande complète : args.join(" ");

/*client.on("typingStart", function (channel, client) {
  if (client.tag != "Æstyo#8738") {
    channel.send(`<@${client.id}> tu fermes ta gueule !`);
  }
});

client.on("messageReactionAdd", function (messageReaction, user) {
  console.info(`a reaction is added to a message`);
});*/
