const Discord = require('discord.js');

var diceSize, diceNumber, addition;
var total;
var quality;
module.exports.run = async (client, message, args) => {
  getArgs(message, args);
  total = 0;
  quality = 0;

  const Embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**ÆRobot** - __Lancé de dé__')
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setThumbnail('https://imgur.com/VKHPSVi.png')
    .setImage('https://imgur.com/lsWZjoW.png')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');
  if (!addition) {
    Embed.setDescription(`Lancé de ${diceNumber}  dé(s) de ${diceSize} faces.`);
  } else {
    Embed.setDescription(
      `Lancé de ${diceNumber}  dé(s) de ${diceSize} faces + ${addition}.`
    );
  }

  for (let i = 0; i < diceNumber; i++) {
    var dice = new Array(diceNumber);
    dice[i] = Math.floor(Math.random() * diceSize + 1);
    if (dice[i] % 2 == 0) quality++;
    total = total + dice[i];
    if (diceNumber < 25) {
      Embed.addFields({
        name: `Tirage du dé ${i + 1}`,
        value: `${dice[i]} / ${diceSize}`,
        inline: true,
      });
    }
  }

  Embed.addFields({
    name: '__**Qualité du jet :**__ :',
    value: `${quality}`,
  });
  Embed.addFields({
    name: '__**Total des dés jetés**__ :',
    value: `${total} / ${diceNumber * diceSize}`,
  });

  message.channel.send(Embed);
};

async function getArgs(message, args) {
  let buffer;
  buffer = args[0].split('d');
  diceNumber = buffer[0];
  buffer = buffer[1].split('+');
  diceSize = buffer[0];
  addition = buffer[1];
  console.log(`dice Number ${diceNumber} / diceSize ${diceSize}`);
  if (
    isNaN(diceNumber) ||
    isNaN(diceSize) ||
    diceSize < 1 ||
    diceSize > 99999980000001 ||
    diceNumber < 1 ||
    diceNumber > 99999980000001
  )
    return message.channel.send(
      ':no_entry: Erreur ! Vous devenez entrer des nombres entre 1 et 99999980000001.'
    );

  if (addition < 1 || addition > 99999980000001)
    return message.channel.send(
      ':no_entry: Erreur ! Vous devenez entrer des nombres entre 1 et 99999980000001.'
    );
}
