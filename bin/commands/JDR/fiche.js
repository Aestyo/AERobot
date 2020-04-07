const Player1 = require("./players/Player1.json");
const Player2 = require("./players/Player2.json");
const Player3 = require("./players/Player3.json");
const Player4 = require("./players/Player4.json");

module.exports.run = async (client, message, args) => {
  if (message.author.id == 215806405251301376) {
    if (args[0] == "résumé") {
      message.channel.send({
        embed: {
          color: 0xf58b1f,
          title: `__**${message.author.tag} - Call of Cthulhu**__`,
          thumbnail: {
            url:
              "https://cdn.discordapp.com/attachments/690952488995520584/693848969154920544/Logo_Call_of_Cthulhu.png",
          },
          fields: [
            {
              name: "Nom : ",
              value: `**${Player1.Nom}**`,
            },
            {
              name: "Métier : ",
              value: `**${Player1.Métier}**`,
            },
            {
              name: "Occupation : ",
              value: `**${Player1.Occupation}**`,
            },
            {
              name: "Sexe : ",
              value: `**${Player1.Sexe}**`,
            },
            {
              name: "Age : ",
              value: `**${Player1.Age}**`,
            },
            {
              name: "Points de vie : ",
              value: `**${Player1.HP}** / ${Player1.HPMax}`,
            },
            {
              name: "Santé mentale : ",
              value: `**${Player1.SantéMentale}** / ${Player1.SantéMentaleMax}`,
            },
            {
              name: "Force : ",
              value: `**${Player1.Force}** / 21`,
            },

            {
              name: "Constitution : ",
              value: `**${Player1.Constitution}** / 21`,
            },
            {
              name: "Dextérité : ",
              value: `**${Player1.Dextérité}** / 21`,
            },
            {
              name: "Apparence : ",
              value: `**${Player1.Apparence}** / 21`,
            },
            {
              name: "Intelligence : ",
              value: `**${Player1.Intelligence}** / 21`,
            },
            {
              name: "Volonté : ",
              value: `**${Player1.Volonté}** / 21`,
            },
            {
              name: "Éducation : ",
              value: `**${Player1.Éducation}** / 21`,
            },
          ],
          footer: {
            text: `Généré pour ${message.author.tag}`,
          },
        },
      });
    }
    if (args[0] == "roll") {
      if (args[1] == "force") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          var roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Force * 5}`);

          if (roll > Player2.Force * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Force * 3}`);

          if (roll > Player2.Force * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Force}`);

          if (roll > Player2.Force) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "constitution") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Constitution * 5}`
          );

          if (roll > Player2.Constitution * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Constitution * 3}`
          );

          if (roll > Player2.Constitution * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Constitution}`
          );

          if (roll > Player2.Constitution) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "dextérité") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Dextérité * 5}`
          );

          if (roll > Player2.Dextérité * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Dextérité * 3}`
          );

          if (roll > Player2.Dextérité * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Dextérité}`);

          if (roll > Player2.Dextérité) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "apparence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Apparence * 5}`
          );

          if (roll > Player2.Apparence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Apparence * 3}`
          );

          if (roll > Player2.Apparence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Apparence}`);

          if (roll > Player2.Apparence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "intelligence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Intelligence * 5}`
          );

          if (roll > Player2.Intelligence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Intelligence * 3}`
          );

          if (roll > Player2.Intelligence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Intelligence}`
          );

          if (roll > Player2.Intelligence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "volonté") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Volonté * 5}`
          );

          if (roll > Player2.Volonté * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Volonté * 3}`
          );

          if (roll > Player2.Volonté * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Volonté}`);

          if (roll > Player2.Volonté) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "éducation") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Éducation * 5}`
          );

          if (roll > Player2.Éducation * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player1.Éducation * 3}`
          );

          if (roll > Player2.Éducation * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player1.Éducation}`);

          if (roll > Player2.Éducation) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
    }
  }
  if (message.author.id == 228125401522765825) {
    if (args[0] == "résumé") {
      message.channel.send({
        embed: {
          color: 0xf58b1f,
          title: `__**${message.author.tag} - Call of Cthulhu**__`,
          thumbnail: {
            url:
              "https://cdn.discordapp.com/attachments/690952488995520584/693848969154920544/Logo_Call_of_Cthulhu.png",
          },
          fields: [
            {
              name: "Nom : ",
              value: `**${Player2.Nom}**`,
            },
            {
              name: "Métier : ",
              value: `**${Player2.Métier}**`,
            },
            {
              name: "Occupation : ",
              value: `**${Player2.Occupation}**`,
            },
            {
              name: "Sexe : ",
              value: `**${Player2.Sexe}**`,
            },
            {
              name: "Age : ",
              value: `**${Player2.Age}**`,
            },
            {
              name: "Points de vie : ",
              value: `**${Player2.HP}** / ${Player2.HPMax}`,
            },
            {
              name: "Santé mentale : ",
              value: `**${Player2.SantéMentale}** / ${Player2.SantéMentaleMax}`,
            },
            {
              name: "Force : ",
              value: `**${Player2.Force}** / 21`,
            },
            {
              name: "Constitution : ",
              value: `**${Player2.Constitution}** / 21`,
            },
            {
              name: "Dextérité : ",
              value: `**${Player2.Dextérité}** / 21`,
            },
            {
              name: "Apparence : ",
              value: `**${Player2.Apparence}** / 21`,
            },
            {
              name: "Intelligence : ",
              value: `**${Player2.Intelligence}** / 21`,
            },
            {
              name: "Volonté : ",
              value: `**${Player2.Volonté}** / 21`,
            },
            {
              name: "Éducation : ",
              value: `**${Player2.Éducation}** / 21`,
            },
          ],
          footer: {
            text: `Généré pour ${message.author.tag}`,
          },
        },
      });
    }
    if (args[0] == "roll") {
      if (args[1] == "force") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Force * 5}`);

          if (roll > Player2.Force * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Force * 3}`);

          if (roll > Player2.Force * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Force}`);

          if (roll > Player2.Force) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "constitution") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Constitution * 5}`
          );

          if (roll > Player2.Constitution * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Constitution * 3}`
          );

          if (roll > Player2.Constitution * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Constitution}`
          );

          if (roll > Player2.Constitution) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "dextérité") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Dextérité * 5}`
          );

          if (roll > Player2.Dextérité * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Dextérité * 3}`
          );

          if (roll > Player2.Dextérité * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Dextérité}`);

          if (roll > Player2.Dextérité) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "apparence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Apparence * 5}`
          );

          if (roll > Player2.Apparence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Apparence * 3}`
          );

          if (roll > Player2.Apparence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Apparence}`);

          if (roll > Player2.Apparence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "intelligence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Intelligence * 5}`
          );

          if (roll > Player2.Intelligence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Intelligence * 3}`
          );

          if (roll > Player2.Intelligence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Intelligence}`
          );

          if (roll > Player2.Intelligence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "volonté") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Volonté * 5}`
          );

          if (roll > Player2.Volonté * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Volonté * 3}`
          );

          if (roll > Player2.Volonté * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Volonté}`);

          if (roll > Player2.Volonté) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "éducation") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Éducation * 5}`
          );

          if (roll > Player2.Éducation * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player2.Éducation * 3}`
          );

          if (roll > Player2.Éducation * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player2.Éducation}`);

          if (roll > Player2.Éducation) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
    }
  }
  if (message.author.id == 335801182142332939) {
    if (args[0] == "résumé") {
      message.channel.send({
        embed: {
          color: 0xf58b1f,
          title: `__**${message.author.tag} - Call of Cthulhu**__`,
          thumbnail: {
            url:
              "https://cdn.discordapp.com/attachments/690952488995520584/693848969154920544/Logo_Call_of_Cthulhu.png",
          },
          fields: [
            {
              name: "Nom : ",
              value: `**${Player3.Nom}**`,
            },
            {
              name: "Métier : ",
              value: `**${Player3.Métier}**`,
            },
            {
              name: "Occupation : ",
              value: `**${Player3.Occupation}**`,
            },
            {
              name: "Sexe : ",
              value: `**${Player3.Sexe}**`,
            },
            {
              name: "Age : ",
              value: `**${Player3.Age}**`,
            },
            {
              name: "Points de vie : ",
              value: `**${Player3.HP}** / ${Player3.HPMax}`,
            },
            {
              name: "Santé mentale : ",
              value: `**${Player3.SantéMentale}** / ${Player3.SantéMentaleMax}`,
            },
            {
              name: "Force : ",
              value: `**${Player3.Force}** / 21`,
            },
            {
              name: "Constitution : ",
              value: `**${Player3.Constitution}** / 21`,
            },
            {
              name: "Dextérité : ",
              value: `**${Player3.Dextérité}** / 21`,
            },
            {
              name: "Apparence : ",
              value: `**${Player3.Apparence}** / 21`,
            },
            {
              name: "Intelligence : ",
              value: `**${Player3.Intelligence}** / 21`,
            },
            {
              name: "Volonté : ",
              value: `**${Player3.Volonté}** / 21`,
            },
            {
              name: "Éducation : ",
              value: `**${Player3.Éducation}** / 21`,
            },
          ],
          footer: {
            text: `Généré pour ${message.author.tag}`,
          },
        },
      });
    }
    if (args[0] == "roll") {
      if (args[1] == "force") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Force * 5}`);

          if (roll > Player3.Force * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Force * 3}`);

          if (roll > Player3.Force * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Force}`);

          if (roll > Player3.Force) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "constitution") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Constitution * 5}`
          );

          if (roll > Player3.Constitution * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Constitution * 3}`
          );

          if (roll > Player3.Constitution * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Constitution}`
          );

          if (roll > Player3.Constitution) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "dextérité") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Dextérité * 5}`
          );

          if (roll > Player3.Dextérité * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Dextérité * 3}`
          );

          if (roll > Player3.Dextérité * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Dextérité}`);

          if (roll > Player3.Dextérité) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "apparence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Apparence * 5}`
          );

          if (roll > Player3.Apparence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Apparence * 3}`
          );

          if (roll > Player3.Apparence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Apparence}`);

          if (roll > Player3.Apparence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "intelligence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Intelligence * 5}`
          );

          if (roll > Player3.Intelligence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Intelligence * 3}`
          );

          if (roll > Player3.Intelligence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Intelligence}`
          );

          if (roll > Player3.Intelligence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "volonté") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Volonté * 5}`
          );

          if (roll > Player3.Volonté * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Volonté * 3}`
          );

          if (roll > Player3.Volonté * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Volonté}`);

          if (roll > Player3.Volonté) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "éducation") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Éducation * 5}`
          );

          if (roll > Player3.Éducation * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player3.Éducation * 3}`
          );

          if (roll > Player3.Éducation * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player3.Éducation}`);

          if (roll > Player3.Éducation) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
    }
  }
  if (message.author.id == 358272125703946241) {
    if (args[0] == "résumé") {
      message.channel.send({
        embed: {
          color: 0xf58b1f,
          title: `__**${message.author.tag} - Call of Cthulhu**__`,
          thumbnail: {
            url:
              "https://cdn.discordapp.com/attachments/690952488995520584/693848969154920544/Logo_Call_of_Cthulhu.png",
          },
          fields: [
            {
              name: "Nom : ",
              value: `**${Player4.Nom}**`,
            },
            {
              name: "Métier : ",
              value: `**${Player4.Métier}**`,
            },
            {
              name: "Occupation : ",
              value: `**${Player4.Occupation}**`,
            },
            {
              name: "Sexe : ",
              value: `**${Player4.Sexe}**`,
            },
            {
              name: "Age : ",
              value: `**${Player4.Age}**`,
            },
            {
              name: "Points de vie : ",
              value: `**${Player4.HP}** / ${Player4.HPMax}`,
            },
            {
              name: "Santé mentale : ",
              value: `**${Player4.SantéMentale}** / ${Player4.SantéMentaleMax}`,
            },
            {
              name: "Force : ",
              value: `**${Player4.Force}** / 21`,
            },
            {
              name: "Constitution : ",
              value: `**${Player4.Constitution}** / 21`,
            },
            {
              name: "Dextérité : ",
              value: `**${Player4.Dextérité}** / 21`,
            },
            {
              name: "Apparence : ",
              value: `**${Player4.Apparence}** / 21`,
            },
            {
              name: "Intelligence : ",
              value: `**${Player4.Intelligence}** / 21`,
            },
            {
              name: "Volonté : ",
              value: `**${Player4.Volonté}** / 21`,
            },
            {
              name: "Éducation : ",
              value: `**${Player4.Éducation}** / 21`,
            },
          ],
          footer: {
            text: `Généré pour ${message.author.tag}`,
          },
        },
      });
    }
    if (args[0] == "roll") {
      if (args[1] == "force") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Force * 5}`);

          if (roll > Player4.Force * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Force * 3}`);

          if (roll > Player4.Force * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Force}`);

          if (roll > Player4.Force) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "constitution") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Constitution * 5}`
          );

          if (roll > Player4.Constitution * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Constitution * 3}`
          );

          if (roll > Player4.Constitution * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Constitution}`
          );

          if (roll > Player4.Constitution) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "dextérité") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Dextérité * 5}`
          );

          if (roll > Player4.Dextérité * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Dextérité * 3}`
          );

          if (roll > Player4.Dextérité * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Dextérité}`);

          if (roll > Player4.Dextérité) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "apparence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Apparence * 5}`
          );

          if (roll > Player4.Apparence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Apparence * 3}`
          );

          if (roll > Player4.Apparence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Apparence}`);

          if (roll > Player4.Apparence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "intelligence") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Intelligence * 5}`
          );

          if (roll > Player4.Intelligence * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Intelligence * 3}`
          );

          if (roll > Player4.Intelligence * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Intelligence}`
          );

          if (roll > Player4.Intelligence) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "volonté") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Volonté * 5}`
          );

          if (roll > Player4.Volonté * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Volonté * 3}`
          );

          if (roll > Player4.Volonté * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Volonté}`);

          if (roll > Player4.Volonté) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
      if (args[1] == "éducation") {
        if (args[2] == "standard") {
          message.channel.send("Lancé d'un dé 100...");
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Éducation * 5}`
          );

          if (roll > Player4.Éducation * 5) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "difficile") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(
            `Résultat : **${roll}** / ${Player4.Éducation * 3}`
          );

          if (roll > Player4.Éducation * 3) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
        if (args[2] == "extrême") {
          message.channel.send("Lancé d'un dé 100...");
          roll = Math.floor(Math.random() * 100 + 1);
          message.channel.send(`Résultat : **${roll}** / ${Player4.Éducation}`);

          if (roll > Player4.Éducation) {
            message.channel.send(":red_circle: C'est un échec !");
          } else {
            message.channel.send(":green_circle: C'est réussit !");
          }
        }
      }
    }
  }
};

module.exports.help = {
  name: "cthulhu",
};
