
module.exports = async (client, reaction) => {
    // Partie permettant de récupérer une réaction (partial ou non) et de mettre en cache toutes les informations importantes ( Utilisateur, réaction, message )
	if (reaction.partial) { // Vérification de si la réaction est partial ou non
		try {
			await reaction.fetch();
		} catch (error) {   // Si le message de la réaction a été supprimé cela peut causer un problème qu'il faut gérer
			client.log("Quelque chose s'est mal passé dans la récupération de la réaction : ", "event", 3);
			return; // Retourne `reaction.message.author` en tant que undefined/null
		}
	}
    let ReactionEmoji = reaction._emoji.name;
    await reaction.users.fetch();
    let ReactionUser = Array.from(reaction.users.cache.entries());
    let ReactionMessage = reaction.message;

    const data = await client.db.getRRM(reaction.message);
    if(data != -1){
        for(let i = 0; i < data.emoji.length; i++){
            if(data.emoji[i] == reaction._emoji.name && data.channel[i] == reaction.message.channel.id && data.message[i] == reaction.message.id){
                const guild = await client.guilds.cache.get(data.guild);
                const role = await guild.roles.cache.get(data.role[i].slice(3,-1));
                ReactionUser.forEach(async (user) =>{
                    let member = await guild.members.cache.get(user[0]);
                    member.roles.add(role).catch(console.error);
                });
            }
        }
    }

    // débug
    //console.log(ReactionEmoji);
    //console.log(ReactionUser);
    //console.log(ReactionMessage);
    //console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
    //console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
    
    // Partie troll pour Chloé
    for(let i = 0; i < ReactionUser.length; i++){
        if(ReactionUser[i] == 335801182142332939 || ReactionEmoji == "🍪"){
            ReactionMessage.channel.send("+1 point sourire pour Chloé ! :D");
        }
    }
};
