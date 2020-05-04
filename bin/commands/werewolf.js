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
      console.log(i);
      if (i == data.player_max) {
        message.channel.send('La partie est pleine. Faites "/werewolf launch" pour démarrer.');
        break;
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
        message.channel.send(`Il y a actuellement **${i}** joueurs dans la partie. ( ${str} )`);
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
    //################################ Démarrage de la partie ################################
    case "target": {
      const data = await client.getWerewolfID(args[2]);
      for (let i = 0; i < data.player_max; i++) {
        if (data.players[i].id == message.author.id) {
          message.channel.send(`Vous êtes ${data.players[i].username}`);
        }
      }
    }
    //################################ Démarrage de la partie ################################
    case "launch": {
      const Discord = require("discord.js");
      const data = await client.getWerewolf(message);

      let i = await client.countplayers(data);
      if (i != data.player_max) {
        var peuple = data.player_max - i + 1;
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

      const Embed = new Discord.MessageEmbed()
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
      message.channel.send(Embed);
      client.AttributeRoles(data, message);

      const EmbedNight1 = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle(`**ÆRobot** - __Loup-Garou : Nuit n°1__`)
        .setURL("https://github.com/Aestyo/AERobot")
        .setDescription(`Première nuit dans le village __**${message.guild}**__,`)
        .setThumbnail("https://imgur.com/ObY0zTV.png")
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
        .setImage("https://imgur.com/RibgTU7.png");

      //Tour des loup-garous
      EmbedNight1.addField(`Vérifiez vos messages privés car :`, `C'est au tour des :wolf: **Loup-garous** de chosir une cible !`, true);
      for (let i = 0; i < data.player_max; i++) {
        if (data.players[i].role == ":wolf: Loup-Garou") {
          await client.WerewolfEmbed(data, i);
        }
      }
      message.channel.send(EmbedNight1);

      break;
    }
  }
};
