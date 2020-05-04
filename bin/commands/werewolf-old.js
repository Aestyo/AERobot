const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  cmd = args[0];
  adj = args[1];
  const data = await client.getWerewolf(message);
  switch (cmd) {
    //#####################################################################################################
    case "create": {
      if (args[1] > 15) {
        // Vérification de la limite supérieure du nombre de joueurs.
        message.channel.send("Vous ne pouvez pas ( encore ? ) jouer à plus de 15 personnes.");
        break;
      }
      if (args[1] < 5) {
        // Vérification de la limite inférieure du nombre de joueurs.
        message.channel.send("Vous ne pouvez pas ( encore ? ) jouer à moins de 5 personnes.");
        break;
      }
      const create_id = Math.random().toString(16).slice(2, 8);
      await client.newGame(message, args, create_id);
      message.channel.send(`Une partie de loup-garou commence bientôt ! Répondez par "**/werewolf ${create_id} join**" dans ce salon pour rejoindre !`);
      break;
    }
    //#####################################################################################################
    case "current": {
      i = await client.countplayers(data);
      if (i == -1) {
        message.channel.send("Il n'y a pas de partie en cours dans votre channel.");
        break;
      }
      if (i == 0) {
        message.channel.send(`Il y a actuellement **${i}** joueurs dans la partie.`);
      } else {
        let str = "";
        for (let j = 0; j < i; j++) {
          str = str + " " + data.players[j].name;
        }
        message.channel.send(`Il y a actuellement **${i}** joueurs dans la partie. ( ${str} )`);
      }
      break;
    }
    //#####################################################################################################
    case "join": {
      i = await client.countplayers(data);
      const newPlayerID = message.author.id;
      const newPlayerUsername = message.author.username;

      const canjoin = await client.doubleauth(data, message);
      if (canjoin != 1) break;

      if (i == 0) {
        await client.updateWerewolf(adj, { "players.0.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.0.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.0.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.0.alive": true });
      } else if (i == 1) {
        await client.updateWerewolf(adj, { "players.1.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.1.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.1.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.1.alive": true });
      } else if (i == 2) {
        await client.updateWerewolf(adj, { "players.2.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.2.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.2.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.2.alive": true });
      } else if (i == 3) {
        await client.updateWerewolf(adj, { "players.3.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.3.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.3.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.3.alive": true });
      } else if (i == 4) {
        await client.updateWerewolf(adj, { "players.4.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.4.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.4.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.4.alive": true });
      } else if (i == 5) {
        await client.updateWerewolf(adj, { "players.5.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.5.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.5.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.5.alive": true });
      } else if (i == 6) {
        await client.updateWerewolf(adj, { "players.6.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.6.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.6.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.6.alive": true });
      } else if (i == 7) {
        await client.updateWerewolf(adj, { "players.7.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.7.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.7.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.7.alive": true });
      } else if (i == 8) {
        await client.updateWerewolf(adj, { "players.8.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.8.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.8.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.8.alive": true });
      } else if (i == 9) {
        await client.updateWerewolf(adj, { "players.9.id": newPlayerID });
        await client.updateWerewolf(adj, {
          "players.9.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.9.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.9.alive": true });
      } else if (i == 10) {
        await client.updateWerewolf(adj, {
          "players.10.id": newPlayerID,
        });
        await client.updateWerewolf(adj, {
          "players.10.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.10.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.10.alive": true });
      } else if (i == 11) {
        await client.updateWerewolf(adj, {
          "players.11.id": newPlayerID,
        });
        await client.updateWerewolf(adj, {
          "players.11.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.11.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.11.alive": true });
      } else if (i == 12) {
        await client.updateWerewolf(adj, {
          "players.12.id": newPlayerID,
        });
        await client.updateWerewolf(adj, {
          "players.12.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.12.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.12.alive": true });
      } else if (i == 13) {
        await client.updateWerewolf(adj, {
          "players.13.id": newPlayerID,
        });
        await client.updateWerewolf(adj, {
          "players.13.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.13.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.13.alive": true });
      } else if (i == 14) {
        await client.updateWerewolf(adj, {
          "players.14.id": newPlayerID,
        });
        await client.updateWerewolf(adj, {
          "players.14.name": newPlayerUsername,
        });
        await client.updateWerewolf(adj, { "players.14.role": "Aucun" });
        await client.updateWerewolf(adj, { "players.14.alive": true });
      }
      message.channel.send(`**${message.author.username}** a rejoint la partie !`);
      break;
    }
    //#####################################################################################################
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
      await client.updateWerewolf(adj, { custom_roles: roles });
      await client.updateWerewolf(adj, { base_roles: true });
      message.channel.send(roles);
      break;
    }
    //#####################################################################################################
    case "start": {
      if (data == -1) return message.channel.send("Il n'y a pas de partie en cours de démarrage dans ce channel.");
      let players = await client.countplayers(data);
      /*if (players != data.player_max) {
        message.channel.send(
          "La partie n'est pas pleine, attendez que tout les joueurs rejoignent avant de démarrer."
        );
        break;
      }*/
      if (!data.base_roles) {
        message.channel.send("Vous na'avez pas séléctionner de rôle jouable dans la partie !");
      }

      roles = data.custom_roles;
      roles = await client.shuffle(roles);
      if (data.players[0] != undefined) {
        await client.updateWerewolf(adj, { "players.0.role": roles[0] });
      }
      if (data.players[1] != undefined) {
        await client.updateWerewolf(adj, { "players.1.role": roles[1] });
      }
      if (data.players[2] != undefined) {
        await client.updateWerewolf(adj, { "players.2.role": roles[2] });
      }
      if (data.players[3] != undefined) {
        await client.updateWerewolf(adj, { "players.3.role": roles[3] });
      }
      if (data.players[4] != undefined) {
        await client.updateWerewolf(adj, { "players.4.role": roles[4] });
      }
      if (data.players[5] != undefined) {
        await client.updateWerewolf(adj, { "players.5.role": roles[5] });
      }
      if (data.players[6] != undefined) {
        await client.updateWerewolf(adj, { "players.6.role": roles[6] });
      }
      if (data.players[7] != undefined) {
        await client.updateWerewolf(adj, { "players.7.role": roles[7] });
      }
      if (data.players[8] != undefined) {
        await client.updateWerewolf(adj, { "players.8.role": roles[8] });
      }
      if (data.players[9] != undefined) {
        await client.updateWerewolf(adj, { "players.9.role": roles[9] });
      }
      if (data.players[10] != undefined) {
        await client.updateWerewolf(adj, { "players.10.role": roles[10] });
      }
      if (data.players[11] != undefined) {
        await client.updateWerewolf(adj, { "players.11.role": roles[11] });
      }
      if (data.players[12] != undefined) {
        await client.updateWerewolf(adj, { "players.12.role": roles[12] });
      }
      if (data.players[13] != undefined) {
        await client.updateWerewolf(adj, { "players.13.role": roles[13] });
      }
      if (data.players[14] != undefined) {
        await client.updateWerewolf(adj, { "players.14.role": roles[14] });
      }
      /*for (let i = 0; i < data.player_max; i++) {
        joueur = client.users.cache.get(data.players[i].id);
        var message = await joueur.send(`Vous êtes un ${roles[i]}.`);
      }*/
      ////////////////////////////////// Nuit n° 1
      for (let i = 0; i < data.player_max; i++) {
        if (data.players[i].role == "Villageois") {
          joueur = client.users.cache.get(data.players[i].id);
          joueur.send(`Vous ne pouvez rien faire cette nuit, vous vous rendormez.`);
        } else if (data.players[i].role == "Loup-Garou") {
          await client.WerewolfEmbed(data, i);
        }
      }
      break;
    }
    case "target": {
      switch (adj) {
        case "1": {
          if (data == -1) return message.channel.send("Pas de data");
          message.reply(`Vous décidez de cibler ${data.players[0].name}`);
        }
      }
    }
  }
};
