const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(":heavy_multiplication_x: **Anan Gibi Yetkili Olman Lazım Canım!**");
  }

  let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toUnmute) {
    return message.channel.send(":heavy_multiplication_x: **Kullanıcıyı bulamadım tekrar deneyebilirsin eğer olmassa adam gitti işte amq**").catch(e => {
      console.error(e);
    });
  }

  let role = message.guild.roles.find(r => r.name === "muted");
  if (!role) {
    return message.reply(":heavy_multiplication_x: **muted birini bulamıyorum.**").catch(e => {
      console.error(e);
    });
  }
  let guild = message.guild
let modlog = guild.channels.find('name' ,'modlog');
if (!modlog) return message.reply(':heavy_multiplication_x:** `modlog` **kanalını bulamıyorum.**');

  toUnmute.removeRole(role).then(g => {
    message.channel.send(`:white_check_mark:**İşlem başarılı.**`);
  }).catch(e => {
    console.error(e);

});
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
  .setTimestamp()
  .setTitle('Komut kullanımı;')
  .addField('Konuşturulan:', `${toUnmute.user.username}#${toUnmute.user.discriminator}`,true)
  .addField('Konuşturan:', `${message.author.username}#${message.author.discriminator}`,true)
return guild.channels.get(rlog.id).sendEmbed(embed);
};
    
    
    
    exports.conf = {
      enabled: true,
      guildOnly: true,
      aliases: [],
      permLevel: 0
    };
    
    exports.help = {
      name: 'konuştur',
      description: 'İstediğiniz kişinin mute sini kaldırır.',
      usage: 'an!konuştur [kullanıcı] '
    };