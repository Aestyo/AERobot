const { Create, Use, Inventory } = require('../../../lib/gdo/index');

module.exports.run = async (client, message, args) => {
  switch (args[0]) {
    case 'create': {
      Create(client, message);
      break;
    }
    case 'use': {
      Use(client, message);
      break;
    }
    case 'inventory': {
      Inventory(client, message);
      break;
    }
  }
};
