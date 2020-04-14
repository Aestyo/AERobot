//const Discord = require("discord.js");

const MusicClient = require("discord-music-core");
const musicPlayer = new MusicClient("AIzaSyD8jLPoYb7x1eWmAo0GRwXPNkXzpXbx950");

const YouTube = require("discord-youtube-api");
const youtube = new YouTube("AIzaSyD8jLPoYb7x1eWmAo0GRwXPNkXzpXbx950");

module.exports.run = async (client, message, args) => {
  if (args[0] == null) {
    return message.channel.send("Il faut entrer une musique à ajouter");
  }
  if (!args[0].startsWith("https://")) {
    return message.channel.send("Ce que vous avez entrer n'est pas une URL");
  } else {
    message.delete();
    const song = await youtube.getVideo(args[0]);
    musicPlayer.play(message, args[0]);
    console.log(song);
  }

  ///////////////////////////////////////////////////////////////// Functions

  /*var Youtube = (function () {
    "use strict";
    var video, results;
    var getThumb = function (url, size) {
      size = size === null ? "big" : size;
      results = url.match("[\\?&]v=([^&#]*)");
      video = results === null ? url : results[1];
      return "http://img.youtube.com/vi/" + video + "/0.jpg";
    };
    return {
      thumb: getThumb,
    };
  })();*/

  /////////////////////////////////////////////////////////////////

  /*async function Addplay(message, searchArray) {
    console.log(`INFO : Envoie d'une requête à youtube.com...`);
    let debut = Date.now();
    if (message.member.voice.channel == null)
      return message.channel.send(
        "Vous devez être dans un channel vocal pour lancer une vidéo YouTube"
      );
    musicPlayer.play(message, searchArray);
    let latence = Date.now() - debut;
    console.log(`INFO : Réponse reçue en ${latence} ms.}`);
  }*/

  /*var thumb = Youtube.thumb(args[0], "big");
  message.channel.send(thumb);*/
};
