module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const utils = require('./among-us-functions.js');
    let settings;
    cmd = args[0];
    switch (cmd) {
      /////////////////////////////////////////////////////////////////////////////////////////// Création de la partie
      case "create":{
        const data = await client.getAmongUs(message);
        if (data != -1) return message.channel.send(`Il y a déjà une partie d'Among Us en préparation dans ce salon.`);
        if(args[1] == null){
            message.channel.send(`La commande est incorrecte, vous devez entrez l'heure de début de partie.( Exemple : /among-us create 21:30 )`);
            break;
        }else{
            settings = args[1].split(":");
        }
        if(isNaN(settings[0]) || isNaN(settings[1])){
            message.channel.send(`La commande est incorrecte, vous devez entrez l'heure de début de partie. ( Exemple : /among-us create 21:30 )`);
            break;
        }
        if(settings[0] < 0 || settings[0] > 23 || settings[1] < 0 || settings[1] > 59){
            message.channel.send(`La commande est incorrecte, vous devez entrez une heure valide. ( Exemple : /among-us create 21:30 )`);
            break;
        }
        // METTRE LA FONCTION ICI
        utils.create(message, settings);
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Commande pour rejoindre la partie
      case "join":{
        const data = await client.getAmongUs(message);
        if (data == -1) return message.channel.send(`Il n'y a pas de partie d'Among Us en préparation dans ce salon.`);
        let playersID = data.playersID;
        let playersTag = data.playersTag;
        if(playersID[9] != "null"){
            message.channel.send("La partie est déjà pleine !");
            return;
        }
        for (let i = 0; i < 10; i++) {
            if (playersID[i] == message.author.id) {
              message.channel.send("Vous êtes déjà dans la partie !");
              return;
            }
        }
        for (let i = 0; i < 10; i++) {
            if (playersID[i] == "null") {
                playersID[i] = message.author.id;
                playersTag[i] = message.author.tag;
              break;
            }
        }
        await client.updateAmongUs(message, { playersID: playersID });
        await client.updateAmongUs(message, { playersTag: playersTag });
        message.channel.send("Vous avez rejoint la partie.")
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Affichage du lobby
      case "lobby":{
        const data = await client.getAmongUs(message);
        if (data == -1) return message.channel.send(`Il n'y a pas de partie d'Among Us en préparation dans ce salon.`);
        let str = "";
        for(let i = 0; i < 10; i++){
            if(data.playersTag[i] == "null"){
                break;
            }
            str = str + `- ${data.playersTag[i]}\n`
        }
        const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Among Us__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setDescription(`Une partie d'Among Us se déroulera dans ce channel. Pour la rejoindre vous aussi faites "/among-us join" !`)
        .setThumbnail('https://imgur.com/WKT0ChX.png')
        .addFields(
            { name: '__Joueurs actuellement dans le lobby :__', value: `**${str}**` },
            { name: '\u200B', value: '\u200B' },)
        .setImage('https://imgur.com/TXccpEL.png')
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

        message.channel.send(Embed);
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Appel des participants
      case "call":{
        message.channel.id = args[1];
        const data = await client.getAmongUs(message);
        if (data == -1) return message.channel.send(`Il n'y a pas de partie d'Among Us en préparation dans ce salon.`);
        let i;
        for (i = 0; i < 10; i++) {
            if (data.playersID[i] == "null") {
              break;
            }
        }
        if(i < 6){
            const EmbedFail = new Discord.MessageEmbed()
                .setColor("#0099ff")
                .setTitle("**ÆRobot** - __Among Us__")
                .setURL("https://github.com/Aestyo/AERobot")
                .setDescription(`Il n'y a pas assez de joueurs inscrit pour débuter la partie d'Among Us.`)
                .setThumbnail('https://imgur.com/WKT0ChX.png')
                .addFields(
                    { name: '__Joueurs présents :__', value: `**${i}**` },
                    { name: '__Joueurs nécessaires :__', value: `**6** ou plus` },
                    { name: '\u200B', value: '\u200B' },)
                .setImage('https://imgur.com/TXccpEL.png')
                .setTimestamp()
                .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
            message.channel.send(EmbedFail);
            return;
        }
        const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Among Us__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setDescription(`Vous vous êtes inscrit pour une partie d'Among Us qui va bientôt débuter !`)
        .setThumbnail('https://imgur.com/WKT0ChX.png')
        .addFields(
            { name: '__Heure de début :__', value: `**${data.H}h${data.M}**` },
            { name: '__Serveur de la partie :__', value: `**${data.guildName}**` },
            { name: '__Salon de la partie :__', value: `**${data.channelName}**` },
            { name: '\u200B', value: '\u200B' },)
        .setImage('https://imgur.com/TXccpEL.png')
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
        for(let i = 0; i < 10; i ++){
            if(data.playersID[i] != "null"){
                user = await client.users.fetch(data.playersID[i]);
                await client.users.cache.get(data.playersID[i]).send(Embed);
            }
        }
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Aide
      case "help":{
        message.channel.send(`Les commandes pour le Among Us sont : \n- "/among-us create [Heure]:[Minute]" pour créer une partie à une heure précise\n- "/among-us join" pour la rejoindre\n- "/among-us lobby" pour voir les membres ayant déjà rejoint\n- "/among-us help" pour accéder à ce menu.`);
        break;
      }
      default: {
        message.channel.send("La commande entrée est incorrecte.");
        break;
      }
    }
};
  