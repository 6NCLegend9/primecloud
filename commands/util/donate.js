const { Command } = require('discord.js-commando');
const { MessageEmbed, version: djsVersion } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const { formatNumber, embedURL } = require('../../util/Util');

module.exports = class DonateCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'donate',
			aliases: ['paypal'],
			group: 'util',
			memberName: 'donate',
			description: 'Responds with the bot\'s donation links.',
			guarded: true,
			credit: [
				{
					name: 'PayPal',
					url: 'https://www.paypal.com/us/home',
					reason: 'Donation Gathering'
				}
			]
		});
	}

	async run(msg) {
    
		const embed = new MessageEmbed()
			.setColor("#BA55D3")
		.setTitle('donation')		
    .addField('Contribute to development!', embedURL('donate', 'https://www.paypal.me/saradalmeida'), true)
		return msg.embed(embed);
	}
};
