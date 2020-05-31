const fetch = require('node-fetch');
const { tenorAPI } = require('../../config.json');
const { Command } = require('discord.js-commando');

module.exports = class PugCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pug',
      group: 'gifs',
      memberName: 'gifs',
      description: 'Replies with a pug cat gif',
      throttling: {
        usages: 2,
        duration: 10
      }
    });
  }

  run(message) {
    fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=pug&limit=1`)
      .then(res => res.json())
      .then(json => message.say(json.results[0].url))
      .catch(err => {
        message.say('Request to find a kitty failed :(');
        return console.error(err);
      });
  }
};
