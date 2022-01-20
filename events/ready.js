const ISO6391 = require('iso-639-1');

module.exports = {
  name: 'ready',
  description: 'Ready command.',
  execute () {
    console.log(`${client.user.tag} has logged in. 
    Ready on ${client.guilds.cache.size} servers. 
    For a total of ${client.users.cache.size} users.`);
    client.user.setActivity(`Currently translating to ${ISO6391.getName(client.config.lang)}`);
  }
}