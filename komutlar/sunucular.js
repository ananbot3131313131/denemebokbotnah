const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
message.channel.send("**Anan Kilidi Kırıyor...**")
.then(m => {
      m.edit(":white_check_mark:**Anan Kilid Kırdı!**");
    })
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
.setDescription('Patron Özele Bak :postbox:')
    message.channel.sendEmbed(ozelmesajkontrol) }
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription('___*** AŞŞAĞA BAK Bilgiler Aşşağıda***___')
.addField('Sunucu İsimler   ::  \n','**'+ client.guilds.map(g =>`\n${g.name} - ${g.id}\n`)+'**')
.addField('Sunucu Sayıları  ::  \n','**'+ client.guilds.size+'**')
return message.author.sendEmbed(embed)
};


       exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 4
      };
      
      exports.help = {
        name: 'sunucular',
        description: 'Sunucuları gösterir.',
        usage: 'an!sunucular'
      };