module.exports.run = async (client, message) => {
  const baseUser = {
    id: Number,
    usertag: String,
    money: Number,
    health: Number,
    level: Number,
    experience: Number,
    canBeAttacked: Boolean,
    canAttack: Boolean,
    attackCooldown: Number,
    lastAttack: Number,
    isRespawning: Boolean,
    isLootingTrading: Boolean,
    weapons: Array,
    boxes: Array,
    hourly_cooldown: Number,
    daily_cooldown: Number,
    weekly_cooldown: Number,
    monthly_cooldown: Number,
    yearly_cooldown: Number,
    respawning_in: Number,
    statistics: Object,
  };

  let param = Object.create(baseUser);
  param.id = message.author.id;
  param.usertag = message.author.tag;
  param.money = 0;
  param.health = 100;
  param.level = 1;
  param.experience = 0;
  param.canBeAttacked = false;
  param.canAttack = false;
  param.attackCooldown = 0;
  param.lastAttack = 0;
  isRespawning = false;
  isLootingTrading = false;
  param.weapons = [];
  param.boxes = [0, 0, 0, 0, 0, 3];
  param.hourly_cooldown = Date.now();
  param.daily_cooldown = Date.now();
  param.weekly_cooldown = Date.now();
  param.monthly_cooldown = Date.now();
  param.yearly_cooldown = Date.now();
  param.respawning_in = 0;
  param.statistics = {
    kills: 0,
    deaths: 0,
    timeLucky: 0,
    timeUnlucky: 0,
    timeAttacked: 0,
    timeAttacking: 0,
    opened_boxes: 0,
    damage_done: 0,
    damage_taken: 0,
    item_sold: 0,
    xp_earned: 0,
  };

  client.createUser(param);
  message.channel.send('Utilisateur crée avec succès.');
};
