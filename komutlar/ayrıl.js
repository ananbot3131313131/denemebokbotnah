const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ayrıl` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  
  message.guild.leave(message.guild.id);
    const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Sunucudan çıkardın;')
  .setDescription(`**${message.guild.name}** sunucusundan beni çıkardın!`)
  .setFooter('Rahatsız Adam', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('443761073443831809').send(embed);


};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ayrıl'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'ayrıl',
    description: 'Komutun kullanıldığı sunucudan botu çıkarır.',
    usage: 'an!ayrıl'
  };