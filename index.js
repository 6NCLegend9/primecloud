

const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');
const { formatNumber } = require('./util/Util');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 0.69,
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
const Client = require('./structures/Client');
const client = new CommandoClient({
 commandPrefix: prefix,
 owner: '357510381511639040' // change this to your Discord user ID
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music commands'],
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
 
client.on('voiceStateUpdate', async (___, newState) => {
  if (
    newState.member.user.bot &&
    !newState.channelID &&
    newState.guild.musicData.songDispatcher &&
    newState.member.user.id == client.user.id
  ) {
    newState.guild.musicData.queue.length = 0;
    newState.guild.musicData.songDispatcher.end();
  }
});

client.on('ready', () => {
  console.log('Logged in as: ${client.user.tag}');
  client.user.setActivity(`${prefix}help |  ${formatNumber(client.users.cache.size)} users`, {
    type: 'WATCHING',
    url: 'https://github.com/6NCLegend9/primecloud'
  });
});
client.login(token);
