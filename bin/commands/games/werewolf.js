module.exports.run = async (client, message, args) => {
  cmd = args[0];
  switch (cmd) {
    case "create":{ // Création de la partie
      const data = await client.getWerewolf(message);
      if (data != -1) return message.channel.send('Il y a déjà une partie de loup-garou ce salon. Faites "/werewolf join" pour la rejoindre.');
      await client.createGame(client, message, args);
      break;
    }
    case "quick-create":{ // Création de la partie rapide
      const data = await client.getWerewolf(message);
      if (data != -1) return message.channel.send('Il y a déjà une partie de loup-garou ce salon. Faites "/werewolf join" pour la rejoindre.');
      await client.quickcreateGame(client, message, args);
      break;
    }
    default: {
      message.channel.send("La commande entrée est incorrecte.");
    }
  }
};
