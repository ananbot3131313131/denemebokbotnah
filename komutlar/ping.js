const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
    let now = Date.now();

    let embed = new Discord.RichEmbed()
        .setDescription(`Gecikmem: ${new Date().getTime() - message.createdTimestamp}ms`)
        .setColor("RANDOM")

    message.channel.send(embed);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pingi gösterir.',
  usage: 'an!ping'
};
