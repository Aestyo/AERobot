const Discord = require('discord.js');
const fs = require('fs');
const jimp = require('jimp');

module.exports.run = async (client, message, args) => {
  // Variables principales
  json = fs.readFileSync('./lib/gdo/emoji.json');
  let emoji = JSON.parse(json);
  var isWeaponInInventory = 0,
    isDead = false,
    weaponID = -1,
    damages = 0,
    rng = Math.random(),
    healthbar = '';

  // Vérification que la cible est bien rentrée
  if (!message.mentions.members.first()) {
    message.reply('This user does not exist.');
  } else {
    targetID = message.mentions.members.first().id;
  }

  // Vérification que l'utilisateur et sa cible ont déjà un inventaire
  const data1 = await client.getUser(message.author.id);
  const data2 = await client.getUser(targetID);

  if (data1 == -1) {
    message.reply('You have not created a character yet.');
    return;
  }
  if (data2 == -1) {
    message.reply('Your target has not created a character yet.');
    return;
  }

  // Vérification que l'utilisateur a l'arme qu'il essaie d'utiliser
  if (!args[0]) {
    message.reply('You must input the weapon you want to use.');
  }
  for (let i = 0; i < data1.weapons.length; i++) {
    if (data1.weapons[i].name.toUpperCase().includes(args[0].toUpperCase())) {
      isWeaponInInventory = 1;
      weaponID = i;
      break;
    }
  }
  if (!isWeaponInInventory) {
    message.reply('You do not own this weapon.');
    return;
  }

  // Vérification que l'utilisateur peut attaquer et que la cible peut être attaquée
  /*if (!data1.canAttack) {
    message.channel.send('You cannot attack at this time.');
    return;
  }
  if (!data2.canBeAttacked) {
    message.channel.send('Your target cannot be attacked at this time.');
    return;
  }*/

  // Vérification que l'utilisateur n'est pas sous cooldown
  if (data1.lastAttack + data1.attackCooldown > Date.now()) {
    let timeRemaining = '';
    let temp = data1.attackCooldown - Date.now() + data1.lastAttack;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) timeRemaining += `${days} days, `;
    if (hours > 0) timeRemaining += `${hours} hours, `;
    if (minutes > 0) timeRemaining += `${minutes} minutes, `;
    timeRemaining += `${seconds} seconds`;
    message.reply(`You must wait **${timeRemaining}** before attacking.`);
    return;
  }

  // Phase de prise des dégâts
  for (let i = 0; i < data1.weapons[weaponID].shot_amount; i++) {
    damages +=
      Math.floor(
        rng *
          (data1.weapons[weaponID].dmg_max - data1.weapons[weaponID].dmg_min) +
          1
      ) + data1.weapons[weaponID].dmg_min;
  }

  data2.health = data2.health - damages;
  data2.statistics.timeAttacked += 1;
  data2.statistics.damage_taken += damages;
  data1.statistics.timeAttacking += 1;
  data1.statistics.damage_done += damages;
  data1.experience += Math.floor(rng * 100 + 1);
  data1.attackCooldown = data1.weapons[weaponID].cooldown;
  data1.lastAttack = Date.now();
  for (let i = 0; i < 10; i++) {
    if (i < data2.health / 10) {
      healthbar += ':red_square:';
    } else {
      healthbar += ':black_large_square:';
    }
  }

  // Vérification de la mort de la cible
  if (data2.health <= 0) {
    isDead = true;
    data2.health = 100;
    data2.statistics.deaths += 1;
    data1.statistics.kills += 1;
    Looting(message);
  }

  // Mise à jour de la base de donnée
  client.updateUser(targetID, { health: data2.health });
  client.updateUser(targetID, { statistics: data2.statistics });
  client.updateUser(message.author.id, { statistics: data1.statistics });
  client.updateUser(message.author.id, {
    attackCooldown: data1.attackCooldown,
  });
  client.updateUser(message.author.id, { lastAttack: data1.lastAttack });

  // Création de l'embed de combat
  let imageID = await Image(client, message.author.id, targetID, isDead); // Création de l'image de combat
  const attachment = new Discord.MessageAttachment(
    `./temp/${imageID}.png`,
    `${imageID}.png`
  );

  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Attack of ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .attachFiles(attachment)
    .setImage(`attachment://${imageID}.png`)
    .setThumbnail(data1.weapons[weaponID].url)
    .setColor('#0099ff')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  Embed.addFields({
    name: `__Summary of the attack__ : `,
    value: `You hit with your **${
      data1.weapons[weaponID].name
    }**, did **${damages} damages** and won **${Math.floor(
      rng * 100 + 1
    )}** XP !\n\nHealth : ${healthbar}`,
  });
  message.channel.send(Embed);
};

Image = async (client, userID, targetID, isDead) => {
  let user = client.users.cache.find((user) => user.id == userID);
  let target = client.users.cache.find((user) => user.id == targetID);
  let imageID = Math.floor(Math.random() * 1000000000000);

  var images = [
    'https://imgur.com/d2kIPsa.png',
    user.displayAvatarURL({ format: 'png' }),
    target.displayAvatarURL({ format: 'png' }),
    'https://imgur.com/YNKljPg.png',
  ];
  var jimps = [];
  //turns the images into readable variables for jimp, then pushes them into a new array
  for (var i = 0; i < images.length; i++) {
    jimps.push(jimp.read(images[i]));
  }
  //creates a promise to handle the jimps
  await Promise.all(jimps)
    .then(function (data) {
      return Promise.all(jimps);
    })
    .then(async function (data) {
      // --- THIS IS WHERE YOU MODIFY THE IMAGES --- \\
      data[0].composite(data[1], 32, 32);
      if (isDead) {
        data[2].greyscale();
        data[2].composite(data[3], 32, 32);
      }
      data[0].composite(data[2], 410, 32);

      //adds the second specified image (the jail bars) on top of the first specified image (the avatar). "0, 0" define where the second image is placed, originating from the top left corner
      //you CAN resize the second image to fit the first one like this, if necessary. The "100, 100" is the new size in pixels.
      //data[1].resize(100,100)

      //this saves our modified image
      data[0].write(`./temp/${imageID}.png`);
    });
  return imageID;
};

Looting = (message) => {
  message.channel.send('[Looting not implemented yet]');
};
