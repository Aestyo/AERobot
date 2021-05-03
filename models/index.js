const mongoose = require('mongoose');
const ReactionRoleManager = require('./ReactionRoleManager');
const AmongUs = require('./amongus');
const User = require('./user');

var database = mongoose.connection;
module.exports = (client) => {
  // Reaction Role Manager
  // Création
  client.db.createRRM = async (reactionrolemanager) => {
    const merged = Object.assign(
      { _id: mongoose.Types.ObjectId() },
      reactionrolemanager
    );
    const createRRM = await new ReactionRoleManager(merged);
    createRRM.save();
  };
  client.db.removeRRM = async (message) => {
    database.collections.reactionrolemanagers.deleteOne({
      guild: message.guild.id,
    });
  };
  client.db.getRRM = async (message) => {
    const data = await ReactionRoleManager.findOne({
      guild: message.guild.id,
    });
    if (data) return data;
    return -1;
  };
  client.db.editRRM = async (message, settings) => {
    let data = await client.db.getRRM(message);
    if (typeof data !== 'object') data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  //////////////////////////////////////////////////
  client.createAmongUs = async (amongus) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, amongus);
    const createAmongUs = await new AmongUs(merged);
    createAmongUs.save();
  };
  //////////////////////////////////////////////////
  client.getAmongUs = async (message) => {
    const data = await AmongUs.findOne({ channelID: message.channel.id });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateAmongUs = async (message, settings) => {
    let data = await client.getAmongUs(message);
    if (typeof data !== 'object') data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  client.createUser = async (user) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
    const createUser = await new User(merged);
    createUser.save();
  };
  //////////////////////////////////////////////////
  client.getUser = async (id) => {
    const data = await User.findOne({ id: id });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateUser = async (id, settings) => {
    let data = await client.getUser(id);
    if (typeof data !== 'object') data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
};
