// Amorçage du Client Discord
console.info("[00:00:00] [main/BOOT]: Démarrage de GLAD Operating System en cours...");
const { Client, Collection } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const token = require("./config/tokens.js");
const ltd = require('./utils/logsToDiscord');
require("./utils/time")(client);
console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: Client initialisé`);

// Amorçage des APIs et binds
const PastebinAPI = require("pastebin-ts");
const fs = require("fs");
const mongoose = require("mongoose");
console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: APIs initialisée(s)`);
require("./utils/functions")(client);
require("./utils/functions_werewolf")(client);
console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: Utils initialisée(s)`);

// Chargement des évènements.
var binEvents = ["./bin/events/core", "./bin/events/log"];
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
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: ${nbEvents} évènements ont été chargés dans ${folder}`);
  });
})

// Chargement des commandes.
var binCommands = ["./bin/commands/core", "./bin/commands/games", "./bin/commands/roleplay", "./bin/commands/images"];
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
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: ${nbCommands} évènements ont été chargés dans ${folder}`);
  });
})

// Connexion du bot aux APIs

client.login(token.discord);
//ltd.logs(client, `[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: Le bot a démarré correctement.`);

pastebin = new PastebinAPI({
  api_dev_key: token.pastebin_dev_key,
  api_user_name: token.pastebin_user_name,
  api_user_password: token.pastebin_user_password,
});
console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: API de PasteBin connectée`);

// Connexion à la base de donnée
const { dbconnection } = require("../AERobot/config/core");
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
mongoose.connect(dbconnection, mongoOptions);
mongoose.connection.on("connected", () => console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/INFO]: Connexion à la base de donnée établie`));
mongoose.connection.on("disconnected", () => console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [main/ALERT]: Connexion à la base de donnée perdue`));