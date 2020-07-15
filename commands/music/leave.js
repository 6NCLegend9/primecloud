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
		const connection = this.client.voice.connections.get(message.guild.id);
		if (!connection) return message.reply('I am not in a voice channel.');
		connection.channel.leave();
//	return message.reply(`Left **${connection.channel.name}**...`);
     const embed = new MessageEmbed()  
   .setColor('#BA55D3')
    	.addField('Disconnected', `Left **${connection.channel.name}**...`)
    	return message.embed(embed);
	}

};
