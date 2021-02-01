module.exports.run = async (client, message) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    let str = "__Uptime :__\n";
    if(days != 0){
        str = str + `**${days}** jours, `
    }
    if(hours != 0){
        str = str + `**${hours}** heures, `
    }
    if(minutes != 0){
        str = str + `**${minutes}** minutes, `
    }
    if(seconds != 0){
        str = str + `**${seconds}** secondes `
    }
    message.channel.send(str);
    client.log(`[${message.author.tag}/${message.guild.name}] Une demande d'uptime a été effectuée`, 'admin');
};
    