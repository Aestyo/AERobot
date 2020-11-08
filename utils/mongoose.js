const mongoose = require("mongoose");
const { dbconnection } = require("../config/core");

module.exports = {
  init: () => {
    const mongoOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: false, // Don't build indexes
      poolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    };
    mongoose.connect(dbconnection, mongoOptions);
    mongoose.connection.on("connected", () => console.log("INFO: Connexion à la base de donnée établie."));
    mongoose.connection.on("disconnected", () => console.log("INFO: Connexion à la base de donnée perdue."));
  },
};
