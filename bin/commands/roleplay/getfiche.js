const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const data = await client.getFiche(message);
  if (data == -1)
    return message.channel.send(
      "Pour pouvoir faire cette commande il faut que vous ayez une fiche personnage."
    );
  var Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("**ÆRobot** - __Fiche personnage__")
    .setURL("https://github.com/Aestyo/AERobot")
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setDescription(
      `Voici les informations et caractéristiques du personnage de  ${message.author.username}`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/690260695186800641/697123503442362458/sheet.png"
    )
    .addFields(
      { name: "Identité :", value: `**${data.Nom}**` },
      { name: "Genre :", value: `**${data.Sexe}**` },
      { name: "Âge :", value: `**${data.Age}**` },
      { name: "Métier :", value: `**${data.Métier}**` },
      { name: "Occupations :", value: `**${data.Occupation}**` },
      {
        name: "Points de vie",
        value: `${data.HealthPoint} / ${data.HealthPointMax}`,
      },
      {
        name: "Santé mentale",
        value: `${data.SanityPoint} / ${data.SanityPointMax}`,
      },
      { name: "\u200B", value: "\u200B" },
      { name: "Force", value: `**${data.Force}** / 21`, inline: true },
      {
        name: "Constitution",
        value: `**${data.Constitution}** / 21`,
        inline: true,
      },
      { name: "Dextérité", value: `**${data.Dextérité}** / 21`, inline: true },
      { name: "Apparence", value: `**${data.Apparence}** / 21`, inline: true },
      {
        name: "Intelligence",
        value: `**${data.Intelligence}** / 21`,
        inline: true,
      },
      { name: "Volonté", value: `**${data.Volonté}** / 21`, inline: true },
      { name: "Éducation", value: `**${data.Éducation}** / 21`, inline: true }
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/690260695186800641/697124225609367582/jdr.png"
    )
    .setTimestamp()
    .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
  if (data.Folie != "Aucune") {
    Embed.addFields(
      { name: "\u200B", value: "\u200B" },
      { name: "Folie(s) : ", value: `**${data.Folie}**` }
    );
  }
  if (data.Inventaire == "") {
    Embed.addFields({
      name: "Objets de l'inventaire :",
      value: `Rien du tout.`,
    });
  } else {
    const inventaire = data.Inventaire.split("§");
    Embed.addFields({
      name: "Objets de l'inventaire :",
      value: `${inventaire.join("\n")}`,
    });
  }
  message.channel.send(Embed);
};

module.exports.help = {
  name: "getfiche",
};