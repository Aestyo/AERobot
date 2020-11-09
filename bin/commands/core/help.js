const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  message.author.send(":robot: Commandes disponible pour **ÆRobot**");
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setThumbnail("https://cdn.discordapp.com/attachments/690260695186800641/698285002634297415/help.png")
    .addFields({
      name: "Commandes générales :",
      value:
        "```/aide - Affiche cette page``````/ping - Affiche la latence réseau du robot``````/cat - Affiche une mignonne image de chat``````/meme - Affiche un élément de r/Meme``````/clear [Nombre] - Supprime le nombre de message entré``````/spam [Nombre] - Envoie le nombre de message entré``````/tocard - Essaie pour voir```",
      inline: false,
    })
    .addFields({
      name: "Commandes vocales :",
      value: "```/join - Rejoins le channel vocal``````/leave - Quitte le channel vocal``````/ntm - Nique ta mère```",
      inline: false,
    })
    .setFooter("Powered by Æstyo Corp.", "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png");
  message.author.send(Embed);
  message.channel.send("La liste des commandes vous a été envoyée en message privé.");
};
