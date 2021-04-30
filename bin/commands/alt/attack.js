module.exports.run = (client, message) => {
  const fs = require('fs');
  fs.readdir('./lib/gdo/', (err, files) => {
    if (err) console.log(err);
    else {
      console.log('\nCurrent directory filenames:');
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
};
