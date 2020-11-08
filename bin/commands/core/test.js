module.exports.run = async (client, message) => {
  let keys = Array.from(client.guilds.cache.entries());
  let keys2 = Array;

  for (let i = 0; i < keys.length; i++) {
    keys2 = await keys[i][1].members.cache.get({ force: true });
    console.log(keys2);
    for (let j = 0; j < keys2.length; j++) {
      if (keys2[j][1].user.bot == false) {
        ListMembers.push(keys2[j][1].user.username);
      }
    }
  }


  let users = await message.guild.members.fetch();
  users = await message.guild.members.cache.get();
  console.log(users);
};
