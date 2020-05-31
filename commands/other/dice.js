const Discord = require('discord.js');
	const { Command } = require('discord.js-commando');
	const xdicey = require('xdicey');

module.exports = class diceCommand extends Command {
	constructor (client) {
		super(client, {
			'name': 'dice',
			'aliases': ['xdicey', 'roll', 'dicey', 'die'],
			'group': 'other',
			'memberName': 'dice',
			'description': 'Sends contents of a copypasta file to the chat',
			'examples': ['dice <sides_on_die> <amount_of_rolls>', 'dice 6 5'],
			'guildOnly': false,

			'args': [
				{
					'key': 'sides',
					'prompt': 'How many sides does your die have?',
					'type': 'integer',
					'label': 'Amount of sides the dice have'
				}, {
					'key': 'rolls',
					'prompt': 'How many times should the die be rolled?',
					'type': 'integer',
					'label': 'The amount of times the die is rolled'
				}
			]
		});
	}

	run (msg, args) {
		const diceEmbed = new Discord.MessageEmbed(),
			res = [],
			throwDice = xdicey(args.rolls, args.sides);


		for (const index in throwDice.individual) { // eslint-disable-line guard-for-in
			res.push(`🎲: ${throwDice.individual[index]}`);
		}


		diceEmbed
			.setColor('#ff3232')
			.addField('Dice result', res, false)
			.addField('Total', throwDice.total, false);

		return msg.embed(diceEmbed);
	}
};
