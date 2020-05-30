const Discord = require("discord.js");

module.exports = (client) => {
  //#######################################################################//
  client.delPlayer = async (message, i) => {
    switch (i) {
      case 0: {
        await client.updateWerewolf(message, { "players.0.id": "default_id" });
        await client.updateWerewolf(message, { "players.0.name": "default_id" });
        await client.updateWerewolf(message, { "players.0.role": "default_role" });
        await client.updateWerewolf(message, { "players.0.alive": true });
      }
      case 1: {
        await client.updateWerewolf(message, { "players.1.id": "default_id" });
        await client.updateWerewolf(message, { "players.1.name": "default_id" });
        await client.updateWerewolf(message, { "players.1.role": "default_role" });
        await client.updateWerewolf(message, { "players.1.alive": true });
      }
      case 2: {
        await client.updateWerewolf(message, { "players.2.id": "default_id" });
        await client.updateWerewolf(message, { "players.2.name": "default_id" });
        await client.updateWerewolf(message, { "players.2.role": "default_role" });
        await client.updateWerewolf(message, { "players.2.alive": true });
      }
      case 3: {
        await client.updateWerewolf(message, { "players.3.id": "default_id" });
        await client.updateWerewolf(message, { "players.3.name": "default_id" });
        await client.updateWerewolf(message, { "players.3.role": "default_role" });
        await client.updateWerewolf(message, { "players.3.alive": true });
      }
      case 4: {
        await client.updateWerewolf(message, { "players.4.id": "default_id" });
        await client.updateWerewolf(message, { "players.4.name": "default_id" });
        await client.updateWerewolf(message, { "players.4.role": "default_role" });
        await client.updateWerewolf(message, { "players.4.alive": true });
      }
      case 5: {
        await client.updateWerewolf(message, { "players.5.id": "default_id" });
        await client.updateWerewolf(message, { "players.5.name": "default_id" });
        await client.updateWerewolf(message, { "players.5.role": "default_role" });
        await client.updateWerewolf(message, { "players.5.alive": true });
      }
      case 6: {
        await client.updateWerewolf(message, { "players.6.id": "default_id" });
        await client.updateWerewolf(message, { "players.6.name": "default_id" });
        await client.updateWerewolf(message, { "players.6.role": "default_role" });
        await client.updateWerewolf(message, { "players.6.alive": true });
      }
      case 7: {
        await client.updateWerewolf(message, { "players.7.id": "default_id" });
        await client.updateWerewolf(message, { "players.7.name": "default_id" });
        await client.updateWerewolf(message, { "players.7.role": "default_role" });
        await client.updateWerewolf(message, { "players.7.alive": true });
      }
      case 8: {
        await client.updateWerewolf(message, { "players.8.id": "default_id" });
        await client.updateWerewolf(message, { "players.8.name": "default_id" });
        await client.updateWerewolf(message, { "players.8.role": "default_role" });
        await client.updateWerewolf(message, { "players.8.alive": true });
      }
      case 9: {
        await client.updateWerewolf(message, { "players.9.id": "default_id" });
        await client.updateWerewolf(message, { "players.9.name": "default_id" });
        await client.updateWerewolf(message, { "players.9.role": "default_role" });
        await client.updateWerewolf(message, { "players.9.alive": true });
      }
      case 10: {
        await client.updateWerewolf(message, { "players.10.id": "default_id" });
        await client.updateWerewolf(message, { "players.10.name": "default_id" });
        await client.updateWerewolf(message, { "players.10.role": "default_role" });
        await client.updateWerewolf(message, { "players.10.alive": true });
      }
      case 11: {
        await client.updateWerewolf(message, { "players.11.id": "default_id" });
        await client.updateWerewolf(message, { "players.11.name": "default_id" });
        await client.updateWerewolf(message, { "players.11.role": "default_role" });
        await client.updateWerewolf(message, { "players.11.alive": true });
      }
      case 12: {
        await client.updateWerewolf(message, { "players.12.id": "default_id" });
        await client.updateWerewolf(message, { "players.12.name": "default_id" });
        await client.updateWerewolf(message, { "players.12.role": "default_role" });
        await client.updateWerewolf(message, { "players.12.alive": true });
      }
      case 13: {
        await client.updateWerewolf(message, { "players.13.id": "default_id" });
        await client.updateWerewolf(message, { "players.13.name": "default_id" });
        await client.updateWerewolf(message, { "players.13.role": "default_role" });
        await client.updateWerewolf(message, { "players.13.alive": true });
      }
      case 14: {
        await client.updateWerewolf(message, { "players.14.id": "default_id" });
        await client.updateWerewolf(message, { "players.14.name": "default_id" });
        await client.updateWerewolf(message, { "players.14.role": "default_role" });
        await client.updateWerewolf(message, { "players.14.alive": true });
      }
    }
  };
  //#######################################################################//
  client.addPlayer = async (i, newPlayerID, newPlayerUsername, message) => {
    switch (i) {
      case 0: {
        await client.updateWerewolf(message, { "players.0.id": newPlayerID });
        await client.updateWerewolf(message, { "players.0.name": newPlayerUsername });
        break;
      }
      case 1: {
        await client.updateWerewolf(message, { "players.1.id": newPlayerID });
        await client.updateWerewolf(message, { "players.1.name": newPlayerUsername });
        break;
      }
      case 2: {
        await client.updateWerewolf(message, { "players.2.id": newPlayerID });
        await client.updateWerewolf(message, { "players.2.name": newPlayerUsername });
        break;
      }
      case 3: {
        await client.updateWerewolf(message, { "players.3.id": newPlayerID });
        await client.updateWerewolf(message, { "players.3.name": newPlayerUsername });
        break;
      }
      case 4: {
        await client.updateWerewolf(message, { "players.4.id": newPlayerID });
        await client.updateWerewolf(message, { "players.4.name": newPlayerUsername });
        break;
      }
      case 5: {
        await client.updateWerewolf(message, { "players.5.id": newPlayerID });
        await client.updateWerewolf(message, { "players.5.name": newPlayerUsername });
        break;
      }
      case 6: {
        await client.updateWerewolf(message, { "players.6.id": newPlayerID });
        await client.updateWerewolf(message, { "players.6.name": newPlayerUsername });
        break;
      }
      case 7: {
        await client.updateWerewolf(message, { "players.7.id": newPlayerID });
        await client.updateWerewolf(message, { "players.7.name": newPlayerUsername });
        break;
      }
      case 8: {
        await client.updateWerewolf(message, { "players.8.id": newPlayerID });
        await client.updateWerewolf(message, { "players.8.name": newPlayerUsername });
        break;
      }
      case 9: {
        await client.updateWerewolf(message, { "players.9.id": newPlayerID });
        await client.updateWerewolf(message, { "players.9.name": newPlayerUsername });
        break;
      }
      case 10: {
        await client.updateWerewolf(message, { "players.10.id": newPlayerID });
        await client.updateWerewolf(message, { "players.10.name": newPlayerUsername });
        break;
      }
      case 11: {
        await client.updateWerewolf(message, { "players.11.id": newPlayerID });
        await client.updateWerewolf(message, { "players.11.name": newPlayerUsername });
        break;
      }
      case 12: {
        await client.updateWerewolf(message, { "players.12.id": newPlayerID });
        await client.updateWerewolf(message, { "players.12.name": newPlayerUsername });
        break;
      }
      case 13: {
        await client.updateWerewolf(message, { "players.13.id": newPlayerID });
        await client.updateWerewolf(message, { "players.13.name": newPlayerUsername });
        break;
      }
      case 14: {
        await client.updateWerewolf(message, { "players.14.id": newPlayerID });
        await client.updateWerewolf(message, { "players.14.name": newPlayerUsername });
        break;
      }
      case 15: {
        await client.updateWerewolf(message, { "players.15.id": newPlayerID });
        await client.updateWerewolf(message, { "players.15.name": newPlayerUsername });
        break;
      }
    }
    return;
  };
  //#######################################################################//
  client.CanStart = async (data, message) => {
    // Vérifications internes
    EnoughPlayers = async (data) => {
      let i = await client.countplayers(data);
      if (i != data.player_max) {
        var peuple = data.player_max - i;
        message.channel.send(`Il manque des joueurs pour lancer la partie. ( **${peuple}** joueurs manquants )`);
        return false;
      } else {
        return true;
      }
    };
    EnoughSides = async (data, message) => {
      var isWerewolf = false;
      var isVillager = false;
      for (let i = 0; i < data.roles.length; i++) {
        if (data.roles[i] == ":wolf: Loup-Garou") {
          isWerewolf = true;
        }
        if (data.roles[i] == ":ear_of_rice: Villageois" || data.roles[i] == ":test_tube: Sorcière" || data.roles[i] == ":dart: Chasseur") {
          isVillager = true;
        }
      }
      if (isWerewolf == true && isVillager == true) {
        return true;
      } else {
        message.channel.send(`La configuration des rôles est incorrecte, il faut deux camps opposés pour pouvoir lancer une partie.`);
        return false;
      }
    };
    // Vérification que tout est bon :ok_hand:
    if ((await EnoughPlayers(data, message)) == true && (await EnoughSides(data, message)) == true) {
      return true;
    } else {
      return false;
    }
  };
  //#######################################################################//
  client.AttributeRoles = async (data, message) => {
    roles = data.roles;
    roles = await client.shuffle(roles);
    if (data.players[0] != undefined) {
      await client.updateWerewolf(message, { "players.0.role": roles[0] });
    }
    if (data.players[1] != undefined) {
      await client.updateWerewolf(message, { "players.1.role": roles[1] });
    }
    if (data.players[2] != undefined) {
      await client.updateWerewolf(message, { "players.2.role": roles[2] });
    }
    if (data.players[3] != undefined) {
      await client.updateWerewolf(message, { "players.3.role": roles[3] });
    }
    if (data.players[4] != undefined) {
      await client.updateWerewolf(message, { "players.4.role": roles[4] });
    }
    if (data.players[5] != undefined) {
      await client.updateWerewolf(message, { "players.5.role": roles[5] });
    }
    if (data.players[6] != undefined) {
      await client.updateWerewolf(message, { "players.6.role": roles[6] });
    }
    if (data.players[7] != undefined) {
      await client.updateWerewolf(message, { "players.7.role": roles[7] });
    }
    if (data.players[8] != undefined) {
      await client.updateWerewolf(message, { "players.8.role": roles[8] });
    }
    if (data.players[9] != undefined) {
      await client.updateWerewolf(message, { "players.9.role": roles[9] });
    }
    if (data.players[10] != undefined) {
      await client.updateWerewolf(message, { "players.10.role": roles[10] });
    }
    if (data.players[11] != undefined) {
      await client.updateWerewolf(message, { "players.11.role": roles[11] });
    }
    if (data.players[12] != undefined) {
      await client.updateWerewolf(message, { "players.12.role": roles[12] });
    }
    if (data.players[13] != undefined) {
      await client.updateWerewolf(message, { "players.13.role": roles[13] });
    }
    if (data.players[14] != undefined) {
      await client.updateWerewolf(message, { "players.14.role": roles[14] });
    }
  };
  //#######################################################################//
  client.Launchmessage = async (message, data) => {
    var villagerSide = " ";
    var werewolfSide = " ";
    for (let i = 0; i < data.roles.length; i++) {
      if (data.roles[i] == ":wolf: Loup-Garou") {
        werewolfSide = werewolfSide + `- ${data.roles[i]}\n`;
      }
      if (data.roles[i] == ":ear_of_rice: Villageois" || data.roles[i] == ":test_tube: Sorcière" || data.roles[i] == ":dart: Chasseur") {
        villagerSide = villagerSide + `- ${data.roles[i]}\n`;
      }
    }
    var list_joueurs = " ";
    for (let j = 0; j < data.player_max; j++) {
      list_joueurs = list_joueurs + "- " + data.players[j].name + "\n";
    }

    const launchMessage = new Discord.MessageEmbed()
      .setColor("#ff2929")
      .setTitle(`**ÆRobot** - __Loup-Garou__`)
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
      .setDescription(`Une partie de loup-garou commence dans le serveur __**${message.guild}**__\nDans le channel ${message.channel} \nAvec l'identifiant : [**${data.id}**] `)
      .setThumbnail("https://imgur.com/qtf3pl8.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
      .addField(`**Liste des joueurs :**`, `${list_joueurs}`, false)
      .addField(`**Camp des villageois :**`, `${villagerSide}`, true)
      .addField(`**Camp des loup-garous :**`, `${werewolfSide}`, true)
      .setImage("https://imgur.com/EirEEMG.png");
    message.channel.send(launchMessage);
  };
  //#######################################################################//
  client.Werewolfvote = async (data, message, vote) => {
    const hexid = data.id;
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
  };
  //#######################################################################//
  client.Folkvote = async (data, message, vote) => {
    switch (vote) {
      case 0: {
        newData = data.players[0].folk_votes + 1;
        await client.updateWerewolf(message, { "players.0.folk_votes": newData });
        break;
      }
      case 1: {
        newData = data.players[1].folk_votes + 1;
        await client.updateWerewolf(message, { "players.1.folk_votes": newData });
        break;
      }
      case 2: {
        newData = data.players[2].folk_votes + 1;
        await client.updateWerewolf(message, { "players.2.folk_votes": newData });
        break;
      }
      case 3: {
        newData = data.players[3].folk_votes + 1;
        await client.updateWerewolf(message, { "players.3.folk_votes": newData });
        break;
      }
      case 4: {
        newData = data.players[4].folk_votes + 1;
        await client.updateWerewolf(message, { "players.4.folk_votes": newData });
        break;
      }
      case 5: {
        newData = data.players[5].folk_votes + 1;
        await client.updateWerewolf(message, { "players.5.folk_votes": newData });
        break;
      }
      case 6: {
        newData = data.players[6].folk_votes + 1;
        await client.updateWerewolf(message, { "players.6.folk_votes": newData });
        break;
      }
      case 7: {
        newData = data.players[7].folk_votes + 1;
        await client.updateWerewolf(message, { "players.7.folk_votes": newData });
        break;
      }
      case 8: {
        newData = data.players[1].folk_votes + 8;
        await client.updateWerewolf(message, { "players.8.folk_votes": newData });
        break;
      }
      case 9: {
        newData = data.players[9].folk_votes + 1;
        await client.updateWerewolf(message, { "players.9.folk_votes": newData });
        break;
      }
      case 10: {
        newData = data.players[10].folk_votes + 1;
        await client.updateWerewolf(message, { "players.10.folk_votes": newData });
        break;
      }
      case 11: {
        newData = data.players[11].folk_votes + 1;
        await client.updateWerewolf(message, { "players.11.folk_votes": newData });
        break;
      }
      case 12: {
        newData = data.players[12].folk_votes + 1;
        await client.updateWerewolf(message, { "players.12.folk_votes": newData });
        break;
      }
      case 13: {
        newData = data.players[13].folk_votes + 1;
        await client.updateWerewolf(message, { "players.13.folk_votes": newData });
        break;
      }
      case 14: {
        newData = data.players[14].folk_votes + 1;
        await client.updateWerewolf(message, { "players.14.folk_votes": newData });
        break;
      }
      case 15: {
        newData = data.players[15].folk_votes + 1;
        await client.updateWerewolf(message, { "players.15.folk_votes": newData });
        break;
      }
    }
  };
  //#######################################################################//
  client.VerifAliveWerewolf = async (hexid) => {
    const data = await client.getWerewolfID(hexid);
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].roles == ":wolf: Loup-Garou" || data.players[i].alive == true) {
        //await client.updateWerewolfID(hexid, { alive_wolves: true });
        return true;
      } else {
        return false;
      }
    }
  };
  //#######################################################################//
  client.VerifAliveVillager = async (hexid) => {
    const data = await client.getWerewolfID(hexid);
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].roles == ":ear_of_rice: Villagois" || data.players[i].alive == true) {
        await client.updateWerewolfID(hexid, { alive_villager: true });
        return;
      }
    }
  };
  //#######################################################################//
  client.listAlivePlayers = async (data) => {
    var list_joueurs_vivants = " ";
    for (let c = 0; c < data.player_max; c++) {
      if (data.players[c].alive == true) {
        list_joueurs_vivants = list_joueurs_vivants + "- " + data.players[c].name + "\n";
      }
    }
    return list_joueurs_vivants;
  };
  //#######################################################################//
  client.WerewolfTurn = async (data, message) => {
    //await client.updateWerewolf(message, { werewolf_phase: true });
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].role == ":wolf: Loup-Garou") {
        joueur = client.users.cache.get(data.players[i].id);
        const Embed = new Discord.MessageEmbed()
          .setColor("#ff2929")
          .setTitle(`**ÆRobot** - __Loup-Garou__`)
          .setURL("https://github.com/Aestyo/AERobot")
          .setAuthor(joueur.username, joueur.avatarURL(), `https://discordapp.com/users/${data.players[i].id}`)
          .setDescription(`Vous vous réveillez dans la nuit, avec une soudaine envie de dévorer quelqu'un ! Mais qui allez-vous choisir ? Faites \"/werewolf target **${data.id}** *[numéro de joueur]* \" pour en décider !`)
          .setThumbnail("https://imgur.com/qtf3pl8.png")
          .setTimestamp()
          .setFooter("Powered by Æstyo Corp. ( Ne pas mettre les crochets pour le numéro de joueur )", "https://imgur.com/jX0U1XY.png");
        for (let i = 0; i < data.player_max; i++) {
          if (data.players[i].alive == false) {
            Embed.addField(`Cible n°${i + 1} :`, `- **${data.players[i].name}** :skull:`, false);
          } else if (data.players[i].role == ":wolf: Loup-Garou") {
            Embed.addField(`Cible n°${i + 1} :`, `- **${data.players[i].name}** :wolf:`, false);
          } else {
            Embed.addField(`Cible n°${i + 1} :`, `- **${data.players[i].name}**`, false);
          }
        }
        joueur.send(Embed);
      }
    }
  };
  //#######################################################################//
  client.WerewolfTurnEND = async (data, message) => {
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
        break;
      }
      case 1: {
        await client.updateWerewolf(message, { "players.1.alive": false });
        break;
      }
      case 2: {
        await client.updateWerewolf(message, { "players.2.alive": false });
        break;
      }
      case 3: {
        await client.updateWerewolf(message, { "players.3.alive": false });
        break;
      }
      case 4: {
        await client.updateWerewolf(message, { "players.4.alive": false });
        break;
      }
      case 5: {
        await client.updateWerewolf(message, { "players.5.alive": false });
        break;
      }
      case 6: {
        await client.updateWerewolf(message, { "players.6.alive": false });
        break;
      }
      case 7: {
        await client.updateWerewolf(message, { "players.7.alive": false });
        break;
      }
      case 8: {
        await client.updateWerewolf(message, { "players.8.alive": false });
        break;
      }
      case 9: {
        await client.updateWerewolf(message, { "players.9.alive": false });
        break;
      }
      case 10: {
        await client.updateWerewolf(message, { "players.10.alive": false });
        break;
      }
      case 11: {
        await client.updateWerewolf(message, { "players.11.alive": false });
        break;
      }
      case 12: {
        await client.updateWerewolf(message, { "players.12.alive": false });
        break;
      }
      case 13: {
        await client.updateWerewolf(message, { "players.13.alive": false });
        break;
      }
      case 14: {
        await client.updateWerewolf(message, { "players.14.alive": false });
        break;
      }
    }
    return victime_name;
  };
  //#######################################################################//
  client.VillagerTurn = async (data, message) => {
    var Village = [];
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].alive == true) {
        Village.push(data.players[i].name);
        return;
      }
    }
    const EmbedDay = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`**ÆRobot** - __Loup-Garou : Jour__`)
      .setURL("https://github.com/Aestyo/AERobot")
      .setDescription(`C'est le matin dans le village __**${message.guild}**__,`)
      .setThumbnail("https://imgur.com/NmOO01x.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png")
      .setImage("https://imgur.com/D2y6TTT.png")
      .addField(`Il reste encore des villageois, les voicis :`, `${Village}`, true)
      .addField(`Il est temps de choisir qui le village va pendre aujourd'hui.`, `Faites "/werewolf vote [n° de joueur]" dans ce channel.`, false);
    message.channel.send(EmbedDay);
  };
};
