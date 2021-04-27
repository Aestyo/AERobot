const { Create, Inventory, Unbox } = require('../../../lib/gdo/index.js');

module.exports.run = async (client, message, args) => {
  switch (args[0]) {
    case 'create': {
      Create(client, message, args);
      break;
    }
    case 'inventory': {
      Inventory(client, message, args);
      break;
    }
    case 'unbox': {
      Unbox(client, message, args);
      break;
    }
  }
};
