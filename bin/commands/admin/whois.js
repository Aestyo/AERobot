module.exports.run = async (client, message, args) => {
    try{
        user = await client.users.fetch(args[0]);
        user = await client.users.cache.get(args[0]);
    } catch(error){
        message.channel.send("L'ID entré n'est pas valide ou non-trouvé.");
        client.log(`[${message.author.tag}/${message.guild.name}] Tentative de "Whois" échouée ( ID invalide ou non-trouvé )`, 'admin');
        return;
    };
    message.channel.send(`User {\n      id: **${user.id}**\n      avatar: https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png\n      bot: **${user.bot}**\n      createdAt: **${user.createdAt}**\n      status: **${user.presence.status}**\n     tag: **${user.tag}**\n}`);
    client.log(`[${message.author.tag}/${message.guild.name}] Recherche "Whois" effectuée sur ${user.tag}`, 'admin');
};
  