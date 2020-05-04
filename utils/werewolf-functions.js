const Discord = require("discord.js");

module.exports = (client) => {
  //#######################################################################//
  client.newGame = async (message, args, hexadecimal) => {
    var array = [];
    const player = {
      id: "default_id",
      name: "default_name",
      role: "default_role",
      alive: true,
      ww_votes: 0,
      folk_votes: 0,
      witch_vote: false,
      hunter_vote: false,
    };
    for (let i = 0; i < args[1]; i++) {
      array.push(player);
    }
    const newGame = {
      id: hexadecimal,
      guild_id: message.guild.id,
      guild_name: message.guild.name,
      player_max: args[1],
      players: array,
      setup_roles: args[2],
      custom_roles: [],
    };
    await client.createWerewolf(newGame);
  };
  //#######################################################################//
  client.countplayers = async (data) => {
    if (data == -1) {
      return -1;
    }
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].id == "default_id") {
        return i;
      }
    }
    return data.player_max;
  };
  //#######################################################################//
  client.doubleauth = async (data, message) => {
    if (data == -1) {
      message.channel.send("Il n'y a pas de partie en cours dans votre channel.");
      return 0;
    }
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].id == message.author.id) {
        message.channel.send("Vous êtes déjà dans la partie !");
        return 0;
      }
    }
    return 1;
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
  client.AttributeRoles = async (data, message) => {
    roles = data.custom_roles;
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
  client.WerewolfEmbed = async (data, i) => {
    joueur = client.users.cache.get(data.players[i].id);
    const Embed = new Discord.MessageEmbed()
      .setColor("#ff2929")
      .setTitle(`[**${data.id}**] **ÆRobot** - __Loup-Garou__`)
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(joueur.username, joueur.avatarURL(), `https://discordapp.com/users/${data.players[i].id}`)
      .setDescription(`Vous vous réveillez cette nuit, vous devez choisir qui vous allez dévorer cette nuit! ( /werewolf **${data.id}** target [joueur] )`)
      .setThumbnail("https://imgur.com/qtf3pl8.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    for (let i = 0; i < data.player_max; i++) {
      if (data.players[i].alive == false) {
        Embed.addField(`Cible n°${i + 1} :`, `- **${data.players[i].name}** :skull:`, false);
      } else if (data.players[i].role == ":wolf: Loup-Garou") {
        Embed.addField(`Cible n°${i + 1} :`, `- **${data.players[i].name}** :wolf:`, false);
      } else {
        Embed.addField(`Cible n°${i + 1} :`, `- **${data.players[i].name}** :ear_of_rice:`, false);
      }
    }
    joueur.send(Embed);
  };
  //#######################################################################//
};
