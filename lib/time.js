module.exports = async(client) => {
    client.time = {
        hours: Number,
        minutes: Number,
        seconds: Number,
    }
    let date;
    while(true){
        date = new Date();
        client.time.hours = date.getHours();
        client.time.hours = client.time.hours.toString().padStart(2, '0');
        client.time.minutes = date.getMinutes();
        client.time.minutes = client.time.minutes.toString().padStart(2, '0');
        client.time.seconds = date.getSeconds(); 
        client.time.seconds = client.time.seconds.toString().padStart(2, '0');
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
};
