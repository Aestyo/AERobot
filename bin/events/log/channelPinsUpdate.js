
module.exports = async (client, channel) => {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: Les messages épinglés ont été modifiés sur le channel : "${channel.name}" sur le serveur "${channel.guild.name}"`);
}