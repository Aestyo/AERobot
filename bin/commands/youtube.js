module.exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
  const { Player } = require("discord-player");
  const player = new Player(client, "AIzaSyD8jLPoYb7x1eWmAo0GRwXPNkXzpXbx950");
  client.player = player;
  var GuildID = message.member.guild.id;
  console.log(message.member.guild.id);

  // Corps du programme
  const command = args[0];
  switch (command) {
    case "play": {
      const connection = await message.member.voice.channel
        .join()
        .then((connection) => {
          let aSongIsAlreadyPlaying = player.isPlaying(GuildID);
          if (aSongIsAlreadyPlaying) {
            Addqueue();
          } else {
            Addplay();
          }
        });
      break;
    }
    case "volume": {
      let aSongIsAlreadyPlaying = player.isPlaying(message.member.guild.id);
      console.log(aSongIsAlreadyPlaying);
      if (aSongIsAlreadyPlaying) {
        Volume(args);
      } else {
        message.reply("Il n'y a pas de musique en cours de lecture.");
      }
    }
  }
  // Fonction de lecture directe ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function Addplay() {
    console.log(`INFO : Envoie d'une requête à youtube.com...`);
    let debut = Date.now();
    let song = await player.play(
      message.member.voice.channel,
      args.slice(1).join(" ")
    );
    player.setVolume(GuildID, 50);
    let latence = Date.now() - debut;
    console.log(
      `INFO : Réponse reçue en ${latence} ms. Réponse reçue : ${song.name}`
    );
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La chanson **${song.name}** est maintenant en cours de lecture sur **${message.guild.name}**`
      )
      .setThumbnail("https://imgur.com/q8RlMjZ.png")
      .addFields(
        { name: "Auteur :", value: song.author },
        {
          name: "Durée :",
          value: `${song.rawVideo.duration.minutes} minutes et ${song.rawVideo.duration.seconds} secondes`,
        },
        { name: "Lien :", value: song.rawVideo.url },
        {
          name: "\u200B",
          value: 'Pour de l\'aide faites "/youtube help"',
        }
      )
      .setImage(`https://img.youtube.com/vi/${song.raw.id}/maxresdefault.jpg`)
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

    message.channel.send(Embed);
  }
  // Fonction de lecture indirecte /////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function Addqueue() {
    console.log(`INFO : Envoie d'une requête à youtube.com...`);
    let debut = Date.now();
    let song = await player.addToQueue(GuildID, args.slice(1).join(" "));
    let latence = Date.now() - debut;
    console.log(
      `INFO : Réponse reçue en ${latence} ms. Réponse reçue : ${song.name}`
    );
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La chanson **${song.name}** a été ajoutée à la liste de lecture de **${message.guild.name}**`
      )
      .setThumbnail("https://imgur.com/q8RlMjZ.png")
      .addFields(
        { name: "Auteur :", value: song.author },
        {
          name: "Durée :",
          value: `${song.rawVideo.duration.minutes} minutes et ${song.rawVideo.duration.seconds} secondes`,
        },
        { name: "Lien :", value: song.rawVideo.url },
        {
          name: "\u200B",
          value: 'Pour de l\'aide faites "/youtube help"',
        }
      )
      .setImage(`https://img.youtube.com/vi/${song.raw.id}/maxresdefault.jpg`)
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

    message.channel.send(Embed);
  }
  // Fonction d'arrêt de la lecture ////////////////////////////////////////////////////////////////////////////////////////////////////////
  function Stop() {
    player.stop(GuildID);
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La musique a été arrêtée sur le serveur : **${message.guild.name}**`
      )
      .setThumbnail("https://imgur.com/c7rLCV9.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

    message.channel.send(Embed);
  }
  // Fonction de pause de la lecture ///////////////////////////////////////////////////////////////////////////////////////////////////////
  function Pause() {
    player.pause(GuildID);
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La musique a été mise en pause sur le serveur : **${message.guild.name}**`
      )
      .setThumbnail("https://imgur.com/80q1HvD.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

    message.channel.send(Embed);
  }
  // Fonction de reprise de la lecture ///////////////////////////////////////////////////////////////////////////////////////////////////////
  function Reprendre() {
    player.resume(GuildID);
    const Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `La lecture reprends sur le serveur : **${message.guild.name}**`
      )
      .setThumbnail("https://imgur.com/q8RlMjZ.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");

    message.channel.send(Embed);
  }
  // Fonction de changement de volume ///////////////////////////////////////////////////////////////////////////////////////////////////////
  function Volume(args) {
    player.setVolume(GuildID, args[1]);
    var Embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**ÆRobot** - __Lecteur YouTube__")
      .setURL("https://github.com/Aestyo/AERobot")
      .setAuthor(
        message.author.username,
        message.author.avatarURL(),
        `https://discordapp.com/users/${message.author.id}`
      )
      .setDescription(
        `Le volume de la lecture sur le serveur **${message.guild.name}** est maintenant de **${args[1]}%**.`
      )
      .setThumbnail("https://imgur.com/SgCkkZF.png")
      .setTimestamp()
      .setFooter("Powered by Æstyo Corp.", "https://imgur.com/jX0U1XY.png");
    console.log(client.player.volume);
    message.channel.send(Embed);
  }
  // Fonction de destruction d'oreille ///////////////////////////////////////////////////////////////////////////////////////////////////////
  function Earrape() {
    player.setVolume(GuildID, Math.pow(2, 256));
    message.channel.send(
      `Le volume de la lecture est maintenant de **${Math.pow(2, 256)}%**.`
    );
  }
  function Skip() {
    player.skip(GuildID);
    message.channel.send(`La lecture en cours a été passée.`);
  }
  function Repeat() {
    player.setRepeatMode(GuildID, true);
    message.channel.send(`La lecture en cours est répétée.`);
  }
  function Queue() {
    let playing = player.isPlaying(message.GuildID);
    if (!playing) {
      return message.channel.send(":x: Pas de musique en cours de lecture.");
    }
    player.getQueue(message.GuildID);
  }
};
