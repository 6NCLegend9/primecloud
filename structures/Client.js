const { Command } = require('discord.js-commando');
const { WebhookClient } = require('discord.js');
const Collection = require('@discordjs/collection');
const winston = require('winston');


module.exports = class XiaoClient extends Command{
	constructor(options) {
		super(options);

		this.logger = winston.createLogger({
			transports: [new winston.transports.Console()],
			format: winston.format.combine(
				winston.format.timestamp({ format: 'MM/DD/YYYY HH:mm:ss' }),
				winston.format.printf(log => `[${log.timestamp}] [${log.level.toUpperCase()}]: ${log.message}`)
			)
		});
		this.games = new Collection();
	}
};
