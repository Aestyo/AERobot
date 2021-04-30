const Discord = require('discord.js');
const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message);
  if (!data) {
    message.channel.send("Vous n'avez pas crée de personnage.");
    return;
  }

  console.log(Date.now());
  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Inventaire de ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setImage('https://imgur.com/CtSFhjA.png')
    .setThumbnail('https://i.imgur.com/83TjpQt.png')
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
    mythique += `- <:Box_Mythic:837037398922887200> Caisse mythique ( x${data.boxes[1]} )\n`;
  }
  if (data.boxes[2] > 0) {
    légendaire += `- <:Box_Legendary:837037398167912481> Caisse légendaire ( x${data.boxes[2]} )\n`;
  }
  if (data.boxes[3] > 0) {
    épique += `- <:Box_Epic:837037398655369257> Caisse épique ( x${data.boxes[3]} )\n`;
  }
  if (data.boxes[4] > 0) {
    rare += `- <:Box_Rare:837037403096350740> Caisse rare ( x${data.boxes[4]} )\n`;
  }
  if (data.boxes[5] > 0) {
    commun += `- <:Box_Common:837037397346353162> Caisse commune ( x${data.boxes[5]} )\n`;
  }

  Embed.addFields({
    name: `__<:Money:836593967993847828> Money :__ `,
    value: `**${data.money}** €`,
    inline: true,
  });

  Embed.addFields({
    name: `__<:Experience:836593968136978432> Expérience :__`,
    value: `Niveau : **${data.level}**    ( ${data.experience}/${
      data.level * 100
    } )`,
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
