
module.exports = async (client, channel) => {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: Un channel a été modifié : "${channel.name}" sur le serveur "${channel.guild.name}"`);
}