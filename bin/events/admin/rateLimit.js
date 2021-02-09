
module.exports = async (client, rateLimitInfo,) => {
    let bucket = rateLimitInfo.path.split("/");
    let channel, method, timeout;
    if(bucket[1] == "channels"){
        channel = await client.channels.fetch(bucket[2]);
        client.log(`RATELIMIT : Méthode : ${rateLimitInfo.method.toUpperCase()}. Le channel ${channel.name} sur le serveur ${channel.guild.name} est limité pendant ${rateLimitInfo.timeout/1000} secondes.`, `admin`, 1);
    }else if(bucket[1] == "guilds"){ 
        guild = await client.guilds.fetch(bucket[2]);
        client.log(`RATELIMIT : Méthode : ${rateLimitInfo.method.toUpperCase()}. Le serveur ${guild.name} est limité pendant ${rateLimitInfo.timeout/1000} secondes.`, `admin`, 1);
    }
}