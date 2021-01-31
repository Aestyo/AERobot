
module.exports = async (client, channel) => {
    client.log(`Un channel a été modifié : "${channel.name}" sur le serveur "${channel.guild.name}"`, `rec`);
}