const Discord = require('discord.js');
const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message.author.id);
  if (!data) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  let hourly = '',
    daily = '',
    weekly = '',
    monthly = '',
    yearly = '';

  if (Date.now() - data.hourly_cooldown > 3600000) {
    hourly = '**Available now!**';
  } else {
    let temp = 3600000 - Date.now() + data.hourly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) hourly += `**${days}** days, `;
    if (hours > 0) hourly += `**${hours}** hours, `;
    if (minutes > 0) hourly += `**${minutes}** minutes, `;
    hourly += `**${seconds}** seconds.`;
  }

  if (Date.now() - data.daily_cooldown > 86400000) {
    daily = '**Available now!**';
  } else {
    let temp = 86400000 - Date.now() + data.daily_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) daily += `**${days}** days, `;
    if (hours > 0) daily += `**${hours}** hours, `;
    if (minutes > 0) daily += `**${minutes}** minutes, `;
    daily += `**${seconds}** seconds.`;
  }

  if (Date.now() - data.weekly_cooldown > 604800000) {
    weekly = '**Available now!**';
  } else {
    let temp = 604800000 - Date.now() + data.weekly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) weekly += `**${days}** days, `;
    if (hours > 0) weekly += `**${hours}** hours, `;
    if (minutes > 0) weekly += `**${minutes}** minutes, `;
    weekly += `**${seconds}** seconds.`;
  }

  if (Date.now() - data.monthly_cooldown > 2629800000) {
    monthly = '**Available now!**';
  } else {
    let temp = 2629800000 - Date.now() + data.monthly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) monthly += `**${days}** days, `;
    if (hours > 0) monthly += `**${hours}** hours, `;
    if (minutes > 0) monthly += `**${minutes}** minutes, `;
    monthly += `**${seconds}** seconds.`;
  }

  if (Date.now() - data.yearly_cooldown > 31557600000) {
    yearly = '**Available now!**';
  } else {
    let temp = 31557600000 - Date.now() + data.yearly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) yearly += `**${days}** days, `;
    if (hours > 0) yearly += `**${hours}** hours, `;
    if (minutes > 0) yearly += `**${minutes}** minutes, `;
    yearly += `**${seconds}** seconds.`;
  }

  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Cooldowns de ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setImage('https://imgur.com/NGQW8oT.png')
    //.setThumbnail('https://i.imgur.com/83TjpQt.png')
    .setColor('#0099ff')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png')
    .addFields(
      { name: `${emoji[1].common} Common box :`, value: hourly, inline: true },
      { name: `${emoji[1].rare} Rare box :`, value: daily },
      { name: `${emoji[1].epic} Epic box :`, value: weekly, inline: true },
      { name: `${emoji[1].legendary} Legendary box :`, value: monthly },
      { name: `${emoji[1].mythic} Mythic box :`, value: yearly, inline: true }
    );
  message.channel.send(Embed);
};
