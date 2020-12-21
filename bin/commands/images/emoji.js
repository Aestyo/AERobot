module.exports.run = async (client, message, args) => {
    cmd = args[0].toLowerCase();
    switch(cmd){
        case "get":{
            let emojiList = Array.from(message.guild.emojis.cache.entries());
            const emoji = {emote: String,name: String,id: Number,};
            let animated = [], static = [], str = "**__Liste des émojis :__**\n";
            for(let i = 0; i < emojiList.length; i++){
                if(emojiList[i][1].animated == false){
                    static[i] = Object.create(emoji);
                    static[i].emote = `<:${emojiList[i][1].name}:${emojiList[i][1].id}>`
                    static[i].name = emojiList[i][1].name;
                    static[i].id = emojiList[i][1].id;
                    str = str + `${static[i].emote} : ${static[i].name} ( ${static[i].id} )\n`;
                }else{
                    animated[i] = Object.create(emoji);
                    animated[i].emote = `<a:${emojiList[i][1].name}:${emojiList[i][1].id}>`;
                    animated[i].name = emojiList[i][1].name;
                    animated[i].id = emojiList[i][1].id;
                    str = str + `${animated[i].emote} : ${animated[i].name} ( ${animated[i].id} )\n`;
                }
            }
            message.channel.send(str);
            break;
        }
        case "boobs":{
            message.channel.send("<a:Boobs1:786597126858997800><a:Boobs2:786597127052460062>");
            break;
        }
        case "slap":{
            message.channel.send("<a:Slap:786597103374696469>");
            break;
        }
        case "money":{
            message.channel.send("<a:Money:786597082676068383>");
            break;
        }
        case "cum":{
            message.channel.send("<a:Cum:786597117292445726>");
            break;
        }
        case "putin":{
            message.channel.send("<:ultrawideputin1:767797612148686868><:ultrawideputin2:767797621011644496><:ultrawideputin3:767797628497821696><:ultrawideputin4:767797695917195274><:ultrawideputin5testduplusgrosemo:767797733967790110>");
            break;
        }
    }
};
  