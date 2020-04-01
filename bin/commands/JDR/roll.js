const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var total = 0;
  const commande = args[0].split("d");
  if (commande[0] > 25)
    return message.channel.send(
      "Vous ne pouvez pas lancer plus de 25 dés à la fois."
    );
  if (isNaN(commande[0]) || isNaN(commande[1]))
    return message.channel.send(
      "Vous ne devenez entrer que des nombres dans cette commande."
    );
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("**ÆRobot** - __Lancé de dé__")
    .setURL("https://github.com/Aestyo/AERobot")
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      "https://roll20.net/"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/690260695186800641/694692567517757460/rollingdices.png"
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/690260695186800641/694703370195173406/jdr.png"
    )
    .setTimestamp()
    .setFooter(
      "Powered by Æstyo Corp.",
      "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
    );
  for (let i = 0; i < commande[0]; i++) {
    var roll = new Array(commande[0]);
    roll[i] = Math.floor(Math.random() * commande[1] + 1);
    total = total + roll[i];
    Embed.addFields({
      name: `Tirage du dé ${i + 1}`,
      value: `${roll[i]} / 100`,
      inline: true
    });
  }
  if (args[1] == undefined) {
    Embed.setDescription(
      "Lancé de " + commande[0] + " dé(s) de " + commande[1] + " faces."
    );
    Embed.addFields({
      name: "__**Total des dés jetés**__ :",
      value: `${total} / ${commande[0] * commande[1]}`
    });
  } else {
    const add = args[1].split("+");
    Embed.setDescription(
      "Lancé de " +
        commande[0] +
        " dé(s) de " +
        commande[1] +
        " faces + " +
        add[1] +
        "."
    );
    Embed.addFields({
      name: "__**Total des dés jetés**__ :",
      value: `${total + parseInt(add[1])} / ${commande[0] * commande[1] +
        parseInt(add[1])}`
    });
  }
  message.channel.send(Embed);
};
