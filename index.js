

const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
 commandPrefix: prefix,
 owner: '357510381511639040' // change this to your Discord user ID
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
       ['music', 'Music commands '],
    ['gifs', 'Gif commands '],
    ['other', 'random types of commands'],
    ['guild', 'guild/moderator related commands'],
    ['nsfw', 'nsfw 18+ related commands'],
  ['games', 'games related commands'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
	eval:false,	
  help: false,
		ping: false,
		prefix: true,
		commandState: false,
  unknownCommand: false,
  disableMentions: 'everyone',
  })
 .registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
  console.log('Logged in as: ${client.user.tag}');
  client.user.setActivity(`${prefix}help |  ${formatNumber(client.users.cache.size)} users`, {
    type: 'WATCHING',
    //url: 'https://github.com/6NCLegend9/primecloud'
  });
});

const { Client } = require("discord.js")
const { VultrexAPI } = require("vultrex.api");
 
client.vultrexApi = new VultrexAPI({
    client: client,
    auth: "86fd77a09618d799b9b46292a32822f5b30a69c7b81948b897f9d1627f92c91a28d4154415a3aabe",
    logger: true
});
 
//client.on("ready", () => {
//    console.log(`Logged in as:	client.logger.info(`[READY] Logged in as ${client.user.tag}! ID: ${client.user.id}`);`);
 //   setInterval(() => {
  //      client.vultrexApi.post();
 //   }, 6e5);
//});

  //client.on('guildMemberAdd', member => {
  //  const channel = member.guild.channels.cache.find(ch => ch.name === 'general'); // change this to the channel name you want to send the greeting to
 //   if (!channel) return;
 //   channel.send(`Welcome to **Cloud-Bots.js Support** ${member}!`);
//  });
client.login(token);
