const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message.author.id);
  if (data == -1) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  if (Date.now() - data.hourly_cooldown > 3600000) {
    message.reply(
      `:white_check_mark:  You received a **common box** ! ${emoji[1].common}`
    );
    data.hourly_cooldown = Date.now();
    data.boxes[5]++;
    client.updateUser(message.author.id, {
      hourly_cooldown: data.hourly_cooldown,
    });
    client.updateUser(message.author.id, { boxes: data.boxes });
  } else {
    let hourly = '';
    let temp = 3600000 - Date.now() + data.hourly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) hourly += `${days} days, `;
    if (hours > 0) hourly += `${hours} hours, `;
    if (minutes > 0) hourly += `${minutes} minutes, `;
    hourly += `${seconds} seconds`;
    message.reply(
      `:no_entry:  You must wait **${hourly}** before you can receive your common box ! ${emoji[1].common}`
    );
  }
};
