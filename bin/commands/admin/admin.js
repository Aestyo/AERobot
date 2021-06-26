module.exports.run = async (client, message, args) => {
  //const data = await client.getUser(message.author.id);

  switch (args[0]) {
    case 'help': {
      message.channel.send('https://imgur.com/yZzeYRs.png');
      message.channel.send(
        '__**Commande "admin"**__ :\n**• &admin help →** Affiche ce menu.\n**• &admin rules →** Affiche l\'état des règles.\n**• &admin toggle [règle] →** Change l\'état de la règle sélectionnée.'
      );
      break;
    }
    case 'rules': {
      break;
    }
    default: {
      message.channel.send('https://imgur.com/yZzeYRs.png');
      message.channel.send(
        "__**Commandes générales**__ :\n\n**• &admin →** Affiche ce menu.\n**• &kick @User →** Éjecte l'utilisateur @.\n**• &mutedeaf [ID] →** Rend sourd puis muet à tour de rôle l'utilisateur possédant cet ID."
      );
      break;
    }
  }
};
