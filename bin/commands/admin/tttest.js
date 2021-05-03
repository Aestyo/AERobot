const jimp = require('jimp');

module.exports.run = async (client, message, args) => {
  //an array of all images we're using. MAKE SURE THEIR SIZES MATCH
  console.log('test');
  var images = [
    message.author.displayAvatarURL({ format: 'png' }),
    'F:/jailbars.png',
  ];
  var jimps = [];
  //turns the images into readable variables for jimp, then pushes them into a new array
  for (var i = 0; i < images.length; i++) {
    jimps.push(jimp.read(images[i]));
  }
  //creates a promise to handle the jimps
  await Promise.all(jimps)
    .then(function (data) {
      return Promise.all(jimps);
    })
    .then(async function (data) {
      // --- THIS IS WHERE YOU MODIFY THE IMAGES --- \\
      data[0].composite(data[1], 0, 0); //adds the second specified image (the jail bars) on top of the first specified image (the avatar). "0, 0" define where the second image is placed, originating from the top left corner
      //you CAN resize the second image to fit the first one like this, if necessary. The "100, 100" is the new size in pixels.
      //data[1].resize(100,100)

      //this saves our modified image
      data[0].write('F:/test.jpg');
    });

  message.channel.send({ files: ['F:/test.jpg'] });
};
