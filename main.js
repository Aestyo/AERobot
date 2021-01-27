  /*
   *  ÆRobot : A Discord bot with killing purposes
   *
   *  Arborescence :
   *    /bin : Commandes et évenements essentiels disponible pour le client
   *    /etc : Fichiers de configuration au format textuel
   *    /lib : Blibliothèques essentielles au client
   *    /media : Fichiers d'images utilisés par le bot
   * 
  */


// Initialisation du C.L.E.M : Chargement - Login - Éléments - Mongoose

// Étape 1 : Chargement du bot 
const { Client, Collection, Message } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'], messageCacheMaxSize: 10000});
const token = require("./etc/tokens.js");
const mongoose = require("mongoose");
const fs = require("fs");
require("./lib/time")(client);
require("./lib/logs")(client);
client.log(`--------------------   Démarrage de GLAD Operating System en cours...   --------------------`, "main");

// Étape 2 : Login des APIs
client.login(token.discord);

// Étape 3 : Éléments du bot

// Chargement des évènements.
var binEvents = ["./bin/events/default"];
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
    client.log(`${nbEvents} évènements ont été chargés dans ${folder}`, "main");
  });
})

// Chargement des commandes.
var binCommands = ["./bin/commands/default", "./bin/commands/admin"];
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
    client.log(`${nbCommands} commandes ont été chargés dans ${folder}`, "main");
  });
})

// Étape 4 : Mongoose
const { dbconnection } = require("./etc/tokens");
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
mongoose.connection.on("connected", () => client.log(`Connexion à la base de donnée établie`, "main"));
mongoose.connection.on("disconnected", () => client.log(`Connexion à la base de donnée perdue`, "main", 1));