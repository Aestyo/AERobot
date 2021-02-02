
module.exports.run = async (client, message) => {
  const Discord = require("discord.js");
  const got = require('got');
  client.log("Envoie d'une requête à thedogapi.com...", "fun");
  try {
    let ping = Date.now();
    const response = await got('https://api.thedogapi.com/v1/images/search');
    let latence = (Date.now() - ping);
    client.log(`Réponse reçue en ${latence} ms.`, "fun");
    let body = response.body.split('"');
    for (let i = 0; i < body.length; i++) {
      if (body[i].startsWith("url")) {
        const Embed = new Discord.MessageEmbed()
          .setColor("#0099ff")
          .setTitle("Voilà un chien !")
          .setURL(body[i + 2])
          .setImage(body[i + 2]);
        message.channel.send(Embed);
        return;
      }
    }
	} catch (error) {
		client.log(error.response.body, "fun", 2);
	}
};


