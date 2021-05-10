const Discord = require('discord.js');
const fs = require('fs');
let json = fs.readFileSync('./lib/gdo/emoji.json');
let emoji = JSON.parse(json);

module.exports.run = async (client, message, args) => {
  let data = -1;
  if (args[0]) {
    data = await client.getUser(args[0].slice(2, -1));
  } else {
    data = await client.getUser(message.author.id);
  }
  if (!data) {
    message.channel.send('You have not created a character yet.');
    return;
  }

  var Embed = new Discord.MessageEmbed()
    .setTitle(`**ÆRobot** - __Inventory of ${data.usertag}__`)
    .setURL('https://github.com/Aestyo/AERobot')
    .setAuthor(
      message.author.username,
      message.author.avatarURL(),
      `https://discordapp.com/users/${message.author.id}`
    )
    .setImage('https://imgur.com/MAUfuvE.png')
    //.setThumbnail('https://i.imgur.com/83TjpQt.png')
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
    mythique += `- <:Box_Mythic:838053875407781928> Mythic Box ( x${data.boxes[1]} )\n`;
  }
  if (data.boxes[2] > 0) {
    légendaire += `- <:Box_Legendary:838053875595608134> Legendary Box ( x${data.boxes[2]} )\n`;
  }
  if (data.boxes[3] > 0) {
    épique += `- <:Box_Epic:838053871980380200> Epic Box ( x${data.boxes[3]} )\n`;
  }
  if (data.boxes[4] > 0) {
    rare += `- <:Box_Rare:838053874731843605> Rare Box ( x${data.boxes[4]} )\n`;
  }
  if (data.boxes[5] > 0) {
    commun += `- <:Box_Common:838053861021319228> Common Box ( x${data.boxes[5]} )\n`;
  }

  // Création des barres
  let healthbar = '', temp_health = Math.round((data.health/3.125)*10);
    for(let i = 0; i < 8; i++){
      if(temp_health > 40){
        if(i == 0){
          healthbar += '<:Health_Left_FULL:841360036592222238>'
        }else if(i == 7){
          healthbar += '<:Health_Right_100:841360036302946415>'
        }else{
          healthbar += '<:Health_Middle_FULL:841360036525899796>'
        }
        temp_health -= 40;
      }else if (temp_health >= 40){
        if(i == 0){
          healthbar += '<:Health_Left_100:841360036600610839>'
        }else if(i == 7){
          healthbar += '<:Health_Right_100:841360036302946415>'
        }else{
          healthbar += '<:Health_Middle_100:841360036068065342>'
        }
        temp_health -= 40;
      }else if (temp_health >= 30){
        if(i == 0){
          healthbar += '<:Health_Left_75:841360036676894721>'
        }else if(i == 7){
          healthbar += '<:Health_Right_75:841360036520787988>'
        }else{
          healthbar += '<:Health_Middle_75:841360036114333747>'          
        }
        temp_health -= 30;
      }else if (temp_health >= 20){
        if(i == 0){
          healthbar += '<:Health_Left_50:841360036495228979>'
        }else if(i == 7){
          healthbar += '<:Health_Right_50:841360036600610836>'
        }else{
          healthbar += '<:Health_Middle_50:841360036495228978>'         
        }
        temp_health -= 20;
      }else if (temp_health >= 10){
        if(i == 0){
          healthbar += '<:Health_Left_25:841360036626169887>'
        }else if(i == 7){
          healthbar += '<:Health_Right_25:841360036566794350>'
        }else{
          healthbar += '<:Health_Middle_25:841360036507811870>'     
        }
        temp_health -= 10;
      }else if (temp_health < 10){
        if(i == 0){
          healthbar += '<:Health_Left_0:841360036546478081>'
        }else if(i == 7){
          healthbar += '<:Health_Middle_0:841360036600348723>'
        }else{
          healthbar += '<:Health_Right_0:841360036118134806>'
        }
      }
  } 
  let expbar = '', temp_exp = Math.round((data.experience/3.125)*10);
    for(let i = 0; i < 8; i++){
      if(temp_exp > 40){
        if(i == 0){
          expbar += '<:Exp_Left_FULL:841400758829973534>'
        }else if(i == 7){
          expbar += '<:Exp_Right_100:841400758704406568>'
        }else{
          expbar += '<:Exp_Middle_FULL:841400758766272587>'
        }
        temp_exp -= 40;
      }else if (temp_exp >= 40){
        if(i == 0){
          expbar += '<:Exp_Left_100:841400758778986556>'
        }else if(i == 7){
          expbar += '<:Exp_Right_100:841400758704406568>'
        }else{
          expbar += '<:Exp_Middle_100:841400758721052783>'
        }
        temp_exp -= 40;
      }else if (temp_exp >= 30){
        if(i == 0){
          expbar += '<:Exp_Left_75:841400758800089128>'
        }else if(i == 7){
          expbar += '<:Exp_Right_75:841400758708863026>'
        }else{
          expbar += '<:Exp_Middle_75:841400758708863027>'          
        }
        temp_exp -= 30;
      }else if (temp_exp >= 20){
        if(i == 0){
          expbar += '<:Exp_Left_50:841400758820798484>'
        }else if(i == 7){
          expbar += '<:Exp_Right_50:841400758687760424>'
        }else{
          expbar += '<:Exp_Middle_50:841400758729310218>'         
        }
        temp_exp -= 20;
      }else if (temp_exp >= 10){
        if(i == 0){
          expbar += '<:Exp_Left_25:841400758897475604>'
        }else if(i == 7){
          expbar += '<:Exp_Right_25:841400758704144424>'
        }else{
          expbar += '<:Exp_Middle_25:841400758757752851>'     
        }
        temp_exp -= 10;
      }else if (temp_exp < 10){
        if(i == 0){
          expbar += '<:Exp_Left_0:841400758729310219>'
        }else if(i == 7){
          expbar += '<:Exp_Right_0:841400758754213989>'
        }else{
          expbar += '<:Exp_Middle_0:841400758754213991>'
        }
      }
  } 

  Embed.addFields({
    name: `__:heart: HealthPoints :__ `,
    value: `${healthbar} \n( ${data.health} / 100 )`,
    inline: true,
  });

  Embed.addFields({
    name: `__<:Experience:836593968136978432> Level ${data.level} :__`,
    value: `${expbar} \n( ${data.experience} / ${data.level * 100} )`,
    inline: true,
  });

  Embed.addFields({
    name: `__<:Money:836593967993847828> Money :__ `,
    value: `**${data.money}** €`,
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
