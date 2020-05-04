const mongoose = require("mongoose");
const { Fiche } = require("../models/index");
const { Werewolf } = require("../models/index");

module.exports = (client) => {
  client.sleep = async (ms) => {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > ms) {
        break;
      }
    }
  };
  client.shuffle = async (array) => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
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
  client.createWerewolf = async (werewolf) => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, werewolf);
    const createWerewolf = await new Werewolf(merged);
    createWerewolf.save();
  };
  //////////////////////////////////////////////////
  client.getWerewolf = async (message) => {
    const data = await Werewolf.findOne({ guild_id: message.guild.id });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.getWerewolfID = async (id) => {
    const data = await Werewolf.findOne({ id: id_hex });
    if (data) return data;
    return -1;
  };
  //////////////////////////////////////////////////
  client.updateWerewolf = async (id_hex, settings) => {
    let data = await client.getWerewolf(id_hex);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };
};
