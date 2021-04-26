const Discord = require('discord.js');

module.exports = async (client, message) => {
  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Inventaire de ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setColor('#0099ff')
    //.setImage('X')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  const data = await client.getUser(message);
  let néant = '',
    mythique = '',
    légendaire = '',
    épique = '',
    rare = '',
    commun = '';

  for (let i = 0; i < data.weapons.length; i++) {
    if (data.weapons[i][1] == 0) {
      néant += `${data.weapons[i][0]}\n`;
    }
    if (data.weapons[i][1] == 1) {
      mythique += `${data.weapons[i][0]}\n`;
    }
    if (data.weapons[i][1] == 2) {
      légendaire += `${data.weapons[i][0]}\n`;
    }
    if (data.weapons[i][1] == 3) {
      épique += `${data.weapons[i][0]}\n`;
    }
    if (data.weapons[i][1] == 4) {
      rare += `${data.weapons[i][0]}\n`;
    }
    if (data.weapons[i][1] == 5) {
      commun += `${data.weapons[i][0]}\n`;
    }
  }

  if (néant) {
    Embed.addFields({ name: `**Néant :** `, value: `${néant}` });
  }
  if (mythique) {
    Embed.addFields({ name: `**Mythique :** `, value: `${mythique}` });
  }
  if (légendaire) {
    Embed.addFields({ name: `**Légendaire :**`, value: `${légendaire}` });
  }
  if (épique) {
    Embed.addFields({ name: `**Épique :**`, value: `${épique}` });
  }
  if (rare) {
    Embed.addFields({ name: `**Rare :**`, value: `${rare}` });
  }
  if (commun) {
    Embed.addFields({ name: `**Commun :**`, value: `${commun}` });
  }

  message.channel.send(Embed);
};
