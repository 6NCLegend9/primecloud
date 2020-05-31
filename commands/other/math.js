const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const	scalc = require('scalc');

module.exports = class mathCommand extends Command {
	constructor (client) {
		super(client, {
			'name': 'math',
			'aliases': ['calc'],
			'group': 'other',
			'memberName': 'math',
			'description': 'Calculate anything',
			'examples': ['math {equation to solve}', 'math -10 - abs(-3) + 2^5'],
			'guildOnly': false,

			'args': [
				{
					'key': 'equation',
					'prompt': 'What is the equation to solve?',
					'type': 'string',
					'label': 'Equation to calculate'
				}
			]
		});
	}

	run (msg, args) {
		const mathEmbed = new Discord.MessageEmbed(); // eslint-disable-line one-var

		mathEmbed
			.setColor('#ff3232')
			.addField('Equation', args.equation.toString(), false)
			.addField('Result', scalc(args.equation), false);

		return msg.embed(mathEmbed);
	}
};
