const { Create } = require('./index.js');

module.exports.run = async (client, message, args) => {
  switch (args[0]) {
    case 'create': {
      Create(client, message);
      break;
    }
  }
};
