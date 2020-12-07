
module.exports = async (client, emoji) => {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: L'émoji "${emoji.name}" à été modifié sur le serveur : "${emoji.guild.name}"`);
}