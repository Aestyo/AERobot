module.exports.run = async (client, message) => {
    const waiting = {
        action: String,
        subject: String,
        hour: Number,
        minute: Number,
    }

    let param = Object.create(waiting);
    param.action = "amongusCall";
    param.subject = message.channel.id;
    param.hour = client.time.hours;
    param.minute = Number(client.time.minutes) + 1;
    client.createWaiting(param);
};
  