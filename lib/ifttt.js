module.exports = async(client) => {
    client.ifttt = async (client,data,param) => {
        console.log(data);
        switch(data.this){
            case 'REACTIONADD':{
                if(!(data.where == param.message.id && data.what == param._emoji.name)) return;
            }
        }
        switch(data.then){
            case 'GIVEROLE':{
            }
        }
    }
};
