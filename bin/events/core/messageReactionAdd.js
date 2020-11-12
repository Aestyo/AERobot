// Évènement : Récéption d'une réaction par le bot
module.exports = async (client, reaction) => {
    const ids = require("../../../config/ids");
    // Partie permettant de récupérer une réaction (partial ou non) et de mettre en cache toutes les informations importantes ( Utilisateur, réaction, message )
	if (reaction.partial) { // Vérification de si la réaction est partial ou non
		try {
			await reaction.fetch();
		} catch (error) {   // Si le message de la réaction a été supprimé cela peut causer une erreure qu'il faut gérer
			console.error("Quelque chose s'est mal passé dans la récupération de la réaction : ", error);
			return; // Retourne `reaction.message.author` en tant que undefined/null
		}
	}
    let ReactionEmoji = reaction._emoji.name;
    await reaction.users.fetch();
    let ReactionUser = Array.from(reaction.users.cache.entries());
    let ReactionMessage = reaction.message;

    // Partie troll pour Chloé
    for(let i = 0; i < ReactionUser.length; i++){
        if(ReactionUser[i] == ids.cookieID || ReactionEmoji == "🍪"){
            ReactionMessage.channel.send("+1 point sourire pour Chloé ! :D");
        }
    }

    // Partie vérifiant si c'était intéressant de récupérer tout ça ( Ouai on fait c'qu'on peut hein!)
    



    // débug
    //console.log(ReactionEmoji);
    //console.log(ReactionUser);
    //console.log(ReactionMessage);

    //console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	//console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
};
