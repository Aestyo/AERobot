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

  // Création du buffer des joueurs qui seront dans la partie
  const playingBuffer = [];
  const playingPlayer = { id: "defaultID", name: "defaultName", role: "defaultRole", alive: true };
  for (let i = 0; i < args[1]; i++) {
    playingBuffer.push(playingPlayer);
  }

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
    customRoles: args[2],
    phase: "starting",
  };
  client.createWerewolf(newGame);
};

//##############################################################################################

module.exports.leave = async function (message, i) {
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
