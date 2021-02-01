
module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const os = require('os');
    const process = require('process');
    const uptime = os.uptime();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    const model = os.cpus()[0].model.toLowerCase();
    let days = Math.floor(uptime / 86400);
    let hours = Math.floor(uptime / 3600) % 24;
    let minutes = Math.floor(uptime / 60) % 60;
    let seconds = Math.floor(uptime / 1) % 60;
    let str = "";
    if(days != 0){str = str + `${days} jours, `}
    if(hours != 0){str = str + `${hours} heures, `}
    if(minutes != 0){str = str + `${minutes} minutes, `}
    if(seconds != 0){str = str + `${seconds} secondes `}
    const Embed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('**ÆRobot** - __Analyse système__')
	    .setURL('https://github.com/Aestyo/AERobot/')
        .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            `https://discordapp.com/users/${message.author.id}`)
	    .setDescription('Spécifications de la machine hôte :')
	    
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

    Embed.addFields({ name: 'Processeur :', value: `Modèle : ${os.cpus()[0].model}\nArchitecture : ${os.arch()}\nVitesse : ${os.cpus()[0].speed/1000} GHz\nCœurs logiques : ${os.cpus().length}`, inline: true  });
    Embed.addFields({ name: 'Système d\'exploitation :', value: `Nom : ${os.hostname()} \nType : ${os.type()}\nVersion : ${os.release()} \nPlateforme : ${os.platform()}\n Uptime : ${str}`, inline: true  });
    Embed.addFields({ name: 'Mémoire :', value: `Totale : ${(os.totalmem()/1000000000).toFixed(2)} Go\nDisponible : ${(os.freemem()/1000000000).toFixed(2)} Go\nUtilisée ${Math.round(used * 100) / 100} Mo`, inline: false  });

    if(model.includes("amd")){
        Embed.setThumbnail('https://imgur.com/rSJbOrn.png')
    }else if(model.includes("intel")){
        Embed.setThumbnail('https://imgur.com/sMWqsKy.png')
    }
    message.channel.send(Embed);

};