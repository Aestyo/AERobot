const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (client, message, args) => {
  console.log("INFO : Envoie d'une requête à meme-api.com...");
  let debut = Date.now();
  request("https://meme-api.herokuapp.com/gimme", function (err, res, body) {
    let latence = (Date.now() - debut) / 10 + 60;
    body = body.split('"');
    console.log(
      `INFO : Réponse reçue en ${latence} ms. Réponse reçue : ${body[15]}`
    );
    message.channel.send(`${body[15]} Titre : **${body[11]}** de /r/Memes.`);
  });
};
