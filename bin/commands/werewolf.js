const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const data = await client.getWerewolf(message);

  function countplayers(data) {
    if (data == -1) {
      return -1;
    }
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].id == "default_id") {
        return i;
      }
    }
  }
  function doubleauth(data) {
    if (data == -1) {
      message.channel.send(
        "Il n'y a pas de partie en cours dans votre channel."
      );
      return 0;
    }
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].id == message.author.id) {
        message.channel.send("Vous êtes déjà dans la partie !");
        return 0;
      }
    }
    return 1;
  }

  cmd = args[0];
  switch (cmd) {
    case "create": {
      if (args[1] > 15) {
        message.channel.send(
          "Vous ne pouvez pas ( encore ? ) jouer à plus de 15 personnes."
        );
        break;
      }
      if (args[1] < 5) {
        message.channel.send(
          "Vous ne pouvez pas ( encore ? ) jouer à moins de 5 personnes."
        );
        break;
      }
      if (data != -1) {
        message.channel.send(
          'Une partie est déjà en cours dans ce channel ! Faites "/werewolf join" pour la rejoindre'
        );
        break;
      }
      var array = [];
      const player = {
        id: "default_id",
        name: "default_name",
        role: "default_role",
        alive: true,
      };
      for (let i = 0; i < args[1]; i++) {
        array.push(player);
      }
      const newGame = {
        channel_id: message.channel.id,
        channel_name: message.channel.name,
        guild_id: message.guild.id,
        guild_name: message.guild.name,
        player_max: args[1],
        players: array,
        base_roles: args[2],
        custom_roles: [],
      };
      await client.createWerewolf(newGame);
      message.channel.send(
        'Une partie de loup-garou commence dans ce channel ! Répondez par "/werewolf join" dans ce salon pour rejoindre !'
      );
      break;
    }
    case "current": {
      i = countplayers(data);
      if (i == -1) {
        message.channel.send(
          "Il n'y a pas de partie en cours dans votre channel."
        );
        break;
      }
      if (i == 0) {
        message.channel.send(
          `Il y a actuellement **${i}** joueurs dans la partie.`
        );
      } else {
        let str = "";
        for (let j = 0; j < i; j++) {
          str = str + data.players[j].name;
        }
        message.channel.send(
          `Il y a actuellement **${i}** joueurs dans la partie. ( ${str} )`
        );
      }
      break;
    }
    case "join": {
      i = countplayers(data);
      const newPlayerID = message.author.id;
      const newPlayerUsername = message.author.username;

      const canjoin = doubleauth(data);
      if (canjoin != 1) break;

      if (i == 0) {
        await client.updateWerewolf(message, { "players.0.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.0.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.0.role": "Aucun" });
        await client.updateWerewolf(message, { "players.0.alive": true });
      } else if (i == 1) {
        await client.updateWerewolf(message, { "players.1.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.1.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.1.role": "Aucun" });
        await client.updateWerewolf(message, { "players.1.alive": true });
      } else if (i == 2) {
        await client.updateWerewolf(message, { "players.2.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.2.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.2.role": "Aucun" });
        await client.updateWerewolf(message, { "players.2.alive": true });
      } else if (i == 3) {
        await client.updateWerewolf(message, { "players.3.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.3.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.3.role": "Aucun" });
        await client.updateWerewolf(message, { "players.3.alive": true });
      } else if (i == 4) {
        await client.updateWerewolf(message, { "players.4.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.4.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.4.role": "Aucun" });
        await client.updateWerewolf(message, { "players.4.alive": true });
      } else if (i == 5) {
        await client.updateWerewolf(message, { "players.5.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.5.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.5.role": "Aucun" });
        await client.updateWerewolf(message, { "players.5.alive": true });
      } else if (i == 6) {
        await client.updateWerewolf(message, { "players.6.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.6.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.6.role": "Aucun" });
        await client.updateWerewolf(message, { "players.6.alive": true });
      } else if (i == 7) {
        await client.updateWerewolf(message, { "players.7.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.7.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.7.role": "Aucun" });
        await client.updateWerewolf(message, { "players.7.alive": true });
      } else if (i == 8) {
        await client.updateWerewolf(message, { "players.8.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.8.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.8.role": "Aucun" });
        await client.updateWerewolf(message, { "players.8.alive": true });
      } else if (i == 9) {
        await client.updateWerewolf(message, { "players.9.id": newPlayerID });
        await client.updateWerewolf(message, {
          "players.9.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.9.role": "Aucun" });
        await client.updateWerewolf(message, { "players.9.alive": true });
      } else if (i == 10) {
        await client.updateWerewolf(message, {
          "players.10.id": newPlayerID,
        });
        await client.updateWerewolf(message, {
          "players.10.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.10.role": "Aucun" });
        await client.updateWerewolf(message, { "players.10.alive": true });
      } else if (i == 11) {
        await client.updateWerewolf(message, {
          "players.11.id": newPlayerID,
        });
        await client.updateWerewolf(message, {
          "players.11.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.11.role": "Aucun" });
        await client.updateWerewolf(message, { "players.11.alive": true });
      } else if (i == 12) {
        await client.updateWerewolf(message, {
          "players.12.id": newPlayerID,
        });
        await client.updateWerewolf(message, {
          "players.12.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.12.role": "Aucun" });
        await client.updateWerewolf(message, { "players.12.alive": true });
      } else if (i == 13) {
        await client.updateWerewolf(message, {
          "players.13.id": newPlayerID,
        });
        await client.updateWerewolf(message, {
          "players.13.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.13.role": "Aucun" });
        await client.updateWerewolf(message, { "players.13.alive": true });
      } else if (i == 14) {
        await client.updateWerewolf(message, {
          "players.14.id": newPlayerID,
        });
        await client.updateWerewolf(message, {
          "players.14.name": newPlayerUsername,
        });
        await client.updateWerewolf(message, { "players.14.role": "Aucun" });
        await client.updateWerewolf(message, { "players.14.alive": true });
      }
      message.channel.send(
        `**${message.author.username}** a rejoint la partie !`
      );
      break;
    }
    case "roles": {
      var roles = [];
      var incorrect = 0;

      for (let i = 1; i < data.player_max + 1; i++) {
        switch (args[i]) {
          case undefined: {
            roles.push("Villageois");
            break;
          }
          case "loup-garou": {
            roles.push("Loup-Garou");
            break;
          }
          case "lg": {
            roles.push("Loup-Garou");
            break;
          }
          case "sorcière": {
            roles.push("Sorcière");
            break;
          }
          case "w": {
            roles.push("Sorcière");
            break;
          }
          case "chasseur": {
            roles.push("Chasseur");
            break;
          }
          case "ht": {
            roles.push("Chasseur");
            break;
          }
          default: {
            message.channel.send("Vous avez enter un rôle incorrect.");
            incorrect = 1;
            break;
          }
        }
      }
      if (incorrect == 1) {
        roles = [];
        return;
      }
      await client.updateWerewolf(message, { custom_roles: roles });
      await client.updateWerewolf(message, { base_roles: true });
      message.channel.send(roles);
      break;
    }
    case "start": {
      if (data == -1)
        return message.channel.send(
          "Il n'y a pas de partie en cours de démarrage dans ce channel."
        );
      let players = countplayers(data);
      if (players != data.player_max) {
        message.channel.send(
          "La partie n'est pas pleine, attendez que tout les joueurs rejoignent avant de démarrer."
        );
        break;
      }
      if (!data.base_roles) {
        message.channel.send(
          "Vous na'avez pas séléctionner de rôle jouable dans la partie !"
        );
      }

      g;
    }
  }
};
