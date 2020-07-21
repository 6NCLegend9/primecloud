const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      aliases: ['end','dc','disconnect'],
      group: 'music',
      memberName: 'leave',
      description: 'Leaves voice channel if in one'
    });
  }

 
 run(message) {
var voiceChannel = message.member.voice.channel;
if(!voiceChannel) {
	message.replay('Join a channel and try again');
	return;
      }else if (
	typeof message.guild.musicData.songDispatcher == 'undeifned' ||
	      message.guild.musicData.songDispatcher == null
	      ){
	      message.reply('There is no song playing right now!');
	      return;
      }else if (!message.guild.musicData.queue) {
	      message.reply('There are no song in the queue');
      return;
      }else if (message.guildData.songDispatcher.paused) {
	      message.guildData.songDispatcher.resume();
	      setTimeout(() => {
		      message.guildData.songDispatcher.end();
	      }, 100);
	      return;
      } else {
	      message.guildData.songDispatcher.end();
	      message.guildData.queue.length = 0;	
     const embed = new MessageEmbed()  
   .setColor('#BA55D3')
    	.addField('Disconnected', `Left **${connection.channel.name}**...`)
    	return message.embed(embed);
	}

};
