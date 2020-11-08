const Discord = require("discord.js");

module.exports = (client) => {
  //////////////////////////////////////////////////
  client.createGame = async (client, message, args) => {
  const data = await client.getWerewolf(message);

  let NbPlayers;
  let NbPlayersSelector = await message.channel.send("Nombre de joueurs : ");
  NbPlayersSelector
    .react("5️⃣")
    .then(() => NbPlayersSelector.react("6️⃣"))
    .then(() => NbPlayersSelector.react("7️⃣"))
    .then(() => NbPlayersSelector.react("8️⃣"))
    .then(() => NbPlayersSelector.react("9️⃣"))
    .then(() => NbPlayersSelector.react("🔟"));

  const filter = (reaction, user) => {
    return ["5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"].includes(reaction.emoji.name) && user.id === message.author.id;
  };

  NbPlayersSelector
    .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first(); 
      if (reaction.emoji.name === "5️⃣") {
        NbPlayers = 5;
        NbPlayersSelector.edit(`Nombre de joueurs : 5`);
      } else if (reaction.emoji.name === "6️⃣") {
        NbPlayers = 6;
        NbPlayersSelector.edit(`Nombre de joueurs : 6`);
      } else if (reaction.emoji.name === "7️⃣") {
        NbPlayers = 7;
        NbPlayersSelector.edit(`Nombre de joueurs : 7`);
      } else if (reaction.emoji.name === "8️⃣") {
        NbPlayers = 8;
        NbPlayersSelector.edit(`Nombre de joueurs : 8`);
      } else if (reaction.emoji.name === "9️⃣") {
        NbPlayers = 9;
        NbPlayersSelector.edit(`Nombre de joueurs : 9`);
      } else if (reaction.emoji.name === "🔟") {
        NbPlayers = 10;
        NbPlayersSelector.edit(`Nombre de joueurs : 10`);
      }
    })
    .catch((collected) => {
      message.reply("Vous n'avez pas séléctionner quel rôle vous vouliez ajouter à votre partie.");
    });



  }
  //////////////////////////////////////////////////
  client.quickcreateGame = async (client, message, args) => {
    const data = await client.getWerewolf(message);
    args.shift();
    let settings = [];
    for(let i = 0; i < args.length; i++){
      settings.push(args[i].split(":"));
    }
    for(let i = 0; i < settings.length; i++){
      switch (settings[i][0]) {
        case "players":{
          NbPlayers = settings[i][1];
          break;
        }
        case "wolfs":{
          NbWolfs = settings[i][1];
          break;
        }
        case "wolf":{
          NbWolfs = settings[i][1];
          break;
        }
        case "hunters":{
          NbHunters = settings[i][1];
          break;
        }
        case "hunter":{
          NbHunters = settings[i][1];
          break;
        }
        case "witch":{
          NbWitches = settings[i][1];
          break;
        }
        case "witches":{
          NbWitches = settings[i][1];
          break;
        }
        default :{
          message.channel.send(`Attention ! "${settings[i][0]}" n'est pas un paramètre valide, la partie n'a pas été créée.`);
        }
      }
    }
    
  }
};
