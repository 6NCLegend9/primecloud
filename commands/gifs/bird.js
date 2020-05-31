const fetch = require('node-fetch');
const { tenorAPI } = require('../../config.json');
const { Command } = require('discord.js-commando');

module.exports = class BirdCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bird',
      aliases: ['birds', 'burb'],
      group: 'gifs',
      memberName: 'bird',
      description: 'Replies with a cute cat gif',
      throttling: {
        usages: 2,
        duration: 10
      }
    });
  }

  run(message) {
    fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=bird&limit=1`)
      .then(res => res.json())
      .then(json => message.say(json.results[0].url))
      .catch(err => {
        message.say('Request to find a bird failed :(');
        return console.error(err);
      });
  }
};
