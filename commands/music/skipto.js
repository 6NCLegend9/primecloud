const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SkipToCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'skipto',
      memberName: 'skipto',
      group: 'music',
      description:
        'Skip to a specific song in the queue, provide the song number as an argument',
      args: [
        {
          key: 'songNumber',
          prompt:
            'What is the number in queue of the song you want to skip to?, it needs to be greater than 1',
          type: 'integer'
        }
      ]
    });
  }

  run(message, { songNumber }) {
    if (songNumber < 1 && songNumber >= message.guild.musicData.queue.length) {
      return message.reply('Please enter a valid song number');
    }
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('You cannot use the command unless youre in the same channel as Cloud Music Premium!');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('There is no song playing right now!');
    }

    if (message.guild.musicData.queue < 1)
      return message.say('There are no songs in queue');

    message.guild.musicData.queue.splice(0, songNumber - 1);
    message.guild.musicData.songDispatcher.end();
    return;
          const embed = new MessageEmbed()
      .setColor('#BA55D3')
 	  	.addField('Skip', `<:purple_skip:734454925790019604> Jumping into song number ${songNumber}!`)
    	return message.embed(embed);
  }
};
