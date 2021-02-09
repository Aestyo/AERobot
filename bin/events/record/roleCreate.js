
module.exports = async (client, role) => {
    client.log(`Un rôle a été crée : "${role.name}" sur le serveur "${role.guild.name}"`, `rec`);
}