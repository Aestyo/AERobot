module.exports.run = async (client, message, args) => {
    const os = require('os');
    const process = require('process');
    const uptime = os.uptime();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    const model = os.cpus()[0].model.toLowerCase();
    let days = Math.floor(uptime / 86400);
    let hours = Math.floor(uptime / 3600) % 24;
    let minutes = Math.floor(uptime / 60) % 60;
    let seconds = Math.floor(uptime / 1) % 60;
    let str = "";
    if(days != 0){str = str + `${days} jours, `}
    if(hours != 0){str = str + `${hours} heures, `}
    if(minutes != 0){str = str + `${minutes} minutes, `}
    if(seconds != 0){str = str + `${seconds} secondes `}
    try {
        channel.message.send(os.cpus()[0].model);
    }catch(error){
        message.channel.send("Erreur! os.cpus()[0].model");
    }
    try {
        channel.message.send(os.arch());
    }catch(error){
        message.channel.send("Erreur! os.arch()");
    }
    try {
        channel.message.send(os.cpus()[0].speed/1000);
    }catch(error){
        message.channel.send("Erreur! os.cpus()[0].speed/1000");
    }
    try {
        channel.message.send(os.cpus().length);
    }catch(error){
        message.channel.send("Erreur! os.cpus().length");
    }
    try {
        channel.message.send(os.hostname());
    }catch(error){
        message.channel.send("Erreur! os.hostname()");
    }
    try {
        channel.message.send(os.type());
    }catch(error){
        message.channel.send("Erreur! os.type()");
    }
    try {
        channel.message.send(os.release());
    }catch(error){
        message.channel.send("Erreur! os.release()");
    }
    try {
        channel.message.send(os.platform());
    }catch(error){
        message.channel.send("Erreur! os.platform()");
    }
    try {
        channel.message.send(str);
    }catch(error){
        message.channel.send("Erreur! str");
    }
    try {
        channel.message.send(os.totalmem()/1000000000);
    }catch(error){
        message.channel.send("Erreur! (os.totalmem()/1000000000).toFixed(2)");
    }
    try {
        channel.message.send(os.freemem()/1000000000);
    }catch(error){
        message.channel.send("Erreur! (os.freemem()/1000000000).toFixed(2)");
    }
    try {
        channel.message.send(Math.round(used * 100) / 100);
    }catch(error){
        message.channel.send("Erreur! {Math.round(used * 100) / 100");
    }
    try {
        channel.message.send(os.cpus()[0].model);
    }catch(error){
        message.channel.send("Erreur! os.cpus()[0].model");
    }
};