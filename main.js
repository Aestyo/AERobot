// Amorçage des modules nécessaires
console.info("INFO: Démarrage de GLAD Operating System en cours...");
const { Client, Collection } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const PastebinAPI = require("pastebin-js");
const fs = require("fs");
const token = require("./config/tokens.js");
require("./utils/functions")(client);
require("./utils/functions_werewolf")(client);
client.mongoose = require("./utils/mongoose");

var binEvents = ["./bin/events/core"];
var binCommands = ["./bin/commands/core", "./bin/commands/games", "./bin/commands/roleplay", "./bin/commands/images"];

// Chargement des évènements.
binEvents.forEach((folder) =>{
  fs.readdir(folder, (error, files) => {
    if (error) return console.info(error);
    let nbEvents = 0;
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      nbEvents++;
      const event = require(`${folder}/${file}`);
      const eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
    console.info(`INFO: ${nbEvents} évènements ont été chargés dans "${folder}".`);
  });
})

// Chargement des commandes.
client.commands = new Collection();
binCommands.forEach((folder) =>{
  fs.readdir(folder, (error, files) => {
    let nbCommands = 0;
    if (error) return console.info(error);
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      nbCommands++;
      const args = require(`${folder}/${file}`);
      const commandName = file.split(".")[0];
      client.commands.set(commandName, args);
    });
    console.info(`INFO: ${nbCommands} commandes ont été chargés dans "${folder}".`);
  });
})

// Connexion du bot aux APIs
pastebin = new PastebinAPI({
  api_dev_key: token.pastebin_dev_key,
  api_user_name: token.pastebin_user_name,
  api_user_password: token.pastebin_user_password,
});
client.login(token.discord);
client.mongoose.init();

global.servers = {};