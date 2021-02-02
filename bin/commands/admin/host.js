
module.exports.run = async (client, message) => {
    const Discord = require('discord.js');
    const os = require('os');
    const process = require('process');
    const system = os.platform().toLowerCase();
    var model, arch, speed, cores, total, freemem, used, hostname, type, release, platform, uptime;
    
    
    if(system.includes("win") || system.includes("darwin") || system.includes("linux")){
        model = os.cpus()[0].model;
        arch = os.arch();
        speed = os.cpus()[0].speed/1000;
        cores = os.cpus().length;
        total = (os.totalmem()/1000000000).toFixed(2);
        freemem = (os.freemem()/1000000000).toFixed(2); 
        used = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;
        hostname =  os.hostname();
        type = os.type();
        release = os.release();
        platform = os.platform();
        let uptime_raw = os.uptime();
        let days = Math.floor(uptime_raw / 86400);
        let hours = Math.floor(uptime_raw / 3600) % 24;
        let minutes = Math.floor(uptime_raw / 60) % 60;
        let seconds = Math.floor(uptime_raw / 1) % 60;
        uptime = "";
        if(days != 0){uptime = uptime + `${days} jours, `}
        if(hours != 0){uptime = uptime + `${hours} heures, `}
        if(minutes != 0){uptime = uptime + `${minutes} minutes, `}
        if(seconds != 0){uptime = uptime + `${seconds} secondes `}
    }else if(system == "android"){
        model = "-"
        arch = os.arch();
        speed = "-"
        cores = "-"
        total = (os.totalmem()/1000000000).toFixed(2);
        freemem = (os.freemem()/1000000000).toFixed(2); 
        used = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100;
        hostname =  "-"
        type = os.type();
        release = os.release();
        platform = os.platform();
        let uptime_raw = os.uptime();
        let days = Math.floor(uptime_raw / 86400);
        let hours = Math.floor(uptime_raw / 3600) % 24;
        let minutes = Math.floor(uptime_raw / 60) % 60;
        let seconds = Math.floor(uptime_raw / 1) % 60;
        uptime = "";
        if(days != 0){uptime = uptime + `${days} jours, `}
        if(hours != 0){uptime = uptime + `${hours} heures, `}
        if(minutes != 0){uptime = uptime + `${minutes} minutes, `}
        if(seconds != 0){uptime = uptime + `${seconds} secondes `}
    }else{
        model = "-"
        arch = "-"
        speed = "-"
        cores = "-"
        total = "-"
        freemem = "-"
        used = "-"
        hostname =  "-"
        type = "-"
        release = "-"
        platform = "-"
        uptime = "-"
    }


    const CPUEmbed = new Discord.MessageEmbed()
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

    CPUEmbed.addFields({ name: 'Processeur :', value: `Modèle : ${model}\nArchitecture : ${arch}\nVitesse : ${speed} GHz\nCœurs logiques : ${cores}`, inline: true  });
    CPUEmbed.addFields({ name: 'Mémoire :', value: `Totale : ${total} Go\nDisponible : ${freemem} Go\nUtilisée ${used} Mo`, inline: false  });

    if(model.toLowerCase().includes("amd")){
        CPUEmbed.setThumbnail('https://imgur.com/rSJbOrn.png');
    }else if(model.toLowerCase().includes("intel")){
        CPUEmbed.setThumbnail('https://imgur.com/sMWqsKy.png');
    }else {
        CPUEmbed.setThumbnail('https://imgur.com/8AMlCuD.png');
    }

    const SYSEmbed = new Discord.MessageEmbed()
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
    SYSEmbed.addFields({ name: 'Système d\'exploitation :', value: `Nom : ${hostname} \nType : ${type}\nVersion : ${release} \nPlateforme : ${platform}\n Uptime : ${uptime}`, inline: true  });

    if(system.includes("win")){
        SYSEmbed.setThumbnail('https://imgur.com/8l1kcg0.png')
    }else if(system.includes("linux")){
        SYSEmbed.setThumbnail('https://imgur.com/AXlhUgw.png')
    }else if(system.includes("darwin")){
        SYSEmbed.setThumbnail('https://imgur.com/ZEUH7Na.png')
    }else if(system.includes("android")){
        SYSEmbed.setThumbnail('https://imgur.com/hL6MlpO.png')
    }else {
        SYSEmbed.setThumbnail('https://imgur.com/8AMlCuD.png')
    }
    //
    message.channel.send(CPUEmbed);
    message.channel.send(SYSEmbed);

};