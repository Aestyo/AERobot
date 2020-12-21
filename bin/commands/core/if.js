const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    var Object = {
        this: "empty",
        where: "empty",
        what: "empty",
        who: "empty",
        then: "empty",
        in: "empty",
        do: "empty",
        to: "empty",
    };

    console.log(args);

    for(let i = 0; i < args.length; i++){
        switch(args[i]){
            case "this:":{
                Object.this = args[i+1];
                break;
            }
            case "where:":{
                Object.where = args[i+1];
                break;
            }
            case "what:":{
                Object.what = args[i+1];
                break;
            }
            case "who:":{
                Object.who = args[i+1];
                break;
            }
            case "then:":{
                Object.then = args[i+1];
                break;
            }
            case "in:":{
                Object.in = args[i+1];
                break;
            }
            case "do:":{
                Object.do = args[i+1];
                break;
            }
            case "to:":{
                Object.to = args[i+1];
                break;
            }
        }
    }

    console.log(Object);
    client.createIFTTT(Object);
};
  