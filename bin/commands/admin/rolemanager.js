module.exports.run = async (client, message, args) => {
    switch(args[0]){
        case 'activate':{
            // Vérification de si le bot peut éditer les roles
            const data = await client.db.getRRM(message);
            if(data != -1) return message.channel.send("❌ La gestion des rôles par réaction est déjà activée sur ce serveur !");

            var Test = {
                guild: message.guild.id,
                channel: [],
                message: [],
                emoji: [],
                role: [],
            }
            client.db.createRRM(Test);
            message.channel.send("🔧 La gestion des rôles par réaction a été activée sur ce serveur !");
            break;
        }
        case 'desactivate':{
            const data = await client.db.getRRM(message);
            if(data == -1) return message.channel.send("❌ La gestion des rôles par réaction est déjà désactivée sur ce serveur !");

            await client.db.removeRRM(message);
            message.channel.send("🔧 La gestion des rôles par réaction a été désactivée sur ce serveur !")
            break;
        }
        case 'add':{
            var data = await client.db.getRRM(message);
            if(data == -1) return message.channel.send("❌ La gestion des rôles par réaction est désactivée sur ce serveur !");

            

            data.channel.push(message.channel.id);
            data.message.push(args[1]);
            data.role.push(args[2]);
            data.emoji.push(args[3]);

            message.channel.messages.fetch({around: args[1], limit: 1})
                .then(messages => {
                    const fetchedMsg = messages.first(); // messages is a collection!)
                    // do something with it
                    fetchedMsg.react(args[3]);
                });


            await client.db.editRRM(message, data);
            message.channel.send("🔧 Un reaction-role à été ajouté sur le serveur !");
            break;
        }
    }
  }
  