const mongoose = require("mongoose");
const { Fiche, Werewolf, AmongUs, Reaction, Waiting } = require("../models/index");

module.exports = (client) => {
  //////////////////////////////////////////////////
  client.getFiche = async (message) => {
    const data = await Fiche.findOne({ id: message.author.id });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateFiche = async (message, settings) => {
    const data = await client.getFiche(message);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
  client.createFiche = async (fiche) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, fiche);
    const createFiche = await new Fiche(merged);
    createFiche.save();
  };
  //////////////////////////////////////////////////
  client.getUser = async (message) => {
    const data = await User.findOne({ tag: message.author.tag });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateUser = async (message, settings) => {
    const data = await client.getUser(message);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
  client.createUser = async (user) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
    const createUser = await new User(merged);
    createUser.save();
  };
  //////////////////////////////////////////////////
  client.createWerewolf = async (werewolf) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, werewolf);
    const createWerewolf = await new Werewolf(merged);
    createWerewolf.save();
  };
  //////////////////////////////////////////////////
  client.getWerewolf = async (message) => {
    const data = await Werewolf.findOne({ channelID: message.channel.id });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.getWerewolfID = async (hexid) => {
    const data = await Werewolf.findOne({ id: hexid });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateWerewolf = async (message, settings) => {
    let data = await client.getWerewolf(message);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
  client.updateWerewolfID = async (hexid, settings) => {
    let data = await client.getWerewolfID(hexid);
    if (typeof data !== "object") data = {};
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
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
  client.createReaction = async (reaction) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, reaction);
    const createReaction = await new Reaction(merged);
    createReaction.save();
  };
  //////////////////////////////////////////////////
  client.getReaction = async (message) => {
    const data = await Reaction.findOne({ message: message });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateReaction = async (message, settings) => {
    let data = await client.getReaction(message);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
  //////////////////////////////////////////////////
  client.createWaiting = async (waiting) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, waiting);
    const createWaiting = await new Waiting(merged);
    createWaiting.save();
  };/*
  client.updateReaction = async (message, settings) => {
    let data = await client.getReaction(message);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };*/
  //////////////////////////////////////////////////
};
