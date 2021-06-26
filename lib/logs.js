var fs = require('fs');
var inQueue = '';

module.exports = async (client) => {
  client.log = async (message, mount, threat) => {
    if (!mount) mount = 'Unknown';
    switch (threat) {
      case -1: {
        threat = 'TRACE';
        break;
      }
      case 0: {
        threat = 'INFO';
        break;
      }
      case 1: {
        threat = 'WARN';
        break;
      }
      case 2: {
        threat = 'ERROR';
        break;
      }
      case 3: {
        threat = 'CRITICAL';
        break;
      }
      default: {
        threat = 'INFO';
      }
    }
    let messageToLog = `[${client.time.hours}:${client.time.minutes}:${client.time.seconds}] [${mount}/${threat}] ${message}`;
    inQueue += `${messageToLog}\n`;
    console.log(messageToLog);

    // Logging des messages dans le fichier texte

    await new Promise((resolve) => setTimeout(resolve, 1000));

    date = new Date();
    if (inQueue != '' && inQueue != '\n') {
      fs.readFile(
        `./temp/${date.getDate().toString().padStart(2, '0')}-${(
          date.getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${date.getFullYear().toString()}.txt`,
        'utf-8',
        function (err, data) {
          if (err) {
            fs.writeFile(
              `./temp/${date.getDate().toString().padStart(2, '0')}-${(
                date.getMonth() + 1
              )
                .toString()
                .padStart(2, '0')}-${date.getFullYear().toString()}.txt`,
              `Logs of ${date.getDate().toString().padStart(2, '0')}-${(
                date.getMonth() + 1
              )
                .toString()
                .padStart(2, '0')}-${date
                .getFullYear()
                .toString()}\n${inQueue}`,
              function (err) {
                inQueue = '';
                if (err) throw err;
              }
            );
          } //  throw err;
          fs.writeFile(
            `./temp/${date.getDate().toString().padStart(2, '0')}-${(
              date.getMonth() + 1
            )
              .toString()
              .padStart(2, '0')}-${date.getFullYear().toString()}.txt`,
            `${data}${inQueue}`,
            'utf-8',
            function (err, data) {
              inQueue = '';
              if (err) throw err;
            }
          );
        }
      );
    }
  };
};
