const {Client, MessageAttachment} = require('discord.js');
global.client = new Client({
    intents: ["GUILDS" ,"GUILD_MESSAGES"]
});
client.config = require('./config');


const translation = require('../commands/translate');
const translateAdv = require('../commands/translateAdvanced');
const about = require('../commands/about');
const help = require('../commands/help');
const langs = require('../commands/langs');
const ready = require('../events/ready');

client.on('ready', () => {
  ready();
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
        translation(args, msg);
      } 
      else if (command === 'ta' || command === 'translateAdvanced')
      {
        translateAdv(args, msg);

      } else if (command === 'about')
      {
        about(msg);
      } else if (command === 'help' || command === 'h')
      {
        help(msg);
      }
      else if (command === 'langs')
      {
        langs(msg, MessageAttachment);
      }
});

client.login(client.config.token);