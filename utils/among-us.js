create = async (client, message, settings) => {
    const Discord = require('discord.js');
    const game = {
        accepted: Array,
        maybe: Array,
        rejected: Array,
        channelID: Number,
        channelName: String,
        Hours: Number,
        Minutes: Number,
    }

    let param = Object.create(game);
    param.accepted = [];
    param.maybe = [];
    param.rejected = [];
    param.channelID = message.channel.id;
    param.channelName = message.channel.name;
    param.Hours = settings[0].toString().padStart(2, '0');;
    param.Minutes = settings[1].toString().padStart(2, '0');;
    client.createAmongUs(param);

    // Message de réponse à l'utilisateur
    const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Among Us__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setDescription(`Un vaisseau va bientôt décoller ici !\n\nPour rejoindre l'équipage faites \`\`/among-us accept\`\` ou cliquez sur le bouton **vert**, vous serez notifiés avant le départ dans l'espace !\n\nSi vous n'êtes pas sûr de pouvoir le rejoindre faites \`\`/among-us maybe\`\` ou cliquez sur le bouton **orange** vous serez tout de même notifiés si il manque des membres avant de partir !\n\nSi vous en avez marre de manger des sachets déshydratés faites \`\`/among-us decline\`\` ou cliquez sur le bouton **rouge**.`)
        .setThumbnail('https://imgur.com/WKT0ChX.png')
        .addFields(
            { name: `__Heure de début de partie :__ **${settings[0]}h${settings[1]}**`, value: `\u200B` })
        .setImage('https://imgur.com/TXccpEL.png')
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    
    let messageEmbed = await message.channel.send(Embed);
        messageEmbed.react("🟢")
        .then(() => messageEmbed.react("🟠"))
        .then(() => messageEmbed.react("🔴"));
    message.channel.send(":warning: *LES RÉACTIONS SONT ENCORE EN WORK-IN-PROGRESS* :warning:");
    return;
}

exports.create = create;