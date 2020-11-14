module.exports.run = async (client, message) => {
    let hints = [
        "Je me demande si les chats sont acceptés à bord des vaisseaux spatiaux...", 
        "Je me demande ce qu'il se passerait si un imposteur essayait de rejoindre un équipage",
    ]
    var roll = Math.floor(Math.random() * hints.length);
    message.channel.send(hints[roll]);
};
  