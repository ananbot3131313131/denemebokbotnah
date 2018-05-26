const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
    console.log(`[${msg.author.tag}]  : ${msg.content}`);
    return;
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**AleykümSelam,Hoşgeldin**');
  }
});


client.on("message", message => {
  const dmchannel = client.channels.find("id", "341194704085319683");
if (message.channel.type === "dm") {
 const embed = new Discord.RichEmbed()
    if (message.author.id === client.user.id) return;
    dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Bana dm mesaj atıldı.`,
              description: `Dm'yi atan: ${message.author.tag}\n\nDm mesaj: ${message.content}`
            }})
           }})

           client.on('guildCreate', guild => {

const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Sunucuya katıldım;')
.setDescription(`${guild.name} adlı sunucuya eklendim \n[${guild.memberCount} üye]!\n[${guild.id}]\nSunucu sahibi:${guild.owner} (${guild.owner.id})`)
.setFooter('ANANBot', client.user.avatarURL)
.setTimestamp()
client.channels.get('450053993134161921').send(embed);
});

client.on('guildDelete', guild => {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Sunucudan atıldım;')
.setDescription(`${guild.name} adlı sunucudan atıldım \n[${guild.memberCount} üye]!\n[${guild.id}]\nSunucu sahibi:${guild.owner} (${guild.owner.id})`)
.setFooter('ANANBot', client.user.avatarURL)
.setTimestamp()
client.channels.get('450053993134161921').send(embed);
});


client.on('guildMemberAdd', member => {
  const hg = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setDescription(`${member.guild.name} Sunucuya hoşgeldin!\nSunucuda **ANANBot** kullanılmakta.\n\n\n__Linkler:__\n[Beni Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=449981813876588564&permissions=8&scope=bot)\n[Destek Sunucumuza Gelmek İçin Tıkla](https://discord.gg/rUj7B6T)`)
  .setFooter('CopyRight 2018')
  .setColor('RANDOM')
  member.send(hg);
});

client.on('guildMemberRemove', member => {
  const bb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setDescription(`${member.guild.name} Sunucudan ayrıldı.Görüşürüz.\nSunucuda **ANANBot** kullanılmakta.n\n\n__Linkler:__\n[Sende Beni Eklemek İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=449981813876588564&permissions=8&scope=bot)\n[Sende Destek Sunucumuza Gelmek İçin Tıkla](https://discord.gg/rUj7B6T)`)
  .setFooter(`CopyRight 2018`)
  .setTimestamp()
  .setColor('RANDOM')
  member.send(bb);
});

client.on ('message', message => {
  if (message.content === prefix + "emojiler") {
    const emojiList = message.guild.emojis.map(e=>e.toString()).join(" **|** ");
    message.channel.send(emojiList);
  }
})
  
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'an!yardım') {
    await msg.react('✅'); 
  }
  });

client.on("message", message => {
  const dmchannel = client.channels.find("name", "modlog");
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      dmchannel.sendMessage("", {embed: {
              color: 3447003,
              title: `YAZAN: ${message.author.tag}`,
              description: `${message.content}`
           }})
  }
  if (message.channel.bot) return;
});

client.on('message', msg => { 
if (/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(msg.content)) return msg.delete(); 
});







client.on("message", message => {
  if (message.content.toLowerCase() === prefix + 'avatar 1') {
  if (message.author.id !== "341194704085319683") {
    message.reply('sie');
  } else {
    message.channel.sendMessage(`Türk bayrağını başarılı bir şekilde profilime koydum.`).then(msg => {
    console.log(`Yeniden başlıyorum..`);
    client.user.setAvatar(`https://cdn.discordapp.com/attachments/441237885841178626/442263106559803393/trbayrak-1.jpg`);
  })
 }
}
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamesunucu') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime sunucu sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`${client.guilds.size} Sunucu 👀`, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyeni') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yardım ve daveti koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`${prefix}yardım ${prefix}davet ✨ `, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyenilik') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yeniliğimi koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`Yeni komutlar eklendi! görmek için: ${prefix}yardım ✨ `, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamepls') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yalvarma mesajını koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`Arkadaşlar gelişmemiz için lütfen botu paylaşır mısınız? `, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gametoplam') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime bütün sayılarımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`${prefix}yardım ✨ ${client.guilds.size} Sunucu ${client.users.size} Kullanıcı `, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamekanal') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime kanal sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`${client.channels.size} Kanal 📄`, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamekullanıcı') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime kullanıcı sayımı koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`${client.users.size} Kullanıcı 💞`, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gamebakım') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime bakım komudunu koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`BAKIMDAYIZ `, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});

client.on("message", message => {
    if (message.content.toLowerCase() === prefix + 'gameyardım') {
    if (message.author.id !== "341194704085319683") {
      message.reply('sie');
    } else {
      message.channel.sendMessage(`Başarılı bir şekilde profilime yardım komudunu koydum.`).then(msg => {
      console.log(`Yeniden başlıyorum..`);
      client.user.setGame(`${prefix}yardım  ✨ `, "https://www.twitch.tv/hzsagkol");
    })
   }
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(ayarlar.prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`${total}`);
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'tavsiyeni-gönder' || command === 'tavsiye') {
    let str = '<@341194704085319683>';
    let id = str.replace(/[<@!>]/g, '');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(` ⚠ tavsiyeni yazmayı unuttun. ⚠ `);
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(''));
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Tavsiye bilgileri;')
    .addField('Tavsiye:', mesaj, true)
    .addField('Kullanıcı adı:', message.author.tag, true)
    .addField('Kullanıcı kimliği:', message.author.id, true)
    .addField('Sunucu adı:', message.guild.name, true)
    .addField('Sunucu kimliği:', message.guild.id, true)
    client.fetchUser(id)
    .then(user => {user.send({embed})})
  }
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);
