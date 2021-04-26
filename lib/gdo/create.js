module.exports = (client, message) => {
  const baseUser = {
    id: String,
    usertag: String,
    weapons: Array,
  };

  let param = Object.create(baseUser);
  param.id = message.author.id;
  param.usertag = message.author.tag;
  param.weapons = [
    ['Pierre', '1', '100'],
    ['Magnum', '0', '100'],
  ];

  client.createUser(param);
};
