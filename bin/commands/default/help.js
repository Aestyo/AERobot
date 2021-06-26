module.exports.run = async (client, message) => {
  message.author.send('https://imgur.com/04rfm4G.png');
  message.author.send(
    "__**Commandes générales**__ :\n\n**• &help →** Affiche ce menu.\n**• &invite →** Envoie un lien d'invitation du bot."
  );
  message.author.send(
    "\u200B__**Commandes admin :**__\n\n**• &clear [Nombre] →** Supprime un certain nombre de message.\n**• &host →** Envoie un tas d'informations sur l'host.\n**• &kick [Tag&Random]→** Éjecte la personne sélectionée ou une personne au hasard.\n**• &ping →** Envoie une requête de ping.\n**• &uptime →** Renvoie la durée de fonctionnement du bot.\n**• &whois [Nombre] →** Envoie un tas d'informations sur la personne possédant cet ID.\n\n"
  );
  message.author.send(
    "\u200B__**Commandes fun :**__\n\n**• &animated [Pseudo1] [Pseudo2] →** Alterne votre pseudo entre l'argument 1 et 2.\n**• &cat →** Envoie une photo de chat.\n**• &dog →** Envoie une photo de chien.\n**• &epic →** EPIC\n**• &meme →** Envoie un meme tiré de r&Memes.\n**• &suicide →** La vie vaut la peine d'être vécue.\n**• &tocard →** Insulte le bot, vas-y vas-y ( Attention à la répartie ).\n**• &wide →** Vladimir Putin but WIDER.\n"
  );
  message.author.send(
    '__**Autre liens :**__ <:GitHub:806596309838331934> https://github.com/Aestyo/AERobot'
  );
  if (message.guild != null) {
    message.channel.send(
      ':inbox_tray: La liste des commandes vous a été envoyée en message privé.'
    );
  }
};
