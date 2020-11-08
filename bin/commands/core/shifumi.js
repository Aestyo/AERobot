const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
  if (args[0] == "début") {
    message.channel.send(
      `C'est parti pour une partie de pierre-feuille-ciseaux !`
    );
  } else if (args[0] == "pierre") {
    var choix = Math.floor(Math.random() * 3 + 1);
    if (choix == 1) {
      message.channel.send(`Je choisis la pierre !`);
    } else if (choix == 2) {
      message.channel.send(`Je choisis la feuille !`);
    } else if (choix == 3) {
      message.channel.send(`Je choisis les ciseaux !`);
    }
    if (choix == 1) {
      message.channel.send(`Égalité !`);
    } else if (choix == 2) {
      message.channel.send(`J'ai gagné ! Ba alors grosse merde ?`);
    } else if (choix == 3) {
      message.channel.send(`J'ai perdu ... Bon j't'ai laissé gagner hein.`);
    }
  } else if (args[0] == "feuille") {
    var choix = Math.floor(Math.random() * 3 + 1);
    if (choix == 1) {
      message.channel.send(`Je choisis la pierre !`);
    } else if (choix == 2) {
      message.channel.send(`Je choisis la feuille !`);
    } else if (choix == 3) {
      message.channel.send(`Je choisis les ciseaux !`);
    }
    if (choix == 2) {
      message.channel.send(`Égalité !`);
    } else if (choix == 3) {
      message.channel.send(`J'ai gagné ! C'était presque trop facile...`);
    } else if (choix == 1) {
      message.channel.send(
        `J'ai perdu ... Eh bah pour une fois que tu gagnes...`
      );
    }
  } else if (args[0] == "ciseaux") {
    var choix = Math.floor(Math.random() * 3 + 1);
    if (choix == 1) {
      message.channel.send(`Je choisis la pierre !`);
    } else if (choix == 2) {
      message.channel.send(`Je choisis la feuille !`);
    } else if (choix == 3) {
      message.channel.send(`Je choisis les ciseaux !`);
    }
    if (choix == 3) {
      message.channel.send(`Égalité !`);
    } else if (choix == 1) {
      message.channel.send(
        `J'ai gagné ! C'était tellement facile c'est même plus drôle.`
      );
    } else if (choix == 2) {
      message.channel.send(`J'ai perdu ... T'as triché j'suis sûr !`);
    }
  } else {
    message.channel.send(`Ce n'est pas une réponse valide ça tocard!`);
  }
};

module.exports.help = {
  name: "shifumi",
};
