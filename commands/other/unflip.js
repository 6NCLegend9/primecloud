const { Command } = require('discord.js-commando');

module.exports = class UnflipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unflip',
			group: 'other',
			memberName: 'unflip',
			description: 'Unflips a flipped table.',
			patterns: [/\(╯°□°）╯︵ ┻━┻/i]
		});
	}

	generateText() {
		return '┬─┬ ノ( ゜-゜ノ)';
	}
};
