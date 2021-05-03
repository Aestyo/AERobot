const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message.author.id);
  if (data == -1) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  if (Date.now() - data.monthly_cooldown > 2629800000) {
    message.reply(
      `:white_check_mark:  You received a **legendary box** ! ${emoji[1].legendary}`
    );
    data.monthly_cooldown = Date.now();
    data.boxes[2]++;
    client.updateUser(message.author.id, {
      monthly_cooldown: data.monthly_cooldown,
    });
    client.updateUser(message.author.id, { boxes: data.boxes });
  } else {
    let monthly = '';
    let temp = 2629800000 - Date.now() + data.monthly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) monthly += `${days} days, `;
    if (hours > 0) monthly += `${hours} hours, `;
    if (minutes > 0) monthly += `${minutes} minutes, `;
    monthly += `${seconds} seconds`;
    message.reply(
      `:no_entry:  You must wait **${monthly}** before you can receive your legendary box ! ${emoji[1].legendary}`
    );
  }
};
