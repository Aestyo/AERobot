const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  /*author = message.author.id;
  message.author.id = "215806405251301376";
  message.author.send("Salut");*/
  client.comptejoueurspresents("salut");
};
