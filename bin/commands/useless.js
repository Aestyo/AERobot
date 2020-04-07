const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => {
  console.log(`INFO : Envoie d'une requête à numbersapi.com...`);
  let debut = Date.now();
  request("http://numbersapi.com/random/trivia", function (err, res, body) {
    let latence = (Date.now() - debut) / 10 + 60;
    console.log(
      `INFO : Réponse reçue en ${latence} ms. Réponse reçue : ${body}`
    );
    message.reply(`Voici un fait bien inutile pour vous :`);
    message.channel.send(`${body}`);
  });
};

module.exports.help = {
  name: "useless",
};
