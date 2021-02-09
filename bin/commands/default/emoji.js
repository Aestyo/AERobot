module.exports.run = async (client, message, args) => {
    cmd = args[0].toLowerCase();
    switch(cmd){
        case "get":{
            let emojiList = Array.from(message.guild.emojis.cache.entries());
            const emoji = {emote: String,name: String,id: Number,};
            let animated = [], static = [], str = "";
            message.channel.send("**__Liste des émojis :__**");
            for(let i = 0; i < emojiList.length; i++){
                str = ""
                if(emojiList[i][1].animated == false){
                    static[i] = Object.create(emoji);
                    static[i].emote = `<:${emojiList[i][1].name}:${emojiList[i][1].id}>`
                    static[i].name = emojiList[i][1].name;
                    static[i].id = emojiList[i][1].id;
                    str = str + `${i} - ${static[i].emote} : ${static[i].name} ( ${static[i].id} )\n`;
                }else{
                    animated[i] = Object.create(emoji);
                    animated[i].emote = `<a:${emojiList[i][1].name}:${emojiList[i][1].id}>`;
                    animated[i].name = emojiList[i][1].name;
                    animated[i].id = emojiList[i][1].id;
                    str = str + `${i} - ${animated[i].emote} : ${animated[i].name} ( ${animated[i].id} )\n`;
                }
                message.channel.send(str);
            }
            
            break;
        }
    }
};
  