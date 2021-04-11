module.exports.run = async (client, message, args) => {
  client.player.setFilters(message, {
    bassboost: true,
  });
};
