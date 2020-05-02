const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  player = client.users.cache.get("324790363338571777");
  var message = await player.send("Yo mon pote");

  message.react("👍").then(() => message.react("👎"));

  const filter = (reaction, user) => {
    return ["👍", "👎"].includes(reaction.emoji.name) && user.id === player.id;
  };

  message
    .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();

      if (reaction.emoji.name === "👍") {
        message.reply("up");
      } else {
        message.reply("down");
      }
    });
};
