const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message.author.id);
  if (data == -1) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  if (Date.now() - data.weekly_cooldown > 604800000) {
    message.reply(
      `:white_check_mark:  You received a **epic box** ! ${emoji[1].epic}`
    );
    data.weekly_cooldown = Date.now();
    data.boxes[3]++;
    client.updateUser(message.author.id, {
      weekly_cooldown: data.weekly_cooldown,
    });
    client.updateUser(message.author.id, { boxes: data.boxes });
  } else {
    let weekly = '';
    let temp = 604800000 - Date.now() + data.weekly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) weekly += `${days} days, `;
    if (hours > 0) weekly += `${hours} hours, `;
    if (minutes > 0) weekly += `${minutes} minutes, `;
    weekly += `${seconds} seconds`;
    message.reply(
      `:no_entry:  You must wait **${weekly}** before you can receive your epic box ! ${emoji[1].epic}`
    );
  }
};
