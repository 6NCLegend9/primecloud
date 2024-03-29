const fetch = require('node-fetch');
const { tenorAPI } = require('../../config.json');
const { Command } = require('discord.js-commando');

module.exports = class DogCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'dog',
      aliases: ['dogs', 'doggo'],
      group: 'gifs',
      memberName: 'dog',
      description: 'Replies with a cute dog gif',
      throttling: {
        usages: 2,
        duration: 10
      }
    });
  }

  run(message) {
    fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=dog&limit=1`)
      .then(res => res.json())
      .then(json => message.say(json.results[0].url))
      .catch(err => {
        message.say('Request to find a doggo failed :(');
        return console.error(err);
      });
  }
};
