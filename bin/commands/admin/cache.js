
const fs = require('fs');
const path = require('path');
const directory = './temp/';

module.exports.run = async (client, message, args) => {
    switch(args[0]){
        case "clear":{
            fs.readdir(directory, (err, files) => {
                if (err) throw err;
                for (const file of files) {
                    client.log(`Suppression du cache : ${file}`, 'admin')
                    fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                  });
                }
            });
            break;
        }
    }
};
  