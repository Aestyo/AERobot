const Discord = require('discord.js');
const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/droprates.json');
let loot_table = JSON.parse(json);

module.exports.run = async (client, message, args) => {
  // Variables principales
  json = fs.readFileSync('./lib/gdo/emoji.json');
  let emoji = JSON.parse(json);
  var answer,
    box = -1,
    rng = Math.floor(Math.random() * 100 + 1),
    exp = 101 - rng,
    rates = [],
    item = {},
    Embed1 = new Discord.MessageEmbed(),
    Embed2 = new Discord.MessageEmbed();

  // Vérification que l'utilisateur a déjà un inventaire
  const data = await client.getUser(message.author.id);
  if (data == -1) {
    message.channel.send('You have not created a character.');
    return;
  } else {
    message.delete();
  }

  // Sélection de la bonne caisse en fonction du choix de l'utilisateur
  switch (args[0]) {
    case 'common': {
      Embed1.setThumbnail('https://imgur.com/hMQP3pS.png');
      Embed1.setColor('#c6c6c6');
      box = 5;
      break;
    }
    case 'rare': {
      Embed1.setThumbnail('https://imgur.com/13eJX4h.png');
      Embed1.setColor('#71bfe3');
      box = 4;
      break;
    }
    case 'epic': {
      Embed1.setThumbnail('https://imgur.com/0ZZi4V9.png');
      Embed1.setColor('#dc25ec');
      box = 3;
      break;
    }
    case 'legendary': {
      Embed1.setThumbnail('https://imgur.com/WCovBlr.png');
      Embed1.setColor('#f5b336');
      box = 2;
      break;
    }
    case 'mythic': {
      Embed1.setThumbnail('https://imgur.com/OvRJ1TR.png');
      Embed1.setColor('#e33d38');
      box = 1;
      break;
    }
    case 'secret': {
      Embed1.setThumbnail('https://imgur.com/eSaTpgc.png');
      Embed1.setColor('#272425');
      box = 0;
      break;
    }
  }

  // Vérification que l'utilisateur possède la box selectionnée
  if (data.boxes[box] <= 0) {
    message.channel.send('You do not own this box.');
    return;
  }

  // Création de la table de loot en fonction de la table sélectionnée
  rates.push(loot_table[box].mythic);
  rates.push(loot_table[box].mythic + loot_table[box].legendary);
  rates.push(
    loot_table[box].mythic + loot_table[box].legendary + loot_table[box].epic
  );
  rates.push(
    loot_table[box].mythic +
      loot_table[box].legendary +
      loot_table[box].epic +
      loot_table[box].rare
  );
  rates.push(
    loot_table[box].mythic +
      loot_table[box].legendary +
      loot_table[box].epic +
      loot_table[box].rare +
      loot_table[box].common
  );

  // Envoi de la RNG et de la table à la fonction qui renverra l'objet gagné
  item = OpeningBox(rng, rates);

  // Modification de l'inventaire du joueur
  data.boxes[box]--;
  data.experience += exp;
  data.weapons.push(item);
  data.statistics.opened_boxes++;
  data.statistics.xp_earned += exp;
  client.updateUser(message.author.id, { boxes: data.boxes });
  client.updateUser(message.author.id, { experience: data.experience });
  client.updateUser(message.author.id, { weapons: data.weapons });
  client.updateUser(message.author.id, { statistics: data.statistics });

  // Affichage de la roue du butin
  Embed1.setTitle(`**ÆRobot** - __Box opening__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png')
    .setDescription('The wheel is spinning!');

  switch (box) {
    case 5: {
      Embed2.setThumbnail('https://imgur.com/hMQP3pS.png');
      switch (item.rarity) {
        case 5: {
          if (Math.random() * 100 < 10) {
            Embed1.setImage(
              'https://cdn.discordapp.com/attachments/485917925610487828/837706639091695678/common-box-common-land-2.gif'
            );
          } else {
            Embed1.setImage(
              'https://cdn.discordapp.com/attachments/837691458810413057/837692012870238218/common-box-common-land.gif'
            );
          }
          Embed2.setColor('#c6c6c6').setDescription(emoji[0].common);
          break;
        }
        case 4: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692062815223818/common-box-rare-land.gif'
          );
          Embed2.setColor('#71bfe3').setDescription(emoji[0].rare);
          break;
        }
        case 3: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692032905773106/common-box-epic-land.gif'
          );
          Embed2.setColor('#dc25ec').setDescription(emoji[0].epic);
          break;
        }
        case 2: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692047182921748/common-box-legendary-land.gif'
          );
          Embed2.setColor('#f5b336').setDescription(emoji[0].legendary);
          break;
        }
        case 1: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692055043964949/common-box-mythic-land.gif'
          );
          Embed2.setColor('#e33d38').setDescription(emoji[0].mythic);
          break;
        }
      }
      break;
    }
    case 4: {
      Embed2.setThumbnail('https://imgur.com/lbWkiYN.png');
      switch (item.rarity) {
        case 5: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692109628768296/rare-box-common-land.gif'
          );
          Embed2.setColor('#c6c6c6').setDescription(emoji[0].common);
          break;
        }
        case 4: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692185934954576/rare-box-rare-land.gif'
          );
          Embed2.setColor('#71bfe3').setDescription(emoji[0].rare);
          break;
        }
        case 3: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692109582237696/rare-box-epic-land.gif'
          );
          Embed2.setColor('#dc25ec').setDescription(emoji[0].epic);
          break;
        }
        case 2: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692109955530762/rare-box-legendary-land.gif'
          );
          Embed2.setColor('#f5b336').setDescription(emoji[0].legendary);
          break;
        }
        case 1: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692207036760146/rare-box-mythic-land.gif'
          );
          Embed2.setColor('#e33d38').setDescription(emoji[0].mythic);
          break;
        }
      }
      break;
    }
    case 3: {
      Embed2.setThumbnail('https://imgur.com/80YZ2tE.png');
      switch (item.rarity) {
        case 5: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692091479228486/epic-box-common-land.gif'
          );
          Embed2.setColor('#c6c6c6').setDescription(emoji[0].common);
          break;
        }
        case 4: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692103236124672/epic-box-rare-land.gif'
          );
          Embed2.setColor('#71bfe3').setDescription(emoji[0].rare);
          break;
        }
        case 3: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692098412544010/epic-box-epic-land.gif'
          );
          Embed2.setColor('#dc25ec').setDescription(emoji[0].epic);
          break;
        }
        case 2: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692100526604328/epic-box-legendary-land.gif'
          );
          Embed2.setColor('#f5b336').setDescription(emoji[0].legendary);
          break;
        }
        case 1: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692100840783902/epic-box-mythic-land.gif'
          );
          Embed2.setColor('#e33d38').setDescription(emoji[0].mythic);
          break;
        }
      }
      break;
    }
    case 2: {
      Embed2.setThumbnail('https://imgur.com/i6V2bIn.png');
      switch (item.rarity) {
        case 5: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692096176586792/legendary-box-common-land.gif'
          );
          Embed2.setColor('#c6c6c6').setDescription(emoji[0].common);
          break;
        }
        case 4: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692101298880563/legendary-box-rare-land.gif'
          );
          Embed2.setColor('#71bfe3').setDescription(emoji[0].rare);
          break;
        }
        case 3: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692096810844170/legendary-box-epic-land.gif'
          );
          Embed2.setColor('#dc25ec').setDescription(emoji[0].epic);
          break;
        }
        case 2: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692099658514452/legendary-box-legendary-land.gif'
          );
          Embed2.setColor('#f5b336').setDescription(emoji[0].legendary);
          break;
        }
        case 1: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692099474096187/legendary-box-mythic-land.gif'
          );
          Embed2.setColor('#e33d38').setDescription(emoji[0].mythic);
          break;
        }
      }
      break;
    }
    case 1: {
      Embed2.setThumbnail('https://imgur.com/rfDYRVx.png');
      switch (item.rarity) {
        case 5: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692206889566248/mythic-box-common-land.gif'
          );
          Embed2.setColor('#c6c6c6').setDescription(emoji[0].common);
          break;
        }
        case 4: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692207267971123/mythic-box-rare-land.gif'
          );
          Embed2.setColor('#71bfe3').setDescription(emoji[0].rare);
          break;
        }
        case 3: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692202858840124/mythic-box-epic-land.gif'
          );
          Embed2.setColor('#dc25ec').setDescription(emoji[0].epic);
          break;
        }
        case 2: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837692206885896282/mythic-box-legendary-land.gif'
          );
          Embed2.setColor('#f5b336').setDescription(emoji[0].legendary);
          break;
        }
        case 1: {
          Embed1.setImage(
            'https://cdn.discordapp.com/attachments/837691458810413057/837693751928684634/mythic-box-mythic-land.gif'
          );
          Embed2.setColor('#e33d38').setDescription(emoji[0].mythic);
          break;
        }
      }
      break;
    }
  }
  answer = await message.channel.send(Embed1);

  // Affichage dans la console des butins exceptionnels
  if (rng <= 5) {
    client.log(
      `DROP Exceptionnel pour "${message.author.tag}" ! Il a fait un "${rng}" sur une "${args[0]}" et a obtenu "${item.name}"`,
      'unbox'
    );
  }
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Affichage du résultat de la roue
  Embed2.setTitle(`**ÆRobot** - __Box opening__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png')
    .setImage(item.url);
  let resultString = '';
  resultString += `- A **${item.name}** !\n- And **${exp}** XP`;

  if (item.rarity < box) {
    resultString += `\nYou're **lucky** !`;
  } else if (item.rarity > box) {
    resultString += `\nYou're **unlucky** !`;
  }
  Embed2.addFields({
    name: '__**You get :**__',
    value: resultString,
    inline: true,
  });
  answer.edit(Embed2);
};

OpeningBox = (rng, rates) => {
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
  let item;
  if (rng < 0) {
    console.log('Impossible.');
  } else if (rng <= rates[0]) {
    item = mythic[Math.floor(Math.random() * mythic.length)];
  } else if (rng <= rates[1]) {
    item = legendary[Math.floor(Math.random() * legendary.length)];
  } else if (rng <= rates[2]) {
    item = epic[Math.floor(Math.random() * epic.length)];
  } else if (rng <= rates[3]) {
    item = rare[Math.floor(Math.random() * rare.length)];
  } else if (rng <= rates[4]) {
    item = common[Math.floor(Math.random() * common.length)];
  }
  return item;
};
