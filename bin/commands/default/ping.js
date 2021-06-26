module.exports.run = async (client, message, args) => {
  switch(args[0]){
    case "help":{
      message.channel.send(':grey_question: La latence "Bot" est le temps mit par le bot à envoyer un message. La latence "API" est la valeur de latence instantannée renvoyée par le WebSocket de Discord.');
      break;
    }
    default:{
      var answer = await message.channel.send('Calcul de la latence en cours... :bar_chart:');
      var ping = Math.round((answer.createdTimestamp-message.createdTimestamp));
      answer.edit(`Latence Bot : **${ping}** ms. \nLatence API : **${Math.round(client.ws.ping)}** ms.`);
      client.log(`[${message.author.tag}/${message.guild.name}] Une demande de ping a été effectuée`, 'admin');
      break;
    }
  }

};