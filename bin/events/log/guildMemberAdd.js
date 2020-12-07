
module.exports = async (client, member) => {
    console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [event/INFO]: Un utilisateur a rejoint un serveur : "${member.tag}"`);
}