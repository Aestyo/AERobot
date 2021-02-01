
module.exports.run = async (client, message, args) => {
  const got = require('got');
  client.log("Envoie d'une requête à meme-api.com...", "fun");
  try {
    let ping = Date.now();
    const response = await got('https://meme-api.herokuapp.com/gimme');
    let latence = (Date.now() - ping);
    let body = response.body.split('"');
    client.log(`Réponse reçue en ${latence} ms. Réponse reçue : ${body[15]}`, "fun");
    message.channel.send(`Titre : **${body[11]}** de /r/Memes. \n${body[15]}`);
    
	} catch (error) {
		client.log(error.response.body, "fun", 2);
	}
};
