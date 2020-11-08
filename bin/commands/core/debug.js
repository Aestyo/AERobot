const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let ListMembers = [];
  let keys = Array.from(client.guilds.cache.entries());
  console.log(keys);

  for (let i = 0; i < keys.length; i++) {
    let keys2 = Array.from(keys[i][1].members.cache.entries());
    for (let j = 0; j < keys2.length; j++) {
      if (keys2[j][1].user.bot == false) {
        ListMembers.push(keys2[j][1].user.tag);
      }
    }
  }
  var ListMembers2 = Array.from(new Set(ListMembers));
  message.channel.send(ListMembers2.length);
};
