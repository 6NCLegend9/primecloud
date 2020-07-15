const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const subreddits = [
    "memes",
    "DeepFriedMemes",
    "bonehurtingjuice",
    "surrealmemes",
    "dankmemes",
    "meirl",
    "me_irl",
    "funny"
]
 
module.exports = class MemeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            group: 'other',
            memberName: 'meme',
           
            description: 'Sends a random meme from selected subreddits!',
            examples: ['~meme'],
            details: "There is no NSFW filter on this! \n\If there is an NSFW meme, please remove it by reacting with a '🎴' emoji!",
            throttling: {
                usages: 2,
                duration: 10
            }
        });
    }

    run(message) {
        var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(randSubreddit)
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`${randSubreddit}`)
                    .setDescription(`[MEME REVIEW](${url})`)
                    .setImage(url)
                    .setColor('#BA55D3');
                return message.channel.send({ embed });
            })
    }
}
