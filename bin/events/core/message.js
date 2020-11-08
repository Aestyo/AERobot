// Évènement : Récéption d'un message par le bot
module.exports = (client, message) => {
  const config = require("../../../config/core");
  const ids = require("../../../config/ids");

  if (message.author.bot) return;

  if (message.guild == null) {
    if (message.content.startsWith("/bugbounty")) {
      const owner = client.users.cache.get(ids.ownerID);
      owner.send(`${message.author.tag} vous envoie un message : ${message.content}`);
      return;
    }else if(message.author.id != ids.ownerID){
      message.channel.send(`Les commandes par message privé ne sont pas encore disponible\nSi vous voulez contacter Æstyo entrez "/bugbounty" devant votre message.`)
    }else{
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const commande = args.shift();
      const cmd = client.commands.get(commande);
      if (!cmd) {
        message.channel.send('La commande que vous avez enter est invalide, faites "/help" pour reçevoir la liste des commandes en message privé.');
        return;
      }
      cmd.run(client, message, args);
    }
    console.log(`${message.author.tag} a envoyé un message privé au bot : ${message.content}`);
    return;
  }

  if (message.content.startsWith(config.prefix)) {
    console.log(`USER: \"${message.author.tag}\" a émit une commande sur le serveur \"${message.guild.name}\" : ${message.content}`);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if (!cmd) {
      message.channel.send('La commande que vous avez enter est invalide, faites "/help" pour reçevoir la liste des commandes en message privé.');
      return;
    }
    cmd.run(client, message, args);
    return;
  }
};
