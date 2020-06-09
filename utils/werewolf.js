//################################ Création de la partie ################################
module.exports.createGame = function (client, message, args) {
  // Création du buffer des joueurs dans le lobby
  var lobbyBuffer = [];
  const lobbyPlayer = { id: "defaultID", name: "defaultName" };

  for (let i = 0; i < args[1]; i++) {
    lobbyBuffer.push(lobbyPlayer);
  }

  // Création du buffer des rôles préfaits de la partie
  var premadeRolesBuffer = [];
  switch (args[1]) {
    case "5": {
      premadeRolesBuffer = [":wolf: Loup-garou", ":wolf: Loup-garou", ":test_tube: Sorcière", ":dart: Chasseur", ":ear_of_rice: Villageois"];
      break;
    }
    default: {
      premadeRolesBuffer = [":ear_of_rice: Villageois"];
      break;
    }
  }
  // Création du buffer des rôles custom de la partie
  var customRolesBuffer = [];
  /*for(let i; i < args[1]; i++){

    }*/
  customRolesBuffer.push("Base role");

  // Création du buffer des joueurs qui seront dans la partie
  const playingBuffer = [];
  const playingPlayer = {
    id: "defaultID",
    name: "defaultName",
    role: "defaultRole",
    side: "defaultSide",
    isVoted: 0,
    hasVoted: true,
    alive: true,
  };
  for (let i = 0; i < args[1]; i++) {
    playingBuffer.push(playingPlayer);
  }
  if (args[2] == undefined) args[2] = true;
  // Création de la partie
  const newGame = {
    lobby: lobbyBuffer,
    premadeRoles: premadeRolesBuffer,
    customRoles: [],
    playing: playingBuffer,
    id: Math.random().toString(16).slice(2, 8),
    channelID: message.channel.id,
    channelName: message.channel.name,
    guildID: message.guild.id,
    guildName: message.guild.name,
    maxPlayers: args[1],
    customRole: args[2],
    phase: "starting",
    log: `[ Création de la partie par ${message.author.tag} ]\nGuild : ${message.guild.name}\nChannel : ${message.channel.name}`,
  };
  client.createWerewolf(newGame);
};

//######################## Commande pour ajouter un joueur au Lobby ############################
module.exports.addToLobby = async function (client, i, newPlayerID, newPlayerName, message) {
  switch (i) {
    case 0: {
      await client.updateWerewolf(message, { "lobby.0.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.0.name": newPlayerName });
      break;
    }
    case 1: {
      await client.updateWerewolf(message, { "lobby.1.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.1.name": newPlayerName });
      break;
    }
    case 2: {
      await client.updateWerewolf(message, { "lobby.2.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.2.name": newPlayerName });
      break;
    }
    case 3: {
      await client.updateWerewolf(message, { "lobby.3.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.3.name": newPlayerName });
      break;
    }
    case 4: {
      await client.updateWerewolf(message, { "lobby.4.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.4.name": newPlayerName });
      break;
    }
    case 5: {
      await client.updateWerewolf(message, { "lobby.5.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.5.name": newPlayerName });
      break;
    }
    case 6: {
      await client.updateWerewolf(message, { "lobby.6.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.6.name": newPlayerName });
      break;
    }
    case 7: {
      await client.updateWerewolf(message, { "lobby.7.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.7.name": newPlayerName });
      break;
    }
    case 8: {
      await client.updateWerewolf(message, { "lobby.8.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.8.name": newPlayerName });
      break;
    }
    case 9: {
      await client.updateWerewolf(message, { "lobby.9.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.9.name": newPlayerName });
      break;
    }
    case 10: {
      await client.updateWerewolf(message, { "lobby.10.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.10.name": newPlayerName });
      break;
    }
    case 11: {
      await client.updateWerewolf(message, { "lobby.11.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.11.name": newPlayerName });
      break;
    }
    case 12: {
      await client.updateWerewolf(message, { "lobby.12.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.12.name": newPlayerName });
      break;
    }
    case 13: {
      await client.updateWerewolf(message, { "lobby.13.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.13.name": newPlayerName });
      break;
    }
    case 14: {
      await client.updateWerewolf(message, { "lobby.14.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.14.name": newPlayerName });
      break;
    }
    case 15: {
      await client.updateWerewolf(message, { "lobby.15.id": newPlayerID });
      await client.updateWerewolf(message, { "lobby.15.name": newPlayerName });
      break;
    }
  }
  return;
};

//################################ Commande pour quitter le Lobby ################################
module.exports.remFromLobby = async function (client, message, i) {
  switch (i) {
    case 0: {
      await client.updateWerewolf(message, { "lobby.0.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.0.name": "defaultName" });
    }
    case 1: {
      await client.updateWerewolf(message, { "lobby.1.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.1.name": "defaultName" });
    }
    case 2: {
      await client.updateWerewolf(message, { "lobby.2.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.2.name": "defaultName" });
    }
    case 3: {
      await client.updateWerewolf(message, { "lobby.3.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.3.name": "defaultName" });
    }
    case 4: {
      await client.updateWerewolf(message, { "lobby.4.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.4.name": "defaultName" });
    }
    case 5: {
      await client.updateWerewolf(message, { "lobby.5.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.5.name": "defaultName" });
    }
    case 6: {
      await client.updateWerewolf(message, { "lobby.6.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.6.name": "defaultName" });
    }
    case 7: {
      await client.updateWerewolf(message, { "lobby.7.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.7.name": "defaultName" });
    }
    case 8: {
      await client.updateWerewolf(message, { "lobby.8.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.8.name": "defaultName" });
    }
    case 9: {
      await client.updateWerewolf(message, { "lobby.9.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.9.name": "defaultName" });
    }
    case 10: {
      await client.updateWerewolf(message, { "lobby.10.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.10.name": "defaultName" });
    }
    case 11: {
      await client.updateWerewolf(message, { "lobby.11.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.11.name": "defaultName" });
    }
    case 12: {
      await client.updateWerewolf(message, { "lobby.12.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.12.name": "defaultName" });
    }
    case 13: {
      await client.updateWerewolf(message, { "lobby.13.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.13.name": "defaultName" });
    }
    case 14: {
      await client.updateWerewolf(message, { "lobby.14.id": "default_id" });
      await client.updateWerewolf(message, { "lobby.14.name": "defaultName" });
    }
  }
};

//################################ Commande pour sélectionner les rôles ################################
module.exports.roles = async function (client, message) {
  const data = await client.getWerewolf(message);
  let role, number, answer, answer2, answer3, validated;
  answer = await message.channel.send("Quel rôle voulez-vous ajouter à la partie ?");
  answer
    .react("🐺")
    .then(() => answer.react("🧪"))
    .then(() => answer.react("🎯"));

  const filter = (reaction, user) => {
    return ["🐺", "🧪", "🎯"].includes(reaction.emoji.name) && user.id === message.author.id;
  };

  answer
    .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();
      if (reaction.emoji.name === "🐺") {
        role = "werewolf";
        answer.edit(`Le rôle :wolf: **Loup-Garou** a été sélectionné.`);
      } else if (reaction.emoji.name === "🧪") {
        role = "witch";
        answer.edit(`Le rôle :test_tube: : **Sorcière** a été sélectionné.`);
      } else if (reaction.emoji.name === "🎯") {
        role = "hunter";
        answer.edit(`Le rôle :dart: **Chasseur**" a été sélectionné.`);
      }
    })
    .catch((collected) => {
      message.reply("Vous n'avez pas séléctionner quel rôle vous vouliez ajouter à votre partie.");
    });

  // Deuxième partie
  answer2 = await message.channel.send("Combien voulez-vous en rajouter ?");
  answer2
    .react("1️⃣")
    .then(() => answer2.react("2️⃣"))
    .then(() => answer2.react("3️⃣"))
    .then(() => answer2.react("4️⃣"))
    .then(() => answer2.react("5️⃣"));

  const filter2 = (reaction, user) => {
    return ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  answer2
    .awaitReactions(filter2, { max: 1, time: 60000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();
      if (reaction.emoji.name === "1️⃣") {
        answer2.edit("Vous allez ajouter le rôle sélectionné **une** fois.");
        number = 1;
      } else if (reaction.emoji.name === "2️⃣") {
        answer2.edit("Vous allez ajouter le rôle sélectionné **deux** fois.");
        number = 2;
      } else if (reaction.emoji.name === "3️⃣") {
        answer2.edit("Vous allez ajouter le rôle sélectionné **trois** fois.");
        number = 3;
      } else if (reaction.emoji.name === "4️⃣") {
        answer2.edit("Vous allez ajouter le rôle sélectionné **quatre** fois.");
        number = 4;
      } else if (reaction.emoji.name === "5️⃣") {
        answer2.edit("Vous allez ajouter le rôle sélectionné **cinq** fois.");
        number = 5;
      }
    })
    .catch((collected) => {
      message.reply("Vous n'avez pas séléctionner combien de rôles vous vouliez ajouter à votre partie.");
    });

  // Troisième partie
  answer3 = await message.channel.send("Voulez-vous valider la séléction ?");
  answer3
    .react("✅")
    .then(() => answer3.react("⛔"))
    .then(() => answer3.react("🍪"));

  const filter3 = (reaction, user) => {
    return ["✅", "⛔", "🍪"].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  answer3
    .awaitReactions(filter3, { max: 1, time: 60000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();
      if (reaction.emoji.name === "✅") {
        answer3.edit("Vous avez **valider** les paramètres.");
        Final(client, data, role, number);
      } else if (reaction.emoji.name === "⛔") {
        answer3.edit("Vous avez **annuler** la séléction de rôles.");
      } else if (reaction.emoji.name === "🍪") {
        message.reply("https://tenor.com/wSFB.gif");
      }
    })
    .catch((collected) => {
      message.reply("Vous n'avez pas séléctionner de rôles pour votre partie.");
    });

  // Partie finale ( ajout des rôles à la partie )
  async function Final(client, data, role, number) {
    var final;
    if (role == undefined || number == undefined) {
      message.reply("Vous devez d'abord rentrer les deux premières lignes avant de valider.");
      return;
    }
    if (data.customRoles == undefined) {
      final = [];
    } else {
      final = data.customRoles;
    }
    switch (role) {
      case "werewolf": {
        for (let i = 0; i < number; i++) {
          final.push(":wolf: Loup-garou");
        }
        break;
      }
      case "witch": {
        for (let i = 0; i < number; i++) {
          final.push(":test_tube: : Sorcière");
        }
        break;
      }
      case "hunter": {
        for (let i = 0; i < number; i++) {
          final.push(":dart: : Chasseur");
        }
        break;
      }
    }
    if (final.length > data.maxPlayers) {
      message.channel.send("Vous avez ajouter plus de rôles qu'il n'y a de joueurs dans la partie ! Faites \"/werewolf roles reset\" pour recommencer la sélection si vous avez fait une erreur.");
      return;
    }
    await client.updateWerewolf(message, { customRoles: final });
  }
};

//################################ Commande pour sélectionner les rôles ################################
module.exports.canStart = async function (client, message) {
  var data = await client.getWerewolf(message);

  // Vérifications du nombre de joueurs dans le lobby
  EnoughPlayers = async (data) => {
    for (let i = 0; i < data.maxPlayers; i++) {
      if (data.lobby[i].id == "defaultID") {
        return 0;
      }
    }
    return 1;
  };
  // Vérifications que les rôles soient "valide"
  EnoughSides = async (data) => {
    var isWerewolf = false;
    var isVillager = false;
    if (data.customRole == false) {
      return 1;
    } else if (data.customRoles.length != data.maxPlayers) {
      for (let i = 0; i < data.maxPlayers; i++) {
        var final;
        if (data.customRoles == undefined) {
          final = [];
        } else {
          final = data.customRoles;
        }
        const toAdd = data.maxPlayers - data.customRoles.length;
        for (let i = 0; i < toAdd; i++) {
          final.push(":ear_of_rice: Villageois");
        }
        await client.updateWerewolf(message, { customRoles: final });
      }
      let isWerewolves = false;
      let isVillage = false;
      for (let i = 0; i < data.maxPlayers; i++) {
        if (data.customRoles[i] == ":wolf: Loup-garou") {
          isWerewolves = true;
        } else if (data.customRoles[i] == ":ear_of_rice: Villageois" || data.customRoles[i] == ":test_tube: : Sorcière" || data.customRoles[i] == ":dart: Chasseur") {
          isVillage = true;
        }
      }
      if (isWerewolves == true && isVillage == true) {
        return 1;
      } else {
        return 0;
      }
    }
  };

  // Vérification que tout est bon :ok_hand:
  const enoughPlayers = await EnoughPlayers(data);
  if (enoughPlayers == 0) {
    message.channel.send("Il n'y a pas assez de joueurs dans le lobby.");
    return false;
  }
  const enoughSides = await EnoughSides(data);
  if (enoughSides == 0) {
    message.channel.send("Les rôles sélectionnés ne sont pas valides. ( Un seul camp )");
    return false;
  }
  return true;
};

//################################ Commande pour attribuer les rôles ################################
module.exports.distributeRoles = async function (client, message) {
  var data = await client.getWerewolf(message);
  var newPlaying = [];
  var playingPlayer;
  if (data.customRole == true) {
    roles = data.customRoles;
  } else if (data.customRole == false) {
    roles = data.premadeRoles;
  }
  roles = await client.shuffle(roles);
  for (let i = 0; i < data.maxPlayers; i++) {
    playingPlayer = {
      id: data.lobby[i].id,
      name: data.lobby[i].name,
      role: roles[i],
      side: -1,
      isVoted: 0,
      hasVoted: false,
      alive: true,
    };
    if (roles[i] == ":wolf: Loup-garou") {
      playingPlayer.side = 1;
    } else {
      playingPlayer.side = 0;
    }
    newPlaying.push(playingPlayer);
  }
  await client.updateWerewolf(message, { playing: newPlaying });
};

//################################ Commande pour le vote des loups-garous ################################
module.exports.getPlaying = async function (client, data) {
  let playing = [];
  let player = {};
  for (let i = 0; i < data.maxPlayers; i++) {
    player = {
      id: data.playing[i].id,
      name: data.playing[i].name,
      role: data.playing[i].role,
      side: data.playing[i].side,
      isVoted: data.playing[i].isVoted,
      hasVoted: data.playing[i].hasVoted,
      alive: data.playing[i].alive,
    };
    playing.push(player);
  }
  return playing;
};

//################################ Commande pour le vote des loups-garous ################################
module.exports.voteWerewolf = async function (client, message, args, votingIndex, votedIndex) {
  var data;
  if (message.guild === null) {
    data = await client.getWerewolfID(args[1]);
  } else {
    data = await client.getWerewolf(message);
  }
  newPlaying = await require("../utils/werewolf").getPlaying(client, data);
  if (data.playing[votingIndex].hasVoted == true) {
    message.author.send("Vous avez déjà voté cette nuit, rendormez-vous.");
    return;
  } else {
    newPlaying[votingIndex].hasVoted = true;
    newPlaying[votedIndex].isVoted = newPlaying[votedIndex].isVoted + 1;
    await client.updateWerewolfID(args[1], { playing: newPlaying });
  }

  for (let i = 0; i < data.maxPlayers; i++) {
    if (data.playing[i].side == 1 && data.playing[i].id != data.playing[votingIndex].id) {
      discordPlayer = client.users.cache.get(data.playing[i].id);
      discordPlayer.send(`**${data.playing[votingIndex].name}** a voté pour **${data.playing[votedIndex].name}** !`);
    } else if (data.playing[i].side == 1 && data.playing[i].id == message.author.id) {
      message.author.send(`Vous avez voté pour **${data.playing[votedIndex].name}**`);
    }
  }

  /*
        for (let i = 0; i < data.maxPlayers; i++) {
        if (data.phase == "wolvesTurn") {
          if (data.playing[i].id == message.author.id) {
            if (data.playing[i].role == ":wolf: Loup-garou") {
              for (let k = 0; k < data.maxPlayers; k++) {
                if (data.playing[k].role == ":wolf: Loup-garou") {
                  require("../../utils/werewolf").voteWerewolf(client, message, args);
                  for (let m = 0; m < data.maxPlayers; m++) {
                    const found = data.playing[m].vote.find((element) => (element = message.author.id));
                    const result = data.playing[m].vote.filter((element) => (element = found));
                    console.log(result);
                    switch (m) {
                      case 0: {
                        await client.updateWerewolfID(args[1], { "data.playing.0.vote": result });
                      }
                    }
                  }
                  if (data.playing[k] == data.playing[i]) {
                    message.author.send(`Vous avez voté pour **${data.playing[args[2]].name}** !`);
                  } else {
                    discordPlayer = client.users.cache.get(data.playing[k].id);
                    discordPlayer.send(`**${data.playing[i].name}** a voté pour **${data.playing[args[2]].name}** !`);
                  }
                }
              }
            }
          }
          */
};
