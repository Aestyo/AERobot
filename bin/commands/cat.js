const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  console.log(`INFO : Envoie d'une requête à thecatapi.com...`);
  let debut = Date.now();
  request("https://api.thecatapi.com/v1/images/search", function (
    err,
    res,
    body
  ) {
    let latence = (Date.now() - debut) / 10 + 60;
    body = body.split('"');
    console.log(
      `INFO : Réponse reçue en ${latence} ms. Réponse reçue : ${body[9]}`
    );
    message.reply(`Voilà un chat ! `);
    message.channel.send(`${body[9]}`);
  });
};

module.exports.help = {
  name: "cat",
};
