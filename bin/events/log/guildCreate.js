const mongoose = require("mongoose");
const { Guild } = require("../../../models/index");

module.exports = async (client, guild) => {
  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  };

  const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, newGuild);
  const createGuild = await new Guild(merged);
  createGuild
    .save()
    .then(g => console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: Un serveur a été rejoint : "${guild.name}"`));
};
