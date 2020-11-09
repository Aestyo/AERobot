create = async (client, message, settings) => {
    const Discord = require('discord.js');
    const game = {
        channelID: Number,
        channelName: String,
        guildID: Number,
        guildName: String,
        players: Array,
        H: Number,
        M: Number,
    }

    const playersID = ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"];
    const playersTag = ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"];

    let param = Object.create(game);
    param.channelID = message.channel.id;
    param.channelName = message.channel.name;
    param.guildID = message.guild.id;
    param.guildName = message.guild.name;
    param.playersID = playersID;
    param.playersTag = playersTag;
    param.H = settings[0];
    param.M = settings[1];
    client.createAmongUs(param);

    // Message de réponse à l'utilisateur
    const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Among Us__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setDescription(`Une partie d'Among Us se déroulera dans ce channel. Pour la rejoindre faites "/among-us join", vous serez notifié par message quand la partie commencera, soyez à l'heure !`)
        .setThumbnail('https://imgur.com/WKT0ChX.png')
        .addFields(
            { name: '__Heure de début de partie :__', value: `**${settings[0]}h${settings[1]}**` },
           { name: '\u200B', value: '\u200B' },)
        .setImage('https://imgur.com/TXccpEL.png')
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    message.channel.send(Embed);
    return;
}

exports.create = create;