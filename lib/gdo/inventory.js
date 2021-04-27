const Discord = require('discord.js');

module.exports = async (client, message) => {
  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Inventaire de ${message.author.tag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setImage('https://imgur.com/L8r74mx.png')
    .setThumbnail('https://i.imgur.com/83TjpQt.png')
    .setColor('#0099ff')
    //.setImage('X')
    .setTimestamp()
    .setFooter('Powered by Æstyo Corp.', 'https://imgur.com/jX0U1XY.png');

  const data = await client.getUser(message);
  let néant = '',
    mythique = '',
    légendaire = '',
    épique = '',
    rare = '',
    commun = '';

  for (let i = 0; i < data.weapons.length; i++) {
    if (data.weapons[i][1] == 0) {
      néant += `- ${data.weapons[i][0]} ( ${data.weapons[i][2]}% )\n`;
    }
    if (data.weapons[i][1] == 1) {
      mythique += `- ${data.weapons[i][0]} ( ${data.weapons[i][2]}% )\n`;
    }
    if (data.weapons[i][1] == 2) {
      légendaire += `- ${data.weapons[i][0]} ( ${data.weapons[i][2]}% )\n`;
    }
    if (data.weapons[i][1] == 3) {
      épique += `- ${data.weapons[i][0]} ( ${data.weapons[i][2]}% )\n`;
    }
    if (data.weapons[i][1] == 4) {
      rare += `- ${data.weapons[i][0]} ( ${data.weapons[i][2]}% )\n`;
    }
    if (data.weapons[i][1] == 5) {
      commun += `- ${data.weapons[i][0]} ( ${data.weapons[i][2]}% )\n`;
    }
  }

  Embed.addFields({
    name: `__<:Money:836593967993847828> Money :__ `,
    value: `**${data.money}** €`,
    inline: true,
  });

  Embed.addFields({
    name: `__<:Experience:836593968136978432> Expérience :__`,
    value: `Niveau : **${data.level}** ( ${data.experience}/${
      data.level * 100
    } )`,
    inline: true,
  });

  if (mythique) {
    Embed.addFields({
      name: `<:M:836335265240055816><:Y:836335265529593868><:T:836335265131790357><:H:836335265190510593><:I:836335265031127051><:Q:836335265173078047><:U:836335265031127050><:E:836335265084735488> **:** `,
      value: `${mythique}`,
    });
  }
  if (légendaire) {
    Embed.addFields({
      name: `<:L:836324257490403368><:_:836331119506358302><:G:836324257645592587><:E:836324257440727122><:N:836324257411497984><:D:836324257612955660><:A:836324257993588756><:I:836324257377812491><:R:836324257206108181><:E:836324257440727122> **:**`,
      value: `${légendaire}`,
    });
  }
  if (épique) {
    Embed.addFields({
      name: `<:Epic_:836324258207760386><:Epic_P:836324258236858438><:Epic_I:836324258162016277><:Epic_Q:836324257817952269><:Epic_U:836324257997783071><:Epic_E:836324258589573210> **:**`,
      value: `${épique}`,
    });
  }
  if (rare) {
    Embed.addFields({
      name: `<:Rare_R:836324257175830548><:Rare_A:836324257247789086><:Rare_r:836327729203773471><:Rare_E:836324257206108180> **:**`,
      value: `${rare}`,
    });
  }
  if (commun) {
    Embed.addFields({
      name: `<:Common_C:836324258652094526><:Common_O:836324258698362920><:Common_M:836324258874392605><:Common_M:836324258874392605><:Common_U:836324258236858441><:Common_N:836324258358624289> **:**`,
      value: `${commun}`,
    });
  }

  message.channel.send(Embed);
};
