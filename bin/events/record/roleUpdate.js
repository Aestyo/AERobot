
module.exports = async (client, newRole) => {
    client.log(`Un rôle a été modifié : "${newRole.name}" sur le serveur "${newRole.guild.name}"`, `rec`);
}