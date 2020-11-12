module.exports.run = async (client, message) => {
  /*while(true){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    message.channel.send(`Il est ${client.time.hours}:${client.time.minutes}:${client.time.seconds}`, {tts: true}); 
  }*/
  console.log(message.guild.member(message.author).nickname);
  message.channel.send(message.guild.member(message.author).nickname)
};
  