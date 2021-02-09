
module.exports = async (client, role) => {
    client.log(`Un rôle a été supprimé : "${role.name}" sur le serveur "${role.guild.name}"`, `rec`);
}