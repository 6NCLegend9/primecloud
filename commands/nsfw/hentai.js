const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const superagent = require("snekfetch");
const errors = require('../../assets/json/errors');

module.exports = class HentaiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hentai',
            group: 'nsfw',
          memberName: 'hentai',
            description: 'Finds hentai for you!',
            guildOnly: true,
            details: 'This command can only be used in NSFW channels!',
            examples: ['~hentai'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

      superagent.get('https://nekos.life/api/v2/img/hentai')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Hentai")
  .setImage(response.body.url)
  .setColor(`#A187E0`)
  .setFooter(`Tags: hentai`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
