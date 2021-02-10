module.exports.run = async (client, message, args) => {
  const mongoose = require("mongoose");
  console.log(mongoose.connection);
}
