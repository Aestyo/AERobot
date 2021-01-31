// Évènement : Démarrage du bot terminé
module.exports = async (client) => {
  client.log(`Bot connecté en tant que ${client.user.tag}`, "ready");
  var setpresence = "Tetris";
  client.user
    .setActivity(`${setpresence}`, { type: "PLAYING" })
    .then((presence) => client.log(`Présence définie en tant que ${setpresence}`, "ready"))
    .catch(console.error);

  
  let convo = await client.guilds.cache.get("483999398536282122");
  let pheno = await convo.members.cache.get("294127334280265728");
  let sylvain = await convo.members.cache.get("293802580918665216");
  let nathan = await convo.members.cache.get("211784869439602688");
  while(1){
    pheno.setNickname(">>>> Simp Master <<<<", "Avouez que c'est un gros Simp");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    sylvain.setNickname("Nigga");
    sylvain.roles.add('805175568454516737');
    sylvain.roles.remove('805175528784265236');

    await new Promise((resolve) => setTimeout(resolve, 1200));

    nathan.setNickname("SUPER");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    pheno.setNickname("<<<< Ce gros Simp >>>>", "Avouez que c'est un gros Simp");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    sylvain.setNickname("Lamp");
    sylvain.roles.add('805175528784265236');
    sylvain.roles.remove('805175568454516737');


    await new Promise((resolve) => setTimeout(resolve, 1200));

    nathan.setNickname("OTT");

    await new Promise((resolve) => setTimeout(resolve, 1200));
  }
}
