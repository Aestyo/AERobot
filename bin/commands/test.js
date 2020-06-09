module.exports.run = async (client, message) => {
  let newLog = data.log;
  newLog = newLog + `\n- **${message.author.username}** a rejoint la partie !`;
  await client.updateWerewolf(message, { log: newLog });
};
