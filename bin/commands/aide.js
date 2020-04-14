const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const Embed = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("**ÆRobot** - __Aide__")
    .setURL("https://github.com/Aestyo/AERobot")
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setDescription("Liste des commandes :")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/690260695186800641/698285002634297415/help.png"
    )
    .addFields(
      {
        name: "/aide [ n° de page ]",
        value: "Affiche la liste des commandes que vous êtes en train de lire.",
        inline: false,
      },
      {
        name: "/ping",
        value: "Affiche la latence du bot en millisecondes.",
        inline: false,
      },
      {
        name: "/meme",
        value: "Affiche un meme de qualité récupérer sur Reddit.",
        inline: false,
      },
      {
        name: "/blague",
        value:
          "Affiche une blague ( pas toujours drôle ) composée par Gabriel.",
        inline: false,
      }
      /*{ name: "/", value: "Test", inline: false },
      { name: "Test", value: "Test", inline: false },
      { name: "Test", value: "Test", inline: false },
      { name: "Test", value: "Test", inline: false },
      { name: "Test", value: "Test", inline: false },
      { name: "Test", value: "Test", inline: false },
      { name: "Test", value: "Test", inline: false },*/
    )
    .setTimestamp()
    .setFooter(
      "Powered by Æstyo Corp.",
      "https://cdn.discordapp.com/attachments/690260695186800641/694704170946527253/AvatarFire.png"
    );
  message.author.send(Embed);
  message.channel.send(
    "La liste des commandes vous a été envoyée en message privé."
  );
};
