const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
      if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('Rahatsız Adam', client.user.avatarURL).setTimestamp()); }
  let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimin Avatarını İstediğini Yazmalısını').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  embed.setImage(`${user.avatarURL}`)
  return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'adı yazılan kişiyi uyarır',
  usage: 'an!avatar'
};
