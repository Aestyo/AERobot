const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message.author.id);
  if (data == -1) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  if (Date.now() - data.daily_cooldown > 86400000) {
    message.reply(
      `:white_check_mark:  You received a **rare box** ! ${emoji[1].rare}`
    );
    data.daily_cooldown = Date.now();
    data.boxes[4]++;
    client.updateUser(message.author.id, {
      daily_cooldown: data.daily_cooldown,
    });
    client.updateUser(message.author.id, { boxes: data.boxes });
  } else {
    let daily = '';
    let temp = 86400000 - Date.now() + data.daily_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) daily += `${days} days, `;
    if (hours > 0) daily += `${hours} hours, `;
    if (minutes > 0) daily += `${minutes} minutes, `;
    daily += `${seconds} seconds`;
    message.reply(
      `:no_entry:  You must wait **${daily}** before you can receive your rare box ! ${emoji[1].rare}`
    );
  }
};
