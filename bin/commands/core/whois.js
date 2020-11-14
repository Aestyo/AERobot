module.exports.run = async (client, message, args) => {
    user = await client.users.fetch(args[0]);
    user = await client.users.cache.get(args[0]);
    message.channel.send(user.tag)
    console.log(user);
};
  