
module.exports = async (client, channel) => {
    client.log(`Les messages épinglés ont été modifiés sur le channel : "${channel.name}" sur le serveur "${channel.guild.name}"`, `rec`);
}