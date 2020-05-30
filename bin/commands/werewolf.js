module.exports.run = async (client, message, args) => {
  cmd = args[0];
  switch (cmd) {
    //################################ Création de la partie #################################################################
    case "create": {
      const data = await client.getWerewolf(message);
      if (data != -1) {
        message.channel.send('Il y a déjà une partie de loup-garou en cours dans ce salon, faites "/werewolf join" pour la rejoindre');
        return;
      }
      if (args[1] > 15 || args[1] < 5) {
        // Vérification de la limite supérieure du nombre de joueurs.
        message.channel.send("Il doit y avoir entre 5 et 15 joueurs pour pouvoir créer une partie.");
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
      if (data.customRoles == true) info1 = "activés";
      if (data.customRoles == false) info1 = "désactivés";
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
          break;
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
      if (args[1] == "reset") {
        let empty = [];
        await client.updateWerewolf(message, { customRoles: empty });
        message.channel.send("Les rôles personnalisés ont été réinitialisés");
        break;
      }
      require("../../utils/werewolf").roles(client, message);
    }
    default: {
      message.channel.send("La commande entrée est incorrecte.");
    }
  }
};
