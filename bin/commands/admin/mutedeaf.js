module.exports.run = async (client, message, args) => {
  let guild = await message.guild;
  let member = await guild.members.cache.get(args[0]);
  while (1) {
    await member.voice.setMute(true);
    await member.voice.setDeaf(false);
    await new Promise((resolve) => setTimeout(resolve, 1700));

    await member.voice.setMute(false);
    await member.voice.setDeaf(true);
    await new Promise((resolve) => setTimeout(resolve, 1700));
  }
};
