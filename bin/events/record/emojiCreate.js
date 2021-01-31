
module.exports = async (client, emoji) => {
    client.log(`L'émoji "${emoji.name}" à été ajouté sur le serveur : "${emoji.guild.name}"`, `rec`);
}