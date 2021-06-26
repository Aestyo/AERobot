const fs = require('fs');
const path = require('path');
const directory = './temp/';

module.exports.run = async (client, message, args) => {
  switch (args[0]) {
    case 'size': {
      let number = 0,
        size = 0,
        stats;
      fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          stats = fs.statSync(path.join(directory, file));
          size += Number(stats.size);
          number++;
        }
        size = size / (1024 * 1024);
        size = size.toFixed(2);
        message.channel.send(
          `:wastebasket: Le cache contient **${number}** éléments pour **${size}** Mo.`
        );
      });

      break;
    }
    case 'clear': {
      let number = 0,
        size = 0,
        stats;
      fs.readdir(directory, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          stats = fs.statSync(path.join(directory, file));
          size += Number(stats.size);
          number++;
          /*fs.unlink(path.join(directory, file), (err) => {
            if (err) throw err;
          });*/
        }
        size = size / (1024 * 1024);
        size = size.toFixed(2);
        message.channel.send(
          `:wastebasket: Suppression du cache : **${number}** éléments pour **${size}** Mo.`
        );
      });

      break;
    }
  }
};
