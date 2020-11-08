module.exports.run = async (client, message, args) => {
  message.delete();
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: "repeat",
};
