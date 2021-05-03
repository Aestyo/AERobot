const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message) => {
  const data = await client.getUser(message.author.id);
  if (data == -1) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  if (Date.now() - data.yearly_cooldown > 31557600000) {
    message.reply(
      `:white_check_mark:  You received a **mythic box** ! ${emoji[1].mythic}`
    );
    data.yearly_cooldown = Date.now();
    data.boxes[1]++;
    client.updateUser(message.author.id, {
      yearly_cooldown: data.yearly_cooldown,
    });
    client.updateUser(message.author.id, { boxes: data.boxes });
  } else {
    let yearly = '';
    let temp = 31557600000 - Date.now() + data.yearly_cooldown;
    let days = Math.floor(temp / 86400000);
    let hours = Math.floor(temp / 3600000) % 24;
    let minutes = Math.floor(temp / 60000) % 60;
    let seconds = Math.floor(temp / 1000) % 60;
    if (days > 0) yearly += `${days} days, `;
    if (hours > 0) yearly += `${hours} hours, `;
    if (minutes > 0) yearly += `${minutes} minutes, `;
    yearly += `${seconds} seconds`;
    message.reply(
      `:no_entry:  You must wait **${yearly}** before you can receive your mythic box ! ${emoji[1].mythic}`
    );
  }
};
