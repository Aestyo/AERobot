module.exports.run = async (client, message) => {
  if (message.author.id != "215806405251301376")
    return message.channel.send(
      "Vous n'êtes pas autorisé à utiliser cette commande."
    );
};

module.exports.help = {
  name: "eval"
};
