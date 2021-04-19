const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  var roll = getRollParams(message, args);
  if (roll == -1) return;
  var Embed = await createEmbed(roll, message.author);
  message.channel.send(Embed);
};

function getRollParams(message, args) {
  let buffer;
  buffer = args[0].split('d');
  temp_diceNumber = buffer[0];
  buffer = buffer[1].split('+');
  temp_diceSize = buffer[0];
  temp_addition = buffer[1];

  var roll = {
    number: Number(temp_diceNumber),
    size: Number(temp_diceSize),
    addition: Number(temp_addition),
    goal: Number(args[1]),
  };

  if (
    !isNaN(roll.diceNumber) ||
    !isNaN(roll.diceSize) ||
    roll.diceSize < 1 ||
    roll.diceSize > 99999980000001 ||
    roll.diceNumber < 1 ||
    roll.diceNumber > 99999980000001
  ) {
    message.channel.send(
      ':no_entry: Erreur ! Vous devenez entrer des nombres entre 1 et 99999980000001.'
    );
    return -1;
  }

  if (roll.addition < 1 || roll.addition > 99999980000001) {
    message.channel.send(
      ':no_entry: Erreur ! Vous devenez entrer des nombres entre 1 et 99999980000001.'
    );
    return -1;
  }
  if (roll.goal < 1 || roll.goal > 99999980000001) {
    message.channel.send(
      ':no_entry: Erreur ! Vous devenez entrer des nombres entre 1 et 99999980000001.'
    );
    return -1;
  }
  return roll;
}

async function createEmbed(roll, author) {
  var total = 0;
  var quality = 0;
  // Informations ne changeant pas selon le dé ---------------------------------
  var Embed = new Discord.MessageEmbed()
    .setTitle('**ÆRobot** - __Lancé de dé__')
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      author.username,
      author.avatarURL(),
      `https://discordapp.com/users/${author.id}`
    )
    .setImage('https://imgur.com/lsWZjoW.png')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  // Description de l'Embed ---------------------------------
  if (!roll.addition) {
    if (roll.goal) {
      Embed.setDescription(
        `Lancé de ${roll.number}  dé(s) de ${roll.size} faces.`
      );
    } else {
      Embed.setDescription(
        `Lancé de ${roll.number}  dé(s) de ${roll.size} faces avec pour objectif ${roll.goal}.`
      );
    }
  } else {
    if (!roll.goal) {
      Embed.setDescription(
        `Lancé de ${roll.number}  dé(s) de ${roll.size} faces + ${roll.addition}.`
      );
    } else {
      Embed.setDescription(
        `Lancé de ${roll.number}  dé(s) de ${roll.size} faces + ${roll.addition} avec pour objectif ${roll.goal}.`
      );
    }
  }

  // Calcul des jets de dé ---------------------------------
  for (let i = 0; i < roll.number; i++) {
    var dice = new Array(roll.number);
    dice[i] = Math.floor(Math.random() * roll.size + 1);
    if (dice[i] % 2 == 0) quality++;
    total = total + dice[i];
    if (roll.number < 25) {
      Embed.addFields({
        name: `Tirage du dé ${i + 1}`,
        value: `${dice[i]} / ${roll.size}`,
        inline: true,
      });
    }
  }

  // Qualité et totaux ---------------------------------
  Embed.addFields({
    name: '__**Qualité du jet :**__ :',
    value: `${quality}`,
  });
  if (!isNaN(roll.addition)) {
    Embed.addFields({
      name: '__**Total des dés jetés**__ :',
      value: `${total + roll.addition} / ${
        roll.number * roll.size + roll.addition
      }`,
    });
  } else {
    Embed.addFields({
      name: '__**Total des dés jetés**__ :',
      value: `${total} / ${roll.number * roll.size}`,
    });
  }

  // Objectif ---------------------------------
  if (!isNaN(roll.goal)) {
    if (total < roll.goal) {
      Embed.setThumbnail('https://imgur.com/xwPGayr.png').setColor('#f04747');
    } else if (total >= roll.goal) {
      Embed.setThumbnail('https://imgur.com/YHXc4Us.png').setColor('#43b581');
    }
  } else {
    Embed.setThumbnail('https://imgur.com/VKHPSVi.png').setColor('#0099ff');
  }

  // Renvoi de l'Embed---------------------------------
  return Embed;
}
