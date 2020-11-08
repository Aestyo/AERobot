module.exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
    cmd = args[0];
    switch (cmd) {
      case "bind":{
        args[4] = args[4].slice(3, -1);
        console.log(args);
        try {
            const msg = await message.channel.messages.fetch(args[1]);
          } catch (error) {
            message.channel.send("Ce message n'existe pas.");
            return;
        }
        const roles = await Array.from(message.guild.roles.cache.entries());
        console.log(roles[4][0]);
        for(let i = 0; i < roles.lenght; i++){
            if(roles[i][0] = args[4]){
                console.log("ça marche");
                break;
            }else if(i = roles.lenght-1){
                message.channel.send("Ce rôle n'existe pas.");
                return;
            }
        }
        /*try {
            const role = message.guild.roles.fetch(args[4]);
        } catch (error) {
            message.channel.send("Ce rôle n'existe pas.");
            return;
        }*/
        let reaction = {
            message: args[1],
            reaction: args[2],
            action: args[3],
            subject: args[4],
        };
        //client.createReaction(reaction);
        break;
      }
      default: {
        message.channel.send("La commande entrée est incorrecte.");
        break;
      }
    }
}

  