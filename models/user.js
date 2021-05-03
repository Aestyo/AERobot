const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectID,
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
});

module.exports = mongoose.model('User', userSchema);
