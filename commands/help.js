module.exports = {
    name: 'help',
    description: 'Help command',
    async execute (msg) {
        let text = 
`**Commands: **
||${client.config.prefix}translate/t|| : {text} - Translates text to ${client.config.lang}
||${client.config.prefix}translateAdvanced/ta|| : e.g.{en,es,fr...}/{english,spanish,french} {text} - Translates text
||${client.config.prefix}langs|| : Sends link to supported languages.
||${client.config.prefix}about|| : Sends information about author.

The author is **Imisuuu😊**`

        let embed = client.commands.get('embed').execute('nodesc', '** HELP **', text)
        await msg.channel.send({embeds: [embed]});
    }
}