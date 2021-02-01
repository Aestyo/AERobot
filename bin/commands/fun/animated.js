
module.exports.run = async (client, message, args) => {
    let guild = await client.guilds.cache.get(message.guild.id);
    let member = await guild.members.cache.get(message.author.id);
    let Nick1 = args[0];
    let Nick2 = args[1];
    if(message.author.id == "294127334280265728"){
        Nick1 = "<<<< Ce gros Simp >>>>";
        Nick2 = ">>>> Simp Master <<<<"
    }else if(message.author.id == "293802580918665216"){
        Nick1 = "NIGGA";
        Nick2 = "LAMP"
    }else if(message.author.id == "211784869439602688"){
        Nick1 = "SUPER";
        Nick2 = "OTT"
    }
    while(1){
      try{
          await member.setNickname(Nick1)
      } catch(error){
          message.channel.send("Manque de permission");
          return;
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));
      member.setNickname(Nick2);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
};
