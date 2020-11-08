

module.exports.run = async (client, message, args) => {
    const ids = require("../../../config/ids.js");
    const config = require("../../../config/core.js");
    const user = client.users.cache.get(ids.loveID);
    user.send(args.join(" "));
  };
  
  module.exports.help = {
    name: "love"
  };
  