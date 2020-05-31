const { Command } = require('discord.js-commando');

module.exports = class UptimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'update',
      aliases: [ 'update'],
      memberName: 'update',
      group: 'other',
      description: "Replies the last update."
    });
  }
  run(message) {
    var seconds = parseInt((this.client.uptime / 1000) % 60),
      minutes = parseInt((this.client.uptime / (1000 * 60)) % 60),
      hours = parseInt((this.client.uptime / (1000 * 60 * 60)) % 24);
    // prettier-ignore
    hours = (hours < 10) ? ('0' + hours) : hours;
    // prettier-ignore
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;
    // prettier-ignore
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;
    return message.say(
      `my last was update **${hours}** hours, **${minutes}** minutes and **${seconds}** seconds ago!`
    );
  }
};
