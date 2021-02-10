const mongoose = require("mongoose");
const ReactionRoleManager = require("./ReactionRoleManager");
var database = mongoose.connection; 
module.exports = (client) => {

    { // Reaction Role Manager
        // Création
        client.db.createRRM = async (reactionrolemanager) => {
            const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, reactionrolemanager);
            const createRRM = await new ReactionRoleManager(merged);
            createRRM.save();
        } 
        client.db.removeRRM = async (message) => {
            database.collections.reactionrolemanagers.deleteOne({ guild: message.guild.id });
        }; 
        client.db.getRRM = async (message) => {
            const data = await ReactionRoleManager.findOne({ guild: message.guild.id });
            if (data) return data;
            return -1;
        };
        client.db.editRRM = async (message, settings) => {
            let data = await client.db.getRRM(message);
            if (typeof data !== "object") data = {};
            for (const key in settings) {
              if (data[key] !== settings[key]) data[key] = settings[key];
            }
            return data.updateOne(settings);
        };
    }

    /*{ // IFTTT
        // Création d'un IFTTT
        client.db.createIFTTT = async (ifttt) => {
            const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, ifttt);
            const createIFTTT = await new IFTTT(merged);
            createIFTTT.save();
        }
        client.db.getIFTTT = async (param) => {
            const data = await IFTTT.findOne({ where: param });
            if (data) return data;
            return -1;
        };
    }*/
}