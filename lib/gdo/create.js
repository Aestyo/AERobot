module.exports = (client, message) => {
  const baseUser = {
    id: Number,
    usertag: String,
    money: Number,
    health: Number,
    level: Number,
    experience: Number,
    weapons: Array,
    boxes: Array,
  };

  let param = Object.create(baseUser);
  param.id = message.author.id;
  param.usertag = message.author.tag;
  param.money = 0;
  param.health = 100;
  param.level = 1;
  param.experience = 0;
  param.weapons = [
    ['Bouteille', '5', '100'],
    ['Couteau', '4', '100'],
    ['Glock', '3', '100'],
    ['MP5', '2', '100'],
    ['Desert Eagle', '1', '100'],
  ];
  param.boxes = [0, 1, 2, 3, 4, 5];

  client.createUser(param);
  message.channel.send('Utilisateur crée avec succès.');
};
