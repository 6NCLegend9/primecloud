const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const superagent = require("snekfetch");
const errors = require('../../assets/json/errors');


module.exports = class TrapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'trap',
            aliases: ['traps'],
            group: 'nsfw',
            memberName: 'trap',
            description: 'Finds...traps? for...you?',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~trap'],
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

 superagent.get('https://nekos.life/api/v2/img/trap')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("trap")
  .setImage(response.body.url)
  .setColor(`#A187E0`)
  .setFooter(`Tags: trap`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
