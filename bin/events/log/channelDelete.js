
module.exports = async (client, channel) => {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: Un channel a été supprimé : "${channel.name}" sur le serveur "${channel.guild.name}"`);
}