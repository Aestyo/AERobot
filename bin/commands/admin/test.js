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
       console.log(os.cpus()[0].model);
    }catch(error){
        console.log("Erreur! os.cpus()[0].model");
    }
    try {
        console.log(os.arch());
    }catch(error){
        console.log("Erreur! os.arch()");
    }
    try {
        console.log(os.cpus()[0].speed/1000);
    }catch(error){
        console.log("Erreur! os.cpus()[0].speed/1000");
    }
    try {
        console.log(os.cpus().length);
    }catch(error){
        console.log("Erreur! os.cpus().length");
    }
    try {
        console.log(os.hostname());
    }catch(error){
        console.log("Erreur! os.hostname()");
    }
    try {
        console.log(os.type());
    }catch(error){
        console.log("Erreur! os.type()");
    }
    try {
        console.log(os.release());
    }catch(error){
        console.log("Erreur! os.release()");
    }
    try {
        console.log(os.platform());
    }catch(error){
        console.log("Erreur! os.platform()");
    }
    try {
        console.log(str);
    }catch(error){
        console.log("Erreur! str");
    }
    try {
        console.log(os.totalmem()/1000000000);
    }catch(error){
        console.log("Erreur! (os.totalmem()/1000000000).toFixed(2)");
    }
    try {
        console.log(os.freemem()/1000000000);
    }catch(error){
        console.log("Erreur! (os.freemem()/1000000000).toFixed(2)");
    }
    try {
        console.log(Math.round(used * 100) / 100);
    }catch(error){
        console.log("Erreur! {Math.round(used * 100) / 100");
    }
    try {
        console.log(os.cpus()[0].model);
    }catch(error){
        console.log("Erreur! os.cpus()[0].model");
    }
};