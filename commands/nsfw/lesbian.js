const { Command } = require('discord.js-commando');
const superagent = require("snekfetch");
const Discord = require('discord.js');
const errors = require('../../assets/json/errors');


module.exports = class lesbianCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lesbian',
            group: 'nsfw',
            memberName: 'lesbian',
            guildOnly: true,
            description: 'Finds high quality NSFW content for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~lesbian'],
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
if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/les')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Lesbian")
  .setImage(response.body.url)
  .setColor(`#A187E0`)
  .setFooter(`Tags: lesbian`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
