module.exports.run = async (client, message) => {
  const debut = Date.now();
  await message.channel.send("Calcul de la latence en cours...");
  const latence = (Date.now() - debut) / 10 + 30;
  message.channel.send(`Latence serveur : ${latence} ms.`);
};