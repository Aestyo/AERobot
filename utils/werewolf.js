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
  const playingPlayer = { id: "defaultID", name: "defaultName", role: "defaultRole", alive: true };
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
      message.reply("Vous n'avez pas séléctionner de rôles pour votre partie.");
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
      message.reply("Vous n'avez pas séléctionner de rôles pour votre partie.");
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
    console.log(data.customRoles);
    console.log(final);
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
    }
    if (final.length > data.maxPlayers) {
      message.channel.send("Vous avez ajouter plus de rôles qu'il n'y a de joueurs dans la partie ! Faites \"/werewolf roles reset\" pour recommencer la sélection");
      return;
    }
    await client.updateWerewolf(message, { customRoles: final });
  }
};
