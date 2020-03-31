// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  const config = require("../../config.json");
  if (message.author.bot) return;
  if (message.author.id == config.cookieID) {
    message.react("🍪");
  }
  if (message.content.startsWith(client.prefix)) {
    const args = message.content.split("/ +g");
    const cmd = args.shift().toLowerCase;

    if (cmd == "dis") {
      message.channel.send(args.join(" "));
      message.channel.delete;
    }
  }
};
