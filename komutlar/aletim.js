const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

exports.run = (client, message, args) => {
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Hatalı kullanım;').setDescription(message.author.tag + ', komutları direkt mesajda kullanamazsın.\nLütfen bu komutu bir sunucuda dene.').setFooter('Rahatsız Adam', client.user.avatarURL).setTimestamp()); }
          var sans = ["1cm Bamya amq","2 cm","3 cm","4 cm","5 cm","6 cm","7 cm","8 cm","9 cm","10 cm","11 cm","12 cm","13 cm","14 cm","15 cm","16 cm","17 cm","18 cm","19 cm","20 cm","21 cm","22 cm","23 cm","24 cm","25 cm","26 cm","27 cm","28 cm","29 cm","30 cm","31 cm","32 cm","33 cm","34 cm","35 cm","36 cm","37 cm","38 cm","39 cm","40 cm","41 cm","42 cm","43 cm","45 cm","46 cm","47 cm","48 cm","49 cm","50 cm","51 cm","52 cm","53 cm","54 cm","55 cm","56 cm","57 cm","58 cm","59 cm","60 cm","61 cm","62 cm","63 cm","64 cm","65 cm","66 cm","67 cm","68 cm","69 cm","70 cm","71 cm","72 cm","73 cm","74 cm","75 cm","76 cm","77 cm","78 cm","79 cm","80 cm","81 cm","82 cm","83 cm","84 cm","85 cm","86 cm","87 cm","88 cm","89 cm","90 cm","91 cm","92 cm","93 cm","94 cm","95 cm","96 cm","97 cm","98 cm","99 cm","100 cm Johny Baba"]
          var sonuc = sans[Math.floor((Math.random() * sans.length))];
          
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .setDescription('Senin aletin **'+ sonuc + '**')
          .setColor("RANDOM")
          return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aletim',
  description: 'Aletinizin kaç cm olduğunu ölçer.',
  usage: 'an!aletim'
};