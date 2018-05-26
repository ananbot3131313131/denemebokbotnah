const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**:slot_machine: Eğlence ve Kullanıcı Komutları:**", "\nan!sor = Sorunuza EVET HAYIR BELKİ cevaplarını verir. \nan!aletim = aletinin kaç cm olduğunu söyler. \nan!herkesebendençay = Herkese Çay Alırsınız. \nan!çayiç = Çay İçersiniz. \nan!çekiç = İstediğiniz Kişiye Çekiç Atarsınız.\nan!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nan!sunucuresmi = BOT Sunucunun Resmini Atar. \nan!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nan!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nan!yazıtura = Yazı Tura Oynarsınız. \nan!taşkağıtmakas = Taş Kağıt Makas Oynarsınız. \nan!zekayaşım = zekayaşınızı gösterir. \nan!tavsiye tavsiyeniz = Yapımcıya Tavsiye Yollarsınız. \nan!emojiler = sunucu emojilerini gösterir. \nan!havadurumu <şehirismi> = Şehir isminin ilk harfini küçük yazınız.")
  .addField("**:gear: Sunucu Yetkilisi Komutları**", "\nan!reklamtara = Oynuyor Kısmına Reklam Koyanları Bulur.\nan!sustur = istediğiniz kişiyi susturur.\nan!konuştur = mute yi açar [BAKIMDA]\nan!yetkiver = istediğiniz Kişiye Yetki Verir.\nan!kilit = Bulunduğunuz kanalı belirli süre kitler. \nan!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nan!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nan!unban = İstediğiniz Kişinin Yasağını Açar.")
  .addField("**:tools: Botun Ana Komutları**", "\nan!yardım = BOT Komutlarını Atar. \nan!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nan!ping = BOT Gecikme Süresini Söyler. \nan!davet = BOT Davet Linkini Atar. \nan!istatistik = BOT İstatistiklerini Atar.")
  .addField("**:straight_ruler: Matematik Komutları**","an!topla sayı sayı \nan!çarp sayı sayı \nan!çıkar sayı sayı \nan!böl sayı sayı.")
  .addField("**:underage: NSFW Komutları**","\nan!hd = 4k fotoğraf yollar.")
  .addField("**LİNKLER**", "\n[DESTEK SUNUCUM](https://discord.gg/rUj7B6T) \n[DAVET LİNKİM](https://discordapp.com/oauth2/authorize?client_id=449981813876588564&permissions=8&scope=bot)")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'an!yardım [komut]'
};
