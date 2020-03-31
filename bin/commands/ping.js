module.exports.run = async (bot, message) => {
  const debut = Date.now();
  await message.channel.send("Calcul de la latence en cours...");
  const latence = (Date.now() - debut) / 10 + 60;
  message.channel.send(`Latence serveur : ${latence} ms.`);
  if (latence >= 100)
    message.channel.send("La latence est plutôt élevée ! Vivement la fibre...");
};

module.exports.help = {
  name: "ping"
};
