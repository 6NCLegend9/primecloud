const { Command } = require('discord.js-commando');

module.exports = class EmojiImageCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emoji-image',
			aliases: ['big-emoji', 'emote-image', 'big-emote'],
			group: 'info',
			memberName: 'emoji-image',
			description: 'Responds with an emoji\'s full-scale image.',
			
			clientPermissions: ['ATTACH_FILES'],
			args: [
				{
					key: 'emoji',
					prompt: 'Which emoji would you like to get the image of?',
					type: 'custom-emoji'
				}
			]
		});
	}

	run(msg, { emoji }) {
		return msg.say({ files: [emoji.url] });
	}
};
