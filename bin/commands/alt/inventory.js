const Discord = require('discord.js');
const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message, args) => {
  let data = -1;
  if (args[0]) {
    data = await client.getUser(args[0].slice(2, -1));
  } else {
    data = await client.getUser(message.author.id);
  }
  if (!data) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Inventory of ${data.usertag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setImage('https://imgur.com/MAUfuvE.png')
    //.setThumbnail('https://i.imgur.com/83TjpQt.png')
    .setColor('#0099ff')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  let néant = '',
    mythique = '',
    légendaire = '',
    épique = '',
    rare = '',
    commun = '';

  for (let i = 0; i < data.weapons.length; i++) {
    if (data.weapons[i].rarity == 0) {
      néant += `- ${data.weapons[i].name} ( ${data.weapons[i].durability_actual}% )\n`;
    }
    if (data.weapons[i].rarity == 1) {
      mythique += `- ${data.weapons[i].name} ( ${data.weapons[i].durability_actual}% )\n`;
    }
    if (data.weapons[i].rarity == 2) {
      légendaire += `- ${data.weapons[i].name} ( ${data.weapons[i].durability_actual}% )\n`;
    }
    if (data.weapons[i].rarity == 3) {
      épique += `- ${data.weapons[i].name} ( ${data.weapons[i].durability_actual}% )\n`;
    }
    if (data.weapons[i].rarity == 4) {
      rare += `- ${data.weapons[i].name} ( ${data.weapons[i].durability_actual}% )\n`;
    }
    if (data.weapons[i].rarity == 5) {
      commun += `- ${data.weapons[i].name} ( ${data.weapons[i].durability_actual}% )\n`;
    }
  }
  if (data.boxes[1] > 0) {
    mythique += `- <:Box_Mythic:838053875407781928> Mythic Box ( x${data.boxes[1]} )\n`;
  }
  if (data.boxes[2] > 0) {
    légendaire += `- <:Box_Legendary:838053875595608134> Legendary Box ( x${data.boxes[2]} )\n`;
  }
  if (data.boxes[3] > 0) {
    épique += `- <:Box_Epic:838053871980380200> Epic Box ( x${data.boxes[3]} )\n`;
  }
  if (data.boxes[4] > 0) {
    rare += `- <:Box_Rare:838053874731843605> Rare Box ( x${data.boxes[4]} )\n`;
  }
  if (data.boxes[5] > 0) {
    commun += `- <:Box_Common:838053861021319228> Common Box ( x${data.boxes[5]} )\n`;
  }
  let healthbar = '';
  for (let i = 0; i < 8; i++) {
    if (i < data.health / 12.5) {
      healthbar += ':red_square:';
    } else {
      healthbar += ':black_large_square:';
    }
  }

  let expbar = '';
  for (let i = 0; i < 8; i++) {
    if (i < data.experience / (12.5 * data.level)) {
      expbar += ':yellow_square:';
    } else {
      expbar += ':black_large_square:';
    }
  }

  Embed.addFields({
    name: `__:heart: HealthPoints :__ `,
    value: `${healthbar} \n( ${data.health} / 100 )`,
    inline: true,
  });

  Embed.addFields({
    name: `__<:Experience:836593968136978432> Level ${data.level} :__`,
    value: `${expbar} \n( ${data.experience} / ${data.level * 100} )`,
    inline: true,
  });

  Embed.addFields({
    name: `__<:Money:836593967993847828> Money :__ `,
    value: `**${data.money}** €`,
    inline: true,
  });

  if (mythique) {
    Embed.addFields({
      name: `${emoji[0].mythic} **:** `,
      value: `${mythique}`,
    });
  }
  if (légendaire) {
    Embed.addFields({
      name: `${emoji[0].legendary} **:**`,
      value: `${légendaire}`,
    });
  }
  if (épique) {
    Embed.addFields({
      name: `${emoji[0].epic} **:**`,
      value: `${épique}`,
    });
  }
  if (rare) {
    Embed.addFields({
      name: `${emoji[0].rare} **:**`,
      value: `${rare}`,
    });
  }
  if (commun) {
    Embed.addFields({
      name: `${emoji[0].common} **:**`,
      value: `${commun}`,
    });
  }

  message.channel.send(Embed);
};
