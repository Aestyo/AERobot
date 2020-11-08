const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  console.log(`INFO : Envoie d'une requête à thecatapi.com...`);
  request("https://api.thecatapi.com/v1/images/search", function (err, res, body) {
    body = body.split('"');
    for (let i = 0; i < body.length; i++) {
      if (body[i].startsWith("url")) {
        const Embed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("Voilà un chat !")
          .setURL(body[i + 2])
          .setImage(body[i + 2]);
        message.channel.send(Embed);
        return;
      }
    }
  });
};
