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
                console.log(args);
    
                console.log(res.text);
                //=> I speak English
                msg.channel.send(res.text)
                res.pronunciation
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
      } 
  }
});

client.login(client.config.token);