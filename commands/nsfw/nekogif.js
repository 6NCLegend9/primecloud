const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const superagent = require("snekfetch");
const errors = require('../../assets/json/errors');

module.exports = class NekoGifCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nekogif',
            aliases: ['ngif'],
            group: 'nsfw',
            memberName: 'nekogif',
            guildOnly: true,
            description: 'Finds neko gifs for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~nekogif'],
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
superagent.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Neko gif")
  .setImage(response.body.url)
  .setColor(`#A187E0`)
  .setFooter(`Tags: neko gif`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
