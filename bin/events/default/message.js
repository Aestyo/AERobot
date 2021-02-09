// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  if (message.author.bot) return;

  if (message.guild == null){
    if(message.content.startsWith("/report") || message.content.startsWith("/help")){
      client.log(`${message.author.tag} a émit une commande en message privé : ${message.content}`, "mess");
    }else if(message.content.startsWith("/")){
      message.reply('La commande que vous avez enter est invalide, faites "/help"');
      return;
    }else{
      message.author.send('Tu sais que ça sert à rien de me raconter ta vie.');
    }
  }else{
    
  }

  var prefix = "/";
  if (message.content.startsWith(prefix)) {    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift().toLowerCase();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send('La commande que vous avez enter est invalide, faites "/help" pour reçevoir la liste des commandes en message privé.');
      return;
    }
    client.log(`${message.author.tag} a émit une commande sur le serveur ${message.guild.name} : ${message.content}`, "mess");
    cmd.run(client, message, args);
    return;
  }
};
