module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    const utils = require('../../../utils/among-us.js');
    var username; // Mise en variable soit du nickname soit de l'username de l'utilisateur ( Si il n'a pas de nickname, le programme prend l'username )
    if(message.guild.member(message.author).nickname != null){username = message.guild.member(message.author).nickname;
    }else{username = message.author.username;}
    if(username == "There is a cat among us"){message.channel.send("https://imgur.com/ZcTnc3h.png")}
    let settings;
    cmd = args[0];
    switch (cmd) {
      /////////////////////////////////////////////////////////////////////////////////////////// Création de la partie
      case "create":{
        const data = await client.getAmongUs(message);

        // Phase de vérification
        if (data != -1){ // Pas de partie dans ce channel
          message.channel.send(`<:amongus:776469650128109609> **Il y a déjà** un vaisseau qui s'apprête à partir d'ici ! Rejoins l'équipage maintenant avec \`\`/among-us accept\`\` !`);
          return;
        } 

        if(args[1] == null){ // Manque d'arguments de commande 
            message.channel.send(`<:amongus:776469650128109609> La commande est incorrecte car **il manque un argument**, vous devez entrez l'heure et la minute de début de partie comme ceci : \`\`/among-us create 21:30\`\``);
            break;
        }
        settings = args[1].split(":"); // Mise en forme de l'argument ( découpage en deux )
        if(isNaN(settings[0]) || isNaN(settings[1])){ // Arguments incorrects ( Pas des nombres )
            message.channel.send(`<:amongus:776469650128109609> La commande est incorrecte car **ce ne sont pas des valeurs entières positives**, vous devez entrez l'heure et la minute de début de partie comme ceci : \`\`/among-us create 21:30\`\``);
            break;
        }
        if(settings[0] < 0 || settings[0] > 23 || settings[1] < 0 || settings[1] > 59){ // Heure invalide ( Exemple : 25 heures, 61 minutes ect... )
            message.channel.send(`<:amongus:776469650128109609> La commande est incorrecte car **ce ne sont pas des valeurs acceptées**, vous devez entrez l'heure et la minute de début de partie comme ceci : \`\`/among-us create 21:30\`\``);
            break;
        }

        // Envoi dans la fonction créer
        utils.create(client, message, settings);
        console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [game/INFO]: ${username} a crée une partie d'among-us dans le channel ${message.channel.name}.`);
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Commande pour accepter la partie
      case "accept":{
        const data = await client.getAmongUs(message);
        if(username.toUpperCase() == "IMPOSTOR"){ return message.channel.send("<:amongus:776469650128109609> Les **imposteurs** ne sont pas le bienvenu à bord !");}
        // Phase de vérification :
        if (data == -1){ // Pas de partie dans ce channel
          message.channel.send(`<:amongus:776469650128109609> **Aucun vaisseau** ne s'apprête à partir d'ici ! Crée ta partie avec \`\`/among-us create [Heure]:[Minute]\`\` !`);
          return;
        }  
        let accepted = data.accepted;
        let maybe = data.maybe;
        let rejected = data.rejected;
        let str = "\u200B";

        if(accepted.length == 10){
            message.channel.send("<:amongus:776469650128109609> L'équipage est déjà au **complet**, tu peux toujours poster ta candidature avec \`\`/among-us maybe\`\`!");
            return;
        }

        for (let i = 0; i < accepted.length; i++) {
            if (accepted[i] == message.author.id) {
              message.channel.send("<:amongus:776469650128109609> Tu as **déjà** été engagé dans l'équipage ! Plus qu'à attendre que ça décolle !");
              return;
            }
        }
        for (let i = 0; i < maybe.length; i++) {
          if (maybe[i] == message.author.id) {
            str = `\nOn vire de bord **${username}** ? Suspect non ?`;
            maybe.splice(i, 1);
          }
        }
        for (let i = 0; i < rejected.length; i++) {
          if (rejected[i] == message.author.id) {
            str = `\nOn vire de bord **${username}** ? Suspect non ?`;
            rejected.splice(i, 1);
          }
        }
      
        accepted.push(message.author.id);
        await client.updateAmongUs(message, { accepted: accepted });
        await client.updateAmongUs(message, { maybe: maybe });
        await client.updateAmongUs(message, { rejected: rejected });
        if(username.toUpperCase() == "CREWMATE"){ message.channel.send(`<:amongus:776469650128109609> Bienvenu dans l'équipage **${username}** ! Aucune chance qu'il ne soit **un traître** n'est-ce pas ?`);
        }else{message.channel.send(`<:amongus:776469650128109609> Bienvenu dans l'équipage **${username}** ! On espère que vous n'avez pas de couteau caché dans le dos !${str}`);}
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Commande pour dire peut-être 
      case "maybe":{
        const data = await client.getAmongUs(message);

        // Phase de vérification :
        if (data == -1){ // Pas de partie dans ce channel
          message.channel.send(`<:amongus:776469650128109609> **Aucun vaisseau** ne s'apprête à partir d'ici ! Crée ta partie avec \`\`/among-us create [Heure]:[Minute]\`\` !`);
          return;
        }  
        let accepted = data.accepted;
        let maybe = data.maybe;
        let rejected = data.rejected;
        let str = "\u200B";

        for (let i = 0; i < maybe.length; i++) {
          if (maybe[i] == message.author.id) {
            message.channel.send("<:amongus:776469650128109609> Tu as **déjà** posté ta candidature à l'équipage ! Plus qu'à attendre que ça décolle !");
            return;
          }
        }
        for (let i = 0; i < accepted.length; i++) {
            if (accepted[i] == message.author.id) {
              str = `\nOn vire de bord **${username}** ? Suspect non ?`;
              accepted.splice(i, 1);
            }
        }
        for (let i = 0; i < rejected.length; i++) {
          if (rejected[i] == message.author.id) {
            str = `\nOn vire de bord **${username}** ? Suspect non ?`;
            rejected.splice(i, 1);
          }
        }
      
        maybe.push(message.author.id);
        await client.updateAmongUs(message, { accepted: accepted });
        await client.updateAmongUs(message, { maybe: maybe });
        await client.updateAmongUs(message, { rejected: rejected });
        message.channel.send(`<:amongus:776469650128109609> Peut-être un nouveau membre d'équipage : **${username}** ? Il ne sais pas encore, il a entendu d'étranges rumeurs...${str}`);
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Commande pour refuser la partie
      case "decline":{
        const data = await client.getAmongUs(message);

        // Phase de vérification :
        if (data == -1){ // Pas de partie dans ce channel
          message.channel.send(`<:amongus:776469650128109609> **Aucun vaisseau** ne s'apprête à partir d'ici ! Crée ta partie avec \`\`/among-us create [Heure]:[Minute]\`\` !`);
          return;
        }  
        let accepted = data.accepted;
        let maybe = data.maybe;
        let rejected = data.rejected;
        let str = "\u200B";

        for (let i = 0; i < rejected.length; i++) {
          if (rejected[i] == message.author.id) {
            message.channel.send("<:amongus:776469650128109609> Tu as **déjà** refusé d'entrer dans l'équipage !");
            return;
          }
        }
        for (let i = 0; i < accepted.length; i++) {
            if (accepted[i] == message.author.id) {
              str = `\nVirement de bord pour **${username}** ? Les rats quittent le navire !`;
              accepted.splice(i, 1);
            }
        }
        for (let i = 0; i < maybe.length; i++) {
          if (maybe[i] == message.author.id) {
            str = `\nVirement de bord pour **${username}** ? Les rats quittent le navire !`;
            maybe.splice(i, 1);
          }
        }
      
        rejected.push(message.author.id);
        await client.updateAmongUs(message, { accepted: accepted });
        await client.updateAmongUs(message, { maybe: maybe });
        await client.updateAmongUs(message, { rejected: rejected });
        message.channel.send(`<:amongus:776469650128109609> **${username}** resteras ici à regarder le vaisseau décoller !${str}`);
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Affichage du lobby
      case "lobby":{
        const data = await client.getAmongUs(message);

        // Phase de vérification :
        if (data == -1){ // Pas de partie dans ce channel
          message.channel.send(`<:amongus:776469650128109609> **Aucun vaisseau** ne s'apprête à partir d'ici ! Crée ta partie avec \`\`/among-us create [Heure]:[Minute]\`\` !`);
          return;
        }
        let acceptedStr = "";
        let maybeStr = "";
        let rejectedStr = "";

        for(let i = 0; i < data.accepted.length; i++){
            user = await client.users.fetch(data.accepted[i]);
            user = await client.users.cache.get(data.accepted[i]);
            if(message.guild.member(user).nickname != null){
              user.name = message.guild.member(user).nickname;
            }else{
              user.name = user.username;
            }
            acceptedStr = acceptedStr + `:green_circle:   ${user.name}\n`
        }
        for(let i = 0; i < data.maybe.length; i++){
          user = await client.users.fetch(data.maybe[i]);
          user = await client.users.cache.get(data.maybe[i]);
          if(message.guild.member(user).nickname != null){
            user.name = message.guild.member(user).nickname;
          }else{
            user.name = user.username;
          }
          maybeStr = maybeStr + `:orange_circle:   ${user.name}\n`
        }
        for(let i = 0; i < data.rejected.length; i++){
          user = await client.users.fetch(data.rejected[i]);
          user = await client.users.cache.get(data.rejected[i]);
          if(message.guild.member(user).nickname != null){
            user.name = message.guild.member(user).nickname;
          }else{
            user.name = user.username;
          }
          rejectedStr = rejectedStr + `:red_circle:   ${user.name}\n`
        }
        const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**ÆRobot** - __Among Us__")
        .setURL("https://github.com/Aestyo/AERobot")
        .setAuthor(message.author.username, message.author.avatarURL(), `https://discordapp.com/users/${message.author.id}`)
        .setDescription(`Décollage prévu pour ${data.Hours}h${data.Minutes}. Pour monter à bord faites \`\`/among-us accept\`\` *( Imposteurs s'abstenir ! )*`)
        .setThumbnail('https://imgur.com/WKT0ChX.png')
        .setImage('https://imgur.com/TXccpEL.png')
        .setTimestamp()
        .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

        if(acceptedStr != "") Embed.addFields({ name: `__L'équipage ( **${data.accepted.length}** / 10):__`, value: `${acceptedStr}`, inline: true });
        if(maybeStr != "") Embed.addFields({ name: `__Les indécis ( **${data.maybe.length}** ):__`, value: `${maybeStr}`, inline: true });
        if(rejectedStr != "") Embed.addFields({ name: `__Les indécis ( **${data.rejected.length}** ):__`, value: `${rejectedStr}`, inline: true });
        if(acceptedStr == "" && maybeStr == "" && rejectedStr == ""){
          let roll = Math.floor(Math.random() * 2);
          if(roll == 0){
            Embed.addFields({ name: `__L'équipage ( **0**/10 ):__`, value: `*Il n'y a plus personne ici, tu arrives après le carnage.*`});
            Embed.addFields({ name: '\u200B', value: '\u200B' });
          }
          if(roll == 1){
            Embed.addFields({ name: `__L'équipage ( **0**/10 ):__`, value: `*Il n'y a pas âme qui vive ici, mais où est passé l'équipage ?*`});
            Embed.addFields({ name: '\u200B', value: '\u200B' });
          }
        }
        message.channel.send(Embed);
        console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [game/INFO]: ${username} a affiché le lobby among-us du channel ${message.channel.name}.`);
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Appel des participants
      case "call":{
        message.channel.id = args[1];
        const data = await client.getAmongUs(message);
        if (data == -1) return message.channel.send(`Il n'y a pas de partie d'Among Us en préparation dans ce salon.`);
        let i;
        for (i = 0; i < 10; i++) {
            if (data.accepted[i] == undefined) {
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
            if(data.accepted[i] != undefined){
                user = await client.users.fetch(data.accepted[i]);
                await client.users.cache.get(data.accepted[i]).send(Embed);
            }
        }
        break;
      }
      /////////////////////////////////////////////////////////////////////////////////////////// Aide
      case "help":{
        utils.help(message);
        console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [game/INFO]: ${username} a demandé l'aide des commandes among-us.`);
        break;
      }
      //////////////////////////////////////////////////////////////////////////////////////////
      default: {
        let sent = await message.channel.send(`<:amongus:776469650128109609> La commande **\`\`${cmd}\`\`** n'existe pas, pour obtenir la liste des commandes disponibles cliquez sur la réaction "❔" ou faites **\`\`/among-us help\`\`**`);
        sent.react("❔")
        const filter = (reaction, user) => {
          return ["❔"].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        sent.awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
        .then((collected) => {
          const reaction = collected.first(); 
          if (reaction.emoji.name === "❔") {
            utils.help(message);
          }
        })
        .catch((collected) => {
          console.info(`[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [game/INFO]: ${username} n'a pas demandé l'aide des commandes among-us`);
        });
        break;
      }
    }
};
  