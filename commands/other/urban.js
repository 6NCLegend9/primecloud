const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const	urban = require('urban');

module.exports = class urbanCommand extends Command {
	constructor (client) {
		super(client, {
			'name': 'urban',
			'group': 'other',
			'aliases': ['ub', 'ud'],
			'memberName': 'urban',
			'description': 'Find definitions on urban dictionary',
			'examples': ['urban {word}', 'urban ugt'],
			'guildOnly': false,

			'args': [
				{
					'key': 'query',
					'prompt': 'What word do you want to define?',
					'type': 'string',
					'label': 'Word to define'
				}
			]
		});
	}

	run (msg, args) {
		urban(args.query).first((json) => {
			if (!json) {
				return msg.reply('⚠ No Results Found!');
			}
			const urbanEmbed = new Discord.MessageEmbed(); // eslint-disable-line one-var

			urbanEmbed
        .setThumbnail('https://i.imgur.com/D19IeLX.png')
        .setAuthor(`Urban Search - ${json.word}`, 'https://i.imgur.com/D19IeLX.png')
				.setColor('#ff3232')
				.addField('Definition', json.definition.length <= 1024 ? json.definition : `Truncated due to exceeding maximum length\n${json.definition.slice(0, 970)}`, false)
				.addField('Example', json.example.length <= 1024 ? json.example : `Truncated due to exceeding maximum length\n${json.example.slice(0, 970)}`, false)
				.addField('Permalink', json.permalink, false);

			return msg.embed(urbanEmbed);
		});
	}
};
