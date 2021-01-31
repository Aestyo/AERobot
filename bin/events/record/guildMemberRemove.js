
module.exports = async (client, member) => {
    client.log(`Un utilisateur a quitté un serveur : "${member.tag}"`, `rec`);
}