module.exports.run = async (client, message, args) => {
  //
  //      NOTE :
  //    Pour rajouter des rôles positifs ou négatifs, penser à les ajouter aussi dans utils/werewolf.js
  //    dans la fonction EnoughSides
  //
  cmd = args[0];
  switch (cmd) {
    //################################ Création de la partie #################################################################
    case "create": {
      const data = await client.getWerewolf(message);
      if (data != -1) {
        message.channel.send('Il y a déjà une partie de loup-garou en cours dans ce salon, faites "/werewolf join" pour la rejoindre');
        return;
      }
      if (args[1] > 15 || args[1] < 2) {
        // Vérification de la limite supérieure du nombre de joueurs.
        message.channel.send("Il doit y avoir entre 2 et 15 joueurs pour pouvoir créer une partie.");
        break;
      }
      require("../../utils/werewolf").createGame(client, message, args);
      message.channel.send(`Une partie de loup-garou est en création sur le serveur __${message.guild.name}__ ! Répondez par "**/werewolf join**" dans ce salon pour rejoindre !`);
      break;
    }
    //################################ Suppression de la partie #################################################################
    case "delete": {
      const data = await client.getWerewolf(message);
      if (data == -1) {
        message.channel.send("Il n'y a pas de partie de loup-garou en cours dans ce salon.");
        break;
      }
      const { Werewolf } = require("../../models/index");
      Werewolf.deleteOne({ channelID: message.channel.id }, function (err) {
        if (err) console.log(err);
      });
      message.channel.send("La partie en cours dans ce salon à été supprimée.");
      break;
    }
    //################################ Informations sur le Lobby #################################################################
    case "lobby": {
      const data = await client.getWerewolf(message);
      if (data == -1) {
        message.channel.send("Il n'y a pas de partie en cours sur votre serveur.");
        break;
      }

      let playersInLobby = [];
      for (let i = 0; i < data.maxPlayers; i++) {
        if (data.lobby[i].name != "defaultName") {
          playersInLobby.push(data.lobby[i].name);
        }
      }
      let info1;
      if (data.customRole == true) info1 = "activés";
      if (data.customRole == false) info1 = "désactivés";
      if (playersInLobby.length == 0) {
        message.channel.send(`Il n\'y a personne dans la partie en cours sur ce channel. Pour rejoindre faites "/werewolf join".\nLes rôles customisés sont **${info1}** et l'ID de la partie est : **${data.id}**`);
      } else {
        let info2 = playersInLobby.length;
        message.channel.send(`Liste des joueurs dans la partie ( **${info2}** / ${data.maxPlayers} ): ${playersInLobby}\nLes rôles customisés sont **${info1}** et l'ID de la partie est : **${data.id}**`);
      }
      break;
    }
    //################################ Rejoindre le Lobby #################################################################
    case "join": {
      const data = await client.getWerewolf(message);
      if (data == -1) {
        message.channel.send("Il n'y a pas de partie en cours sur votre serveur.");
        break;
      }
      for (let i = 0; i < data.maxPlayers; i++) {
        if (data.lobby[i].id == message.author.id) {
          message.channel.send("Vous êtes déjà dans la partie !");
          return;
        }
      }
      for (let i = 0; i < data.maxPlayers; i++) {
        if (data.lobby[i].name == "defaultName") {
          const newPlayerID = message.author.id;
          const newPlayerName = message.author.username;
          await require("../../utils/werewolf").addToLobby(client, i, newPlayerID, newPlayerName, message);
          break;
        }
      }
      message.channel.send(`**${message.author.username}** a rejoint la partie !`);
      let newLog = data.log;
      newLog = newLog + `\n${message.author.username} rejoint la partie.`;
      await client.updateWerewolf(message, { log: newLog });
      break;
    }
    //################################ Quitter le Lobby #################################################################
    case "leave": {
      const data = await client.getWerewolf(message);
      if (data == -1) {
        message.channel.send("Il n'y a pas de partie en cours sur votre serveur.");
        break;
      }
      let left;
      for (let i = 0; i < data.maxPlayers; i++) {
        if (message.author.id == data.lobby[i].id) {
          await require("../../utils/werewolf").remFromLobby(client, message, i);
          message.channel.send(`**${message.author.username}** a quitté la partie.`);
          left = true;
          let newLog = data.log;
          newLog = newLog + `\n- **${message.author.username}** a quitté la partie !`;
          await client.updateWerewolf(message, { log: newLog });
        }
      }
      if (left != true) {
        message.channel.send("Vous n'êtes pas dans la partie en cours dans ce channel.");
      }
      break;
    }
    //################################ Séléctionner les rôles #################################################################
    case "roles": {
      const data = await client.getWerewolf(message);
      if (data == -1) {
        message.channel.send("Il n'y a pas de partie en cours sur votre serveur.");
        break;
      }
      switch (args[1]) {
        case "reset": {
          let empty = [];
          await client.updateWerewolf(message, { customRoles: empty });
          message.channel.send("Les rôles personnalisés ont été réinitialisés");
          let newLog = data.log;
          newLog = newLog + `\n- **${message.author.username}** a réinitialiser les rôles !`;
          await client.updateWerewolf(message, { log: newLog });
          break;
        }
        case "setup": {
          require("../../utils/werewolf").roles(client, message);
          let newLog = data.log;
          newLog = newLog + `\n- **${message.author.username}** a configurer les rôles !`;
          await client.updateWerewolf(message, { log: newLog });
          break;
        }
        case "view": {
          if (data.customRole == true) {
            let str = "";
            for (let i = 0; i < data.customRoles.length; i++) {
              str = str + `- ${data.customRoles[i]}\n`;
            }
            message.channel.send(`Les rôles actuellement sélectionnés pour la partie du channel **${message.channel.name}** sont : \n${str}*( Si le nombre de rôle ne corresponds pas au nombre de joueurs, les rôles manquants seront complétés par des rôles villageois. )*`);
          } else if (data.customRole == false) {
            let str = "";
            for (let i = 0; i < data.customRoles.length; i++) {
              str = str + `- ${data.customRoles[i]}\n`;
            }
            message.channel.send(`Les rôles actuellement sélectionnés pour la partie du channel **${message.channel.name}** sont : \n${str}*( Si le nombre de rôle ne corresponds pas au nombre de joueurs, les rôles manquants seront complétés par des rôles villageois. )*`);
          }
          break;
        }
        default: {
          message.channel.send('La commande est utilisé incorrectement. Faites "/werewolf roles [setup / reset / view]" ou consultez l\'aide du bot.');
          break;
        }
      }
      break;
    }
    //################################ Séléctionner les rôles #################################################################
    case "start": {
      const data = await client.getWerewolf(message);
      if (data == -1) {
        message.channel.send("Il n'y a pas de partie en cours sur votre serveur.");
        break;
      }
      const canStart = await require("../../utils/werewolf").canStart(client, message);
      if (canStart == true) {
        let newLog = data.log;
        newLog = newLog + `\n- ${message.author.username} démarre la partie.`;
        await client.updateWerewolf(message, { log: newLog });
        await require("../../utils/werewolfGame").play(client, message);
      }
      break;
    }
    //################################ Séléctionner les rôles #################################################################
    case "vote": {
      var data;
      if (message.guild === null) {
        data = await client.getWerewolfID(args[1]);
      } else {
        data = await client.getWerewolf(message);
      }
      const votingID = message.author.id;
      let votingIndex;
      let votedIndex = args[2] - 1;
      for (let i = 0; i < data.maxPlayers; i++) {
        if (data.playing[i].id == votingID) {
          votingIndex = i;
        }
      }
      if ((data.phase = "werewolfTurn")) {
        if ((data.playing[votingIndex].role = ":wolf: Loup-garou")) {
          require("../../utils/werewolf").voteWerewolf(client, message, args, votingIndex, votedIndex);
        } else {
          message.channel.send("Ce n'est pas à votre tour de voter.");
        }
      } else if (data.phase == "villagerTurn") {
      } else if (data.phase == "witchTurn") {
      } else if (data.phase == "hunterTurn") {
      }
      break;
    }
    //################################ Reset de la partie #################################################################
    case "debug": {
      await client.updateWerewolf(message, { phase: "starting" });
      break;
    }
    //####################################################################################################################
    default: {
      message.channel.send("La commande entrée est incorrecte.");
    }
  }
};
