const Discord = require('discord.js');
const client = new Discord.Client({
    intents: ["GUILDS" ,"GUILD_MESSAGES"]
});
const translate = require('@vitalets/google-translate-api');
client.config = require('./config');
const ISO6391 = require('iso-639-1');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Simple bot that uses Google Translate API.');
});

client.on('messageCreate', (msg) => {
  if(msg.author.bot) return;
  if(msg.content.startsWith(client.config.prefix)){
      const [command, ...args] = msg.content
      .trim()
      .substring(client.config.prefix.length)
      .split(/\s+/);

      if (command === 't' || command === 'translate'){
        var string = args.join(' ');
        try {
            translate(string, {to: client.config.lang}).then(res => {
    
                //=> I speak English
                let from = ISO6391.getName(res.from.language.iso);
                msg.channel.send(`**Translated from ${from}: **${res.text}`);

                //=> nl
            }).catch(err => {
                console.error(err);
            });
        } catch (err){
            console.error(err);
        }
        
      } 
      else if (command === 'lang' || command === 'getLanguage'){
        msg.channel.send(`The language is **${ISO6391.getName(client.config.lang)}**.`); 
      } else if (command === 'about'){
          msg.channel.send(
`>>>Author of this bot is **Imisuuu**
Github: https://github.com/Imisuuu`
);
      } else if (command === 'help' || command === 'h'){
        msg.channel.send(
` ***         HELP ***
>>> The prefix is **${client.config.prefix}**
**Commands: **
- translate (${client.config.prefix}t or ${client.config.prefix}translate)
- getLanguage (${client.config.prefix}lang or ${client.config.prefix}getLanguage)
- about (${client.config.prefix}about)
- help (${client.config.prefix}h or ${client.config.prefix}help)

The author is **${client.config.author}**
`)
      }
  }
});

client.login(client.config.token);