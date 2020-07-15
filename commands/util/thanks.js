const { MessageEmbed, version: djsVersion } = require('discord.js');
const fs = require("fs");
const { Command } = require('discord.js-commando');

module.exports = class ServerCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'thanks',
			group: 'util',
			memberName: 'thanks',
			description: 'Responds with a special thanks.',
			clientPermissions: ['EMBED_LINKS']
		});
	}

	async run(msg) {
		const embed = new MessageEmbed()
			 embed.setTitle("<:BlueVerifiedBadge:709062879738855584> Special Thanks")
      .setColor("BA55D3")                                                     
      .addField("Main Developers", "Skies & NC_Legend.\nModmail Developer - -Kat-. \nCosmic Bot Developer - Brendan_. \nCATO - Our Developer.")
      .addField("<:BlueVerifiedBadge:709062879738855584> Verified Bots", "Cloud Music & Cloud Giveaways")
      .addField("Special Thanks to everyone", "Special thanks to everyone that invited our bot to your server. Skies & I have been working on this project for a bit now. After discord released their <:BlueVerifiedBadge:709062879738855584> badge for bot Developers I've been excited because of what we can do in the near future with our bot. Cloud Music and Cloud Giveaway bots both got <:BlueVerifiedBadge:709062879738855584>. This has been a long journey but we're here to strive to success and make our bot as successful as possible. we love every single one of our users that use our bot! Thank you for sticking with us. we will keep improving our bot and upgrade our Hosting so its better for our users!!")
      .setTimestamp(); 
		return msg.embed(embed);
	}
};
