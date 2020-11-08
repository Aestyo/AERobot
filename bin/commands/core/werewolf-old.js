module.exports.run = async (client, message, args) => {
  cmd = args[0];
  //################################ Initialisation de la partie ################################
  switch (cmd) {
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
