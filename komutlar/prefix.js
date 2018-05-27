const Discord = require('discord.js');
exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        throw 'Please provide a prefix to set!';
    }

    const prefix = args.join(' ');
    bot.managers.config.set('prefix', prefix);
    msg.edit('Prefix set, rebooting! :ok_hand:');
};

exports.info = {
    name: 'prefix',
    usage: 'an!prefix <new prefix>',
    description: 'Sets the bot prefix'
};