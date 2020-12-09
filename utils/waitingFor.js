const { Waiting } = require("../models/index");

module.exports = async (client) => {
  while (true) {
    let result = await Waiting.find();
    //console.log(result);
    for (let i = 0; i < result.length; i++) {
      if (
        result[i].hour == client.time.hours && result[i].minute == client.time.minutes
      ) {
        console.log("Il est l'heure !");
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

async function Action(action, subject) {
  switch (action) {
    case "amongusCall": {
      break;
    }
    default: {
      return;
    }
  }
}
