const Command = require('../../structures/Command');
const moment = require('moment');
const { MessageEmbed } = require('discord.js');

module.exports = class EmojiCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emoji',
			aliases: ['emoji-info', 'emote'],
			group: 'other',
			memberName: 'emoji',
			description: 'Responds with detailed information on an emoji.',
		
			clientPermissions: ['EMBED_LINKS'],
			args: [
				{
					key: 'emoji',
					prompt: 'Which emoji would you like to get information on?',
					type: 'custom-emoji'
				}
			]
		});
	}

	run(msg, { emoji }) {
		const embed = new MessageEmbed()
			.setColor("#ba55d3")
			.setThumbnail(emoji.url)
			.addField('Name', emoji.name, true)
			.addField('ID', emoji.id, true)
			.addField('Creation Date', moment.utc(emoji.createdAt).format('MM/DD/YYYY h:mm A'), true)
			.addField('Animated?', emoji.animated ? 'Yes' : 'No', true);
		return msg.embed(embed);
	}
};
