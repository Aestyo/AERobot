const mongoose = require("mongoose");

module.exports.run = async (client, message, args) => {
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  cmd = args[0];
  if (message.author.id == "262654963119816705") {
    message.reply("https://www.francetvinfo.fr/image/759u7n3ak-be5a/1200/450/18692471.jpg");
  }
  //################################ Initialisation de la partie ################################
  switch (cmd) {
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
      if (args[2] == undefined) {
        // Vérification des rôles personnalisés.
        message.channel.send("Vous n'avez pas indiquer quels rôles utiliser.");
        break;
      }
      const hexadecimal = Math.random().toString(16).slice(2, 8);
      await client.newGame(message, args, hexadecimal);
      message.channel.send(`Une partie de loup-garou est en création sur le serveur __${message.guild.name}__ ! Répondez par "**/werewolf join**" dans ce salon pour rejoindre ! ( ID : ${hexadecimal} )`);
      break;
    }
    //################################ Suppression de la partie ################################
    /*case "delete": {
      if (args[1] == undefined) {
        message.reply("Vous devez entrer l'ID de la partie que vous voulez supprimer.");
        break;
      }
      mongoose.findOneAndDelete({ id: args[1] }, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
      });
    }*/
    //################################ Information de la partie ################################
    case "current": {
      const data = await client.getWerewolf(message);
      i = await client.countplayers(data);
      if (i == data.player_max) {
        message.channel.send('La partie est pleine. Faites "/werewolf launch" pour démarrer.');
      }
      if (i == -1) {
        message.channel.send("Il n'y a pas de partie en cours sur votre serveur.");
        break;
      }
      if (i == 0) {
        message.channel.send(`Il y a actuellement **${i}** joueurs dans la partie.`);
      } else {
        let str = "";
        for (let j = 0; j < i; j++) {
          str = str + " " + data.players[j].name;
        }
        message.channel.send(`Il y a actuellement **${i}** joueurs dans la partie. ( ${str}  )`);
      }
      break;
    }
    //################################ Rejoindre la partie ################################
    case "join": {
      const data = await client.getWerewolf(message);
      const i = await client.countplayers(data);

      const canjoin = await client.doubleauth(data, message);
      if (canjoin != 1) break;

      const newPlayerID = message.author.id;
      const newPlayerUsername = message.author.username;
      await client.addPlayer(i, newPlayerID, newPlayerUsername, message);
      message.channel.send(`**${newPlayerUsername}** a rejoint la partie !`);
      break;
    }
    //################################ Quitter la partie ################################
    case "leave": {
      const data = await client.getWerewolf(message);
      for (let i = 0; i < data.player_max; i++) {
        if (message.author.id == data.players[i].id) {
          await client.delPlayer(message, i);
          message.channel.send(`**${message.author.username}** a quitté la partie.`);
        }
      }
      break;
    }
    //################################ Setup des rôles de la partie ################################
    case "roles": {
      const data = await client.getWerewolf(message);
      var roles = [];
      var incorrect = 0;

      for (let i = 1; i < data.player_max + 1; i++) {
        switch (args[i]) {
          case undefined: {
            roles.push(":ear_of_rice: Villageois");
            break;
          }
          case "loup-garou": {
            roles.push(":wolf: Loup-Garou");
            break;
          }
          case "lg": {
            roles.push(":wolf: Loup-Garou");
            break;
          }
          case "sorcière": {
            roles.push(":test_tube: Sorcière");
            break;
          }
          case "w": {
            roles.push(":test_tube: Sorcière");
            break;
          }
          case "chasseur": {
            roles.push(":dart: Chasseur");
            break;
          }
          case "ht": {
            roles.push(":dart: Chasseur");
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
      await client.updateWerewolf(message, { roles: roles });
      await client.updateWerewolf(message, { setup_roles: true });
      message.channel.send(roles);
      break;
    }
    //################################ Target lg nuit ################################
    case "target": {
      const hexid = args[1];
      const data = await client.getWerewolfID(hexid);
      const vote = parseInt(args[2], 10) - 1;
      if (data.werewolf_phase != true) {
        message.channel.send("Ce n'est pas votre tour.");
      } else {
        await client.Werewolfvote(data, message, vote);
      }

      break;
    }
    //################################ Vote village jour ################################
    case "vote": {
      const data = await client.getWerewolf(message);
      const vote = parseInt(args[1], 10) - 1;

      await client.Folkvote(data, message, vote);

      message.channel.send(`**${message.member.displayName}** a voté pour **${data.players[vote].name}**`);
      break;
    }
    //################################ Démarrage de la partie ################################
    case "launch": {
      var data = await client.getWerewolf(message);
      const hexid = data.id;
      var isFinished = false;

      // Vérification que la partie puisse être lancée
      if (!(await client.CanStart(data, message))) return;

      // Démarrage de la partie ( fin de la phase de vérification )
      await client.Launchmessage(message, data);

      // Démarrage du jeu !

      while (isFinished == false) {
        data = await client.getWerewolf(message);
        switch (data.phase) {
          case "werewolfTurn": {
            if (await client.VerifAliveWerewolf(hexid)) {
              message.channel.send(`:crescent_moon: C'est la nuit dans le village de __${message.guild}__ et c'est au tour des loup-garous de se réveiller !\n Vérifiez vos messages privés et faites une victime !`);
              await client.WerewolfTurn(data, message);

              await new Promise((resolve) => setTimeout(resolve, 10000));

              var mort = await client.WerewolfTurnEND(data, message);
              message.channel.send(`Cette nuit, ${mort} s'est fait dévorer par les loup-garous.`);
            } else {
              message.channel.send("Tout les loup-garous de ce village ont été vaincus !");
            }
          }
        }
      }

      /*await client.updateWerewolf(message, { day: false });
      await client.VerifAliveWerewolf(hexid);
      if (data.alive_wolves == true) {
        client.WerewolfTurn(data, message);
        setTimeout(async function () {
          const mort_t1 = await client.WerewolfTurnEND(message);
          if (mort_t1 == -1) {
            message.channel.send(`Personne n'est mort cette nuit`);
          } else {
            message.channel.send(`${mort_t1} est mort cette nuit, tué par les loup-garous.`);
          }

          if (data.alive_villagers == true) {
            client.VillagerTurn(data, message);
          }
        }, 30000);
      }

      setTimeout(async function () {
        var mort;
        mort = await client.WerewolfTurnEND(data, message);
      }, 30000);
      break;*/
    }
    default: {
      message.reply("La commande que vous avez entré est incorrecte.");
    }
  }
};
