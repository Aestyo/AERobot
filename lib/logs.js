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
    console.log(messageToLog);

    config = require('../etc/configuration');
    let channel;
    let retry = 0;
    do {
      channel = await client.channels
        .fetch(config.logChannel)
        .catch((error) => {
          console.log(error);
        });
      channel = await client.channels.cache.get(config.logChannel);
      await new Promise((resolve) => setTimeout(resolve, 100));
      retry++;
    } while (!channel && retry < 100);
    if (retry > 99) {
      client.log("Un message n'a pas pu être loggé sur Discord !", 'logs', 3);
    }
    //channel.send(messageToLog);
  };
};
