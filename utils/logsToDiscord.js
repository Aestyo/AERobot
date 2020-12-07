logs = async (client, log) => {
    const config = ("../config/core");
    let channel = await client.channels.fetch(config.channel);
    channel = await client.channels.cache.get(config.channel);
    channel.send(log);
}

exports.logs = logs;