module.exports = async (client, message, args) => {
  const Discord = require('discord.js');
  const fs = require('fs');
  let json = fs.readFileSync('./lib/gdo/common.json');
  let common = JSON.parse(json);
  json = fs.readFileSync('./lib/gdo/rare.json');
  let rare = JSON.parse(json);
  json = fs.readFileSync('./lib/gdo/epic.json');
  let epic = JSON.parse(json);
  json = fs.readFileSync('./lib/gdo/legendary.json');
  let legendary = JSON.parse(json);
  json = fs.readFileSync('./lib/gdo/mythic.json');
  let mythic = JSON.parse(json);

  const data = await client.getUser(message);

  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Inventaire de ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setColor('#0099ff')
    //.setImage('X')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  let box = -1;
  if (args[1] == 'common') {
    box = 5;
    Embed.setThumbnail('https://imgur.com/iYzkeck.png');
  }
  if (args[1] == 'rare') {
    box = 4;
    Embed.setThumbnail('https://imgur.com/S9gRLQw.png');
  }
  if (args[1] == 'epic') {
    box = 3;
    Embed.setThumbnail('https://imgur.com/e8rFFYd.png');
  }
  if (args[1] == 'legendary') {
    box = 2;
    Embed.setThumbnail('https://imgur.com/BUd3VIu.png');
  }
  if (args[1] == 'mythic') {
    box = 1;
    Embed.setThumbnail('https://imgur.com/BCACA2Y.png');
  }
  if (args[1] == 'void') {
    box = 0;
    Embed.setThumbnail('https://imgur.com/JXmdyAX.png');
  }

  let choice = -1;
  for (let i = 0; i < data.boxes.length; i++) {
    if (data.boxes[i] == box) {
      choice = i;
    }
  }
  if (!choice) {
    message.channel.send(
      'Vous ne possédez pas cette caisse dans votre inventaire'
    );
    return;
  }

  let rng = Math.floor(Math.random() * 100);
  let item;
  if (box == 5) {
    if (rng < 1) {
      item = mythic[Math.floor(Math.random() * mythic.length)];
    } else if (rng < 10) {
      item = legendary[Math.floor(Math.random() * legendary.length)];
    } else if (rng < 25) {
      item = epic[Math.floor(Math.random() * epic.length)];
    } else if (rng < 50) {
      item = rare[Math.floor(Math.random() * rare.length)];
    } else if (rng < 100) {
      item = common[Math.floor(Math.random() * common.length)];
    }
  }
  Embed.setImage(item.url);
  message.channel.send(Embed);
};
