const {Client, Collection} = require('discord.js');
global.client = new Client({
    intents: ["GUILDS" ,"GUILD_MESSAGES"]
});
client.config = require('./config');

const commands = require('../handlers/commands')


client.on('ready', () => {
  commands(Collection);
  client.commands.get('ready').execute();
});

client.on('messageCreate', async (msg) => {
  if(msg.author.bot) return;
  if(!msg.content.startsWith(client.config.prefix)) return;
      const [command, ...args] = msg.content
      .trim()
      .substring(client.config.prefix.length)
      .split(/\s+/);

      if (command === 't' || command === 'translate')
      {
        client.commands.get('translate').execute(args, msg);
      } 
      else if (command === 'ta' || command === 'translateAdvanced')
      {
        client.commands.get('translateAdv').execute(args, msg);

      } 
      else if (command === 'about')
      {
        client.commands.get('about').execute(msg);
      } 
      else if (command === 'help' || command === 'h')
      {
        client.commands.get('help').execute(msg);
      }
      else if (command === 'langs')
      {
        client.commands.get('langs').execute(msg);
      }
});

client.login(client.config.token);