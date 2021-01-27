module.exports.run = async (client, message) => {
    console.log(message.guild.members.cache.size);
    let members = await message.guild.members.fetch({ force: true })
        .then(console.log("La recherche est terminée"))
        .catch(console.error)
    client.log(members);
};

  