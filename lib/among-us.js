const Discord = require("discord.js");
create = async (client, message, settings) => {
  const game = {
    accepted: Array,
    maybe: Array,
    rejected: Array,
    channelID: Number,
    channelName: String,
    Hours: Number,
    Minutes: Number,
  };

  let param = Object.create(game);
  param.accepted = [];
  param.maybe = [];
  param.rejected = [];
  param.channelID = message.channel.id;
  param.channelName = message.channel.name;
  param.Hours = settings[0].toString().padStart(2, "0");
  param.Minutes = settings[1].toString().padStart(2, "0");
  client.createAmongUs(param);

  // Message de réponse à l'utilisateur
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("**ÆRobot** - __Among Us__")
    .setURL("https://github.com/Aestyo/AERobot")
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setDescription(
      `Un vaisseau va bientôt décoller ici !\n\nPour rejoindre l'équipage faites \`\`/among-us accept\`\` ou cliquez sur le bouton **vert**, vous serez notifiés avant le départ dans l'espace !\n\nSi vous n'êtes pas sûr de pouvoir le rejoindre faites \`\`/among-us maybe\`\` ou cliquez sur le bouton **orange** vous serez tout de même notifiés si il manque des membres avant de partir !\n\nSi vous en avez marre de manger des sachets déshydratés faites \`\`/among-us decline\`\` ou cliquez sur le bouton **rouge**.`
    )
    .setThumbnail("https://imgur.com/WKT0ChX.png")
    .addFields({
      name: `__Heure de début de partie :__ **${settings[0]}h${settings[1]}**`,
      value: `\u200B`,
    })
    .setImage("https://imgur.com/TXccpEL.png")
    .setTimestamp()
    .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

  let messageEmbed = await message.channel.send(Embed);
  messageEmbed
    .react("🟢")
    .then(() => messageEmbed.react("🟠"))
    .then(() => messageEmbed.react("🔴"));
  message.channel.send(
    ":warning: *LES RÉACTIONS SONT ENCORE EN WORK-IN-PROGRESS* :warning:"
  );
  return;
};

help = async (message) => {
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("**ÆRobot** - __Among Us__")
    .setURL("https://github.com/Aestyo/AERobot")
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setThumbnail("https://imgur.com/WKT0ChX.png")
    .addFields({
      name: `<:amongus:776469650128109609>__**Commande du Among Us :**__`,
      value: `\n**\`\`/among-us create [Heure]:[Minute]\`\`** - Crée une partie d'Among Us liée à ce salon textuel, elle nécessite une heure/minute précise sans les crochets.
            \n**\`\`/among-us accept\`\`** - Vous fais rejoindre la partie d'Among Us liée au salon textuel dans lequel vous entrez la commande.
            \n**\`\`/among-us maybe\`\`** - Vous fais rejoindre la partie d'Among Us liée au salon textuel dans lequel vous entrez la commande mais en précisant que vous n'êtes pas sûr d'être là.
            \n**\`\`/among-us decline\`\`** - Vous fais quitter ou refuser la partie d'Among Us liée au salon textuel dans lequel vous entrez la commande.
            \n**\`\`/among-us lobby\`\`** - Affiche les joueurs présents et l'heure prévue de la partie d'Among Us liée au salon textuel dans lequel vous entrez la commande.
            \n**\`\`/among-us help\`\`** - Affiche ce message.
            `,
    })
    .setTimestamp()
    .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
  message.channel.send(Embed);
};

call = async () => {
  message.channel.id = args[1];
  const data = await client.getAmongUs(message);
  if (data == -1)
    return message.channel.send(
      `Il n'y a pas de partie d'Among Us en préparation dans ce salon.`
    );
  let i;
  for (i = 0; i < 10; i++) {
    if (data.accepted[i] == undefined) {
      break;
    }
  }
  if (i < 6) {
    const EmbedFail = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Among Us__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setDescription(
        `Il n'y a pas assez de joueurs inscrit pour débuter la partie d'Among Us.`
      )
      .setThumbnail("https://imgur.com/WKT0ChX.png")
      .addFields(
        { name: "__Joueurs présents :__", value: `**${i}**` },
        { name: "__Joueurs nécessaires :__", value: `**6** ou plus` },
        { name: "\u200B", value: "\u200B" }
      )
      .setImage("https://imgur.com/TXccpEL.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    message.channel.send(EmbedFail);
    return;
  }
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("**ÆRobot** - __Among Us__")
    .setURL("https://github.com/Aestyo/AERobot")
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setDescription(
      `Vous vous êtes inscrit pour une partie d'Among Us qui va bientôt débuter !`
    )
    .setThumbnail("https://imgur.com/WKT0ChX.png")
    .addFields(
      { name: "__Heure de début :__", value: `**${data.H}h${data.M}**` },
      { name: "__Serveur de la partie :__", value: `**${data.guildName}**` },
      { name: "__Salon de la partie :__", value: `**${data.channelName}**` },
      { name: "\u200B", value: "\u200B" }
    )
    .setImage("https://imgur.com/TXccpEL.png")
    .setTimestamp()
    .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
  for (let i = 0; i < 10; i++) {
    if (data.accepted[i] != undefined) {
      user = await client.users.fetch(data.accepted[i]);
      await client.users.cache.get(data.accepted[i]).send(Embed);
    }
  }
};

exports.create = create;
exports.help = help;
exports.call = call;
