const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const superagent = require("snekfetch");
const errors = require('../../assets/json/errors');


module.exports = class YuriCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'yuri',
            aliases: ['gl'],
            group: 'nsfw',
            memberName: 'yuri',
            guildOnly: true,
            description: 'Finds yuri for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~yuri'],
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
superagent.get('https://nekos.life/api/v2/img/yuri')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Yuri")
  .setImage(response.body.url)
  .setColor(`#A187E0`)
  .setFooter(`Tags: yuri`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
