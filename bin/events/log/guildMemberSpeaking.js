
module.exports = async (client, member, speaking) => {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: Un utilisateur se met à parler sur un serveur : "${member.tag}"`);
}