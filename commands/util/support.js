const { Command } = require('discord.js-commando');
const { MessageEmbed, version: djsVersion } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const { formatNumber, embedURL } = require('../../util/Util');

module.exports = class DonateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'support',
			group: 'util',
			memberName: 'support',
			description: 'Responds with the bot\'s donation links.',
			guarded: true,
		});
	}

	async run(msg) {
    
		const embed = new MessageEmbed()
			.setColor("#ff3232")
		.setTitle('Support!')		
    .addField('❯ Support server', embedURL('get support here', 'https://discord.gg/sy6Jrze'), true)
		return msg.embed(embed);
	}
};
