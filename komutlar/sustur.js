const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(":heavy_multiplication_x: **Anan Gibi Yetkili Olman Lazım Canım!**").catch(e => {
      console.error(e);
    });
  }

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toMute) {
    return message.channel.send(":heavy_multiplication_x: **Kullanıcıyı bulamadım tekrar deneyebilirsin eğer olmassa adam gitti işte amq**").catch(e => {
      console.error(e);
    });
  }

  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply(':heavy_multiplication_x: Neden Susturuyon Onu Yaz.');

  let role = message.guild.roles.find(r => r.name === "muted");

  if (!role) {
    try {
      message.guild.createRole({
        name: "muted",
        color: "RED",
        permission: []
      }).then(role => {
        message.guild.channels.forEach(async(channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
      ADMINISTRATOR: false,
      CREATE_INSTANT_INVITE: false,
      KICK_MEMBERS: false,
      BAN_MEMBERS: false,
      MANAGE_CHANNELS: false,
      MANAGE_GUILD: false,
      SEND_TTS_MESSAGES: false,
      MANAGE_MESSAGES: false,
      ATTACH_FILES: false,
      CONNECT: false,
      SPEAK: false,
      MUTE_MEMBERS: false,
      DEAFEN_MEMBERS: false,
      MOVE_MEMBERS: false,
      CHANGE_NICKNAME: false,
      MANAGE_NICKNAMES: false,
      MANAGE_ROLES: false,
      MANAGE_WEBHOOKS: false,
      MANAGE_EMOJIS: false,
          });
        });
        toMute.addRole(role).then(r => {
          message.channel.send(`:white_check_mark:**İşlem başarılı.**`);
        });
      });
    } catch (e) {
      console.error(e);
    }
  } else {
    if (toMute.roles.has(role.id)) {
      return message.channel.send(":heavy_multiplication_x: **lan bu zaten susturulmuş mal**").catch(e => {
        console.error(e);
      });
    }
    toMute.addRole(role).then(g => {
      message.channel.send(`:white_check_mark:**Anan İşlemi Yaptı**`).catch(e => {
        console.error(e);
      });
    });
  };
  let guild = message.guild
  let modlog = guild.channels.find('name' ,'modlog');
  if (!modlog) return message.reply(':heavy_multiplication_x:** `modlog` **kanalını bulamıyorum.**');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
    .setTimestamp()
    .setTitle('Komut kullanımı;')
    .addField('Susturulan:', `${toMute.user.username}#${toMute.user.discriminator}`)
    .addField('Susturan:', `${message.author.username}#${message.author.discriminator}`,true)
    .addField('Susturma sebebi:',reason,true)
  return guild.channels.get(modlog.id).sendEmbed(embed);
  
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'an!sustur [kullanıcı] [sebep]'
};