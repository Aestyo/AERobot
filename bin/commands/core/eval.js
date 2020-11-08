module.exports.run = async (client, message, args) => {
  if (message.author.id != "215806405251301376")
    return message.channel.send(
      "Vous n'êtes pas autorisé à utiliser cette commande."
    );

  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = {
  name: "eval"
};
