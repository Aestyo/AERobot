const Discord = require('discord.js');
const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/common.json');
let common = JSON.parse(json);
json = fs.readFileSync('./lib/gdo/rare.json');
let rare = JSON.parse(json);
json = fs.readFileSync('./lib/gdo/epic.json');
let epic = JSON.parse(json);
json = fs.readFileSync('./lib/gdo/legendary.json');
let legendary = JSON.parse(json);
json = fs.readFileSync('./lib/gdo/mythic.json');
let mythic = JSON.parse(json);
json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);
var loot = {
  common,
  rare,
  epic,
  legendary,
  mythic,
};

module.exports.run = async (client, message, args) => {
  const data = await client.getUser(message);
  if (!data) {
    message.channel.send("Vous n'avez pas crée de personnage.");
    return;
  }

  // Première partie de l'Embed
  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Ouverture de caisse__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  // Affichage et drop en fonction de quelle caisse a été ouverte
  let item, exp, box;
  let rng = Math.floor(Math.random() * 100 + 1);
  exp = 101 - rng;
  if (args[1] == 'common') {
    Embed.setThumbnail('https://imgur.com/iuBc6g4.png'); //
    item = common_box(rng, loot);
    box = 5;
  }
  if (args[1] == 'rare') {
    Embed.setThumbnail('https://imgur.com/lbWkiYN.png'); //
    item = rare_box(rng, loot);
    box = 4;
  }
  if (args[1] == 'epic') {
    Embed.setThumbnail('https://imgur.com/80YZ2tE.png'); //
    item = epic_box(rng, loot);
    box = 3;
  }
  if (args[1] == 'legendary') {
    Embed.setThumbnail('https://imgur.com/i6V2bIn.png'); //
    item = legendary_box(rng, loot);
    box = 2;
  }
  if (args[1] == 'mythic') {
    Embed.setThumbnail('https://imgur.com/rfDYRVx.png'); //
    item = mythic_box(rng, loot);
    box = 1;
  }
  if (args[1] == 'void') {
    Embed.setThumbnail('https://imgur.com/1d1LMvT.png'); //.setColor('#282828');
  }

  // Vérification que l'utilisateur possède la box selectionnée
  if (data.boxes[box] <= 0) {
    message.channel.send(
      'Vous ne possédez pas cette caisse dans votre inventaire'
    );
    return;
  } else {
    for (let i = 0; i < data.boxes.length; i++) {
      if (data.boxes[box] != 0) {
        data.boxes[box]--;
        data.experience += exp;
        data.weapons.push(item);
        data.statistics.opened_boxes++;
        data.statistics.xp_earned += exp;
        break;
      }
    }
    client.updateUser(message, { boxes: data.boxes });
    client.updateUser(message, { experience: data.experience });
    client.updateUser(message, { weapons: data.weapons });
    client.updateUser(message, { statistics: data.statistics });
  }

  // Finition de l'Embed
  if (item.rarity == 1) {
    Embed.addFields({
      name: '__**Vous obtenez :**__',
      value: `${emoji[0].mythic} **${item.name}** \n**${exp}** points d'expérience !`,
      inline: true,
    }).setColor('#ff0000');
  } else if (item.rarity == 2) {
    Embed.addFields({
      name: '__**Vous obtenez :**__',
      value: `${emoji[0].legendary} **${item.name}** \n**${exp}** points d'expérience !`,
      inline: true,
    }).setColor('#f28c34');
  } else if (item.rarity == 3) {
    Embed.addFields({
      name: '__**Vous obtenez :**__',
      value: `${emoji[0].epic} **${item.name}** \n**${exp}** points d'expérience !`,
      inline: true,
    }).setColor('#a728ab');
  } else if (item.rarity == 4) {
    Embed.addFields({
      name: '__**Vous obtenez :**__',
      value: `${emoji[0].rare} **${item.name}** \n**${exp}** points d'expérience !`,
      inline: true,
    }).setColor('#3a9cff');
  } else if (item.rarity == 5) {
    Embed.addFields({
      name: '__**Vous obtenez :**__',
      value: `${emoji[0].common} **${item.name}** \n**${exp}** points d'expérience !`,
      inline: true,
    }).setColor('#cfcfca');
  }
  Embed.setImage(item.url);
  message.channel.send(Embed);
};

common_box = (rng, loot) => {
  let item;
  if (rng < 0) {
    console.log('Impossible.');
  } else if (rng <= 1) {
    item = loot.mythic[Math.floor(Math.random() * loot.mythic.length)];
  } else if (rng <= 6) {
    item = loot.legendary[Math.floor(Math.random() * loot.legendary.length)];
  } else if (rng <= 16) {
    item = loot.epic[Math.floor(Math.random() * loot.epic.length)];
  } else if (rng <= 41) {
    item = loot.rare[Math.floor(Math.random() * loot.rare.length)];
  } else {
    item = loot.common[Math.floor(Math.random() * loot.common.length)];
  }
  return item;
};

rare_box = (rng, loot) => {
  let item;
  if (rng < 0) {
    console.log('Impossible.');
  } else if (rng <= 3) {
    item = loot.mythic[Math.floor(Math.random() * loot.mythic.length)];
  } else if (rng <= 13) {
    item = loot.legendary[Math.floor(Math.random() * loot.legendary.length)];
  } else if (rng <= 38) {
    item = loot.epic[Math.floor(Math.random() * loot.epic.length)];
  } else if (rng <= 98) {
    item = loot.rare[Math.floor(Math.random() * loot.rare.length)];
  } else {
    item = loot.common[Math.floor(Math.random() * loot.common.length)];
  }
  console.log(item);
  return item;
};

epic_box = (rng, loot) => {
  let item;
  if (rng < 0) {
    console.log('Impossible.');
  } else if (rng <= 10) {
    item = loot.mythic[Math.floor(Math.random() * loot.mythic.length)];
  } else if (rng <= 35) {
    item = loot.legendary[Math.floor(Math.random() * loot.legendary.length)];
  } else if (rng <= 95) {
    item = loot.epic[Math.floor(Math.random() * loot.epic.length)];
  } else if (rng <= 98) {
    item = loot.rare[Math.floor(Math.random() * loot.rare.length)];
  } else {
    item = loot.common[Math.floor(Math.random() * loot.common.length)];
  }
  return item;
};

legendary_box = (rng, loot) => {
  let item;
  if (rng < 0) {
    console.log('Impossible.');
  } else if (rng <= 25) {
    item = loot.mythic[Math.floor(Math.random() * loot.mythic.length)];
  } else if (rng <= 85) {
    item = loot.legendary[Math.floor(Math.random() * loot.legendary.length)];
  } else if (rng <= 95) {
    item = loot.epic[Math.floor(Math.random() * loot.epic.length)];
  } else if (rng <= 98) {
    item = loot.rare[Math.floor(Math.random() * loot.rare.length)];
  } else {
    item = loot.common[Math.floor(Math.random() * loot.common.length)];
  }
  return item;
};

mythic_box = (rng, loot) => {
  let item;
  if (rng < 0) {
    console.log('Impossible.');
  } else if (rng <= 60) {
    item = loot.mythic[Math.floor(Math.random() * loot.mythic.length)];
  } else if (rng <= 85) {
    item = loot.legendary[Math.floor(Math.random() * loot.legendary.length)];
  } else if (rng <= 95) {
    item = loot.epic[Math.floor(Math.random() * loot.epic.length)];
  } else if (rng <= 98) {
    item = loot.rare[Math.floor(Math.random() * loot.rare.length)];
  } else {
    item = loot.common[Math.floor(Math.random() * loot.common.length)];
  }
  return item;
};
