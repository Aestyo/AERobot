
module.exports = async (client, emoji) => {
    client.log(`L'émoji "${emoji.name}" à été modifié sur le serveur : "${emoji.guild.name}"`, `rec`);
}