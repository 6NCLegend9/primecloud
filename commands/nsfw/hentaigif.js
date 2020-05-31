const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const superagent = require("snekfetch");
const errors = require('../../assets/json/errors');
const subreddits = [
  "HENTAI_GIF"
  ]

module.exports = class HentaiGifCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hentaigif',
            aliases: ['hgif'],
            group: 'nsfw',
            memberName: 'hentaigif',
            guildOnly: true,
            description: 'Finds hentai gifs for you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~hentaigif'],
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

 superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Hentai gif")
  .setImage(response.body.url)
  .setColor(`#A187E0`)
  .setFooter(`Tags: gif`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
