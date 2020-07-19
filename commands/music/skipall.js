const { Command } = require('discord.js-commando');

module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'skipall',
      aliases: ['skip-all'],
      memberName: 'skipall',
      group: 'music',
      description: 'Skip all songs in queue',
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('You cannot use the command unless youre in the same channel as Cloud Music Premium!');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('There is no song playing right now!');
    }
    if (!message.guild.musicData.queue)
      return message.say('There are no songs in queue');
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0; // clear queue
        const embed = new MessageEmbed()
      .setColor('#BA55D3')
 	  	.addField('Skiping all', `<:purple_skip:734454925790019604> all the song skiped!`)
    	return message.embed(embed);
  }
};
