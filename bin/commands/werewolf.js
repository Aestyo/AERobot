const mongoose = require("mongoose");

module.exports.run = async (client, message, args) => {
  cmd = args[0];

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
    //################################ Accession à la partie ################################
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
      await client.updateWerewolf(message, { custom_roles: roles });
      await client.updateWerewolf(message, { setup_roles: true });
      message.channel.send(roles);
      break;
    }
    //################################ Target lg nuit ################################
    case "target": {
      const hexid = args[1];
      const data = await client.getWerewolfID(hexid);
      const vote = parseInt(args[2], 10) - 1;

      switch (vote) {
        case 0: {
          newData = data.players[0].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.0.ww_votes": newData });
          break;
        }
        case 1: {
          newData = data.players[1].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.1.ww_votes": newData });
          break;
        }
        case 2: {
          newData = data.players[2].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.2.ww_votes": newData });
          break;
        }
        case 3: {
          newData = data.players[3].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.3.ww_votes": newData });
          break;
        }
        case 4: {
          newData = data.players[4].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.4.ww_votes": newData });
          break;
        }
        case 5: {
          newData = data.players[5].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.5.ww_votes": newData });
          break;
        }
        case 6: {
          newData = data.players[6].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.6.ww_votes": newData });
          break;
        }
        case 7: {
          newData = data.players[7].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.7.ww_votes": newData });
          break;
        }
        case 8: {
          newData = data.players[1].ww_votes + 8;
          await client.updateWerewolfID(hexid, { "players.8.ww_votes": newData });
          break;
        }
        case 9: {
          newData = data.players[9].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.9.ww_votes": newData });
          break;
        }
        case 10: {
          newData = data.players[10].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.10.ww_votes": newData });
          break;
        }
        case 11: {
          newData = data.players[11].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.11.ww_votes": newData });
          break;
        }
        case 12: {
          newData = data.players[12].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.12.ww_votes": newData });
          break;
        }
        case 13: {
          newData = data.players[13].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.13.ww_votes": newData });
          break;
        }
        case 14: {
          newData = data.players[14].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.14.ww_votes": newData });
          break;
        }
        case 15: {
          newData = data.players[15].ww_votes + 1;
          await client.updateWerewolfID(hexid, { "players.15.ww_votes": newData });
          break;
        }
      }
      var auteur = -1;
      for (let i = 0; i < data.player_max; i++) {
        if (data.players[i].id == message.author.id) {
          auteur = i;
        }
      }
      for (let i = 0; i < data.player_max; i++) {
        if (data.players[i].role == ":wolf: Loup-Garou") {
          joueur = client.users.cache.get(data.players[i].id);
          joueur.send(`**${data.players[auteur].name}** a voté pour **${data.players[vote].name}** !`);
        }
      }
      break;
    }
    //################################ Démarrage de la partie ################################
    case "launch": {
      const Discord = require("discord.js");
      const data = await client.getWerewolf(message);
      const hexid = data.id;

      let i = await client.countplayers(data);
      if (i != data.player_max) {
        var peuple = data.player_max - i;
        message.channel.send(`Il manque des joueurs pour lancer la partie. ( **${peuple}** joueurs manquants )`);
        return;
      }

      var list_roles = " ";
      for (let i = 0; i < data.custom_roles.length; i++) {
        list_roles = list_roles + "- " + data.custom_roles[i] + "\n";
      }
      var list_joueurs = " ";
      for (let j = 0; j < data.player_max; j++) {
        list_joueurs = list_joueurs + "- " + data.players[j].name + "\n";
      }

      client.AttributeRoles(data, message);
      client.VerifAliveVillager(hexid);
      if (data.alive_villager == false) {
        message.channel.send("Il n'y a aucun villagois dans cette partie.");
        break;
      }
      client.VerifAliveWerewolf(hexid);
      if (data.alive_wolves == false) {
        message.channel.send("Il n'y a aucun loup-garou dans cette partie.");
        break;
      }

      // Démarrage de la partie ( fin de la phase de vérification )
      const Starting = new Discord.MessageEmbed()
        .setColor("#ff2929")
        .setTitle(`**ÆRobot** - __Loup-Garou__`)
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setDescription(`Une partie de loup-garou commence dans le serveur ${message.guild} - ID : [**${data.id}**] `)
        .setThumbnail("https://imgur.com/qtf3pl8.png")
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
        .addField(`**Liste des rôles :**`, `${list_roles}`, true)
        .addField(`**Liste des joueurs :**`, `${list_joueurs}`, true)
        .setImage("https://imgur.com/EirEEMG.png");
      message.channel.send(Starting);

      const EmbedNight = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle(`**ÆRobot** - __Loup-Garou : Nuit__`)
        .setURL("https://github.com/Aestyo/AERobot")
        .setDescription(`C'est la nuit dans le village __**${message.guild}**__,`)
        .setThumbnail("https://imgur.com/ObY0zTV.png")
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
        .setImage("https://imgur.com/DmESron.png")
        .addField(`Vérifiez vos messages privés car :`, `C'est au tour des :wolf: **Loup-garous** de chosir une cible !`, true);
      message.channel.send(EmbedNight);

      // Tour des loup-garous début
      for (let i = 0; i < data.player_max; i++) {
        if (data.players[i].role == ":wolf: Loup-Garou") {
          await client.WerewolfEmbed(data, i);
        }
      }
      // Tour des loup-garous fin
      async function FinWerewolfTurn(data, message) {
        var Arrayvote = [];
        var victime;
        var victime_name;
        for (let i = 0; i < data.player_max; i++) {
          Arrayvote.push(data.players[i].ww_votes);
        }
        const isBelowThreshold = (currentValue) => currentValue < 1;
        if (Arrayvote.every(isBelowThreshold) == true) {
          result = -1;
        } else {
          result = Math.max(...Arrayvote);
          for (let j = 0; j < data.player_max; j++) {
            if (data.players[j].ww_votes == result) {
              victime = j;
              victime_name = data.players[j].name;
              break;
            }
          }
        }
        for (let k = 0; k < data.player_max; k++) {
          if (data.players[k].role == ":wolf: Loup-Garou") {
            joueur = client.users.cache.get(data.players[k].id);
            if (result != -1) {
              joueur.send(`Les loup-garous ont décidé d'éliminer **${victime_name}**`);
            } else {
              joueur.send("Les loup-garous n'ont pas réussit à se décider cette nuit.");
            }
          }
        }
        switch (victime) {
          case 0: {
            await client.updateWerewolf(message, { "players.0.alive": false });
          }
          case 1: {
            await client.updateWerewolf(message, { "players.1.alive": false });
          }
          case 2: {
            await client.updateWerewolf(message, { "players.2.alive": false });
          }
          case 3: {
            await client.updateWerewolf(message, { "players.3.alive": false });
          }
          case 4: {
            await client.updateWerewolf(message, { "players.4.alive": false });
          }
          case 5: {
            await client.updateWerewolf(message, { "players.5.alive": false });
          }
          case 6: {
            await client.updateWerewolf(message, { "players.6.alive": false });
          }
          case 7: {
            await client.updateWerewolf(message, { "players.7.alive": false });
          }
          case 8: {
            await client.updateWerewolf(message, { "players.8.alive": false });
          }
          case 9: {
            await client.updateWerewolf(message, { "players.9.alive": false });
          }
          case 10: {
            await client.updateWerewolf(message, { "players.10.alive": false });
          }
          case 11: {
            await client.updateWerewolf(message, { "players.11.alive": false });
          }
          case 12: {
            await client.updateWerewolf(message, { "players.12.alive": false });
          }
          case 13: {
            await client.updateWerewolf(message, { "players.13.alive": false });
          }
          case 14: {
            await client.updateWerewolf(message, { "players.14.alive": false });
          }
        }
        return victime_name;
      }
      setTimeout(async function () {
        var mort;
        mort = await FinWerewolfTurn(data, message);
        const EmbedDay = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle(`**ÆRobot** - __Loup-Garou : Jour__`)
          .setURL("https://github.com/Aestyo/AERobot")
          .setDescription(`C'est le matin dans le village __**${message.guild}**__,`)
          .setThumbnail("https://imgur.com/NmOO01x.png")
          .setTimestamp()
          .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
          .setImage("https://imgur.com/D2y6TTT.png");
        if (mort == undefined) {
          EmbedDay.addField(`Ce matin vous retrouvez :`, `Personne!`, true);
        } else {
          EmbedDay.addField(`Ce matin vous retrouvez :`, `**${mort}** mort dans son lit !`, true);
        }
        EmbedDay.addField(`Il est temps de choisir qui le village va pendre aujourd'hui.`, `Faites "/werewolf vote [n° de joueur]" dans ce channel.`, false);
        message.channel.send(EmbedDay);
      }, 3000);
      break;
    }
  }
};
