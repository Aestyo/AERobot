const Discord = require('discord.js');

module.exports.run = async (client, message) => {
  const data = await client.getUser(message);
  if (!data) {
    message.channel.send("Vous n'avez pas crée de personnage.");
    return;
  }

  let hourly = '',
    daily = '',
    weekly = '',
    monthly = '',
    yearly = '';

  if (Date.now() - data.hourly_cooldown > 3600000) {
    hourly = 'Disponible maintenant!';
  } else {
    let temp = 3600000 - Date.now() + data.hourly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) hourly += `**${days}** jours, `;
    if (hours > 0) hourly += `**${hours}** heures, `;
    if (minutes > 0) hourly += `**${minutes}** minutes, `;
    hourly += `**${seconds}** secondes.`;
  }

  if (Date.now() - data.daily_cooldown > 86400000) {
    daily = 'Disponible maintenant!';
  } else {
    let temp = 86400000 - Date.now() + data.daily_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) daily += `**${days}** jours, `;
    if (hours > 0) daily += `**${hours}** heures, `;
    if (minutes > 0) daily += `**${minutes}** minutes, `;
    daily += `**${seconds}** secondes.`;
  }

  if (Date.now() - data.weekly_cooldown > 604800000) {
    weekly = 'Disponible maintenant!';
  } else {
    let temp = 604800000 - Date.now() + data.weekly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) weekly += `**${days}** jours, `;
    if (hours > 0) weekly += `**${hours}** heures, `;
    if (minutes > 0) weekly += `**${minutes}** minutes, `;
    weekly += `**${seconds}** secondes.`;
  }

  if (Date.now() - data.monthly_cooldown > 2629800000) {
    monthly = 'Disponible maintenant!';
  } else {
    let temp = 2629800000 - Date.now() + data.monthly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) monthly += `**${days}** jours, `;
    if (hours > 0) monthly += `**${hours}** heures, `;
    if (minutes > 0) monthly += `**${minutes}** minutes, `;
    monthly += `**${seconds}** secondes.`;
  }

  if (Date.now() - data.yearly_cooldown > 31557600000) {
    yearly = 'Disponible maintenant!';
  } else {
    let temp = 31557600000 - Date.now() + data.yearly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) yearly += `**${days}** jours, `;
    if (hours > 0) yearly += `**${hours}** heures, `;
    if (minutes > 0) yearly += `**${minutes}** minutes, `;
    yearly += `**${seconds}** secondes.`;
  }

  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Cooldowns de ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setImage('https://imgur.com/L8r74mx.png')
    .setThumbnail('https://i.imgur.com/83TjpQt.png')
    .setColor('#0099ff')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png')
    .addFields(
      { name: 'Caisse commune :', value: hourly, inline: true },
      { name: 'Caisse rare :', value: daily },
      { name: 'Caisse épique :', value: weekly, inline: true },
      { name: 'Caisse légendaire :', value: monthly },
      { name: 'Caisse mythique :', value: yearly, inline: true }
    );
  message.channel.send(Embed);
};
