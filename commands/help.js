const help = (msg) => {
    msg.channel.send(
        ` ***         HELP ***
        >>> The prefix is **${client.config.prefix}**
        **Commands: **
        - translate (${client.config.prefix}t or ${client.config.prefix}translate + content to translate)
        - getLanguage (${client.config.prefix}lang or ${client.config.prefix}getLanguage)
        - about (${client.config.prefix}about)
        - help (${client.config.prefix}h or ${client.config.prefix}help)
        - langs (${client.config.prefix}langs)
        - advanced translate (${client.config.prefix}ta or ${client.config.prefix}translateAdvanced + languages separated by a comma + content to translate)
        
        The author is **${client.config.author}**
        `)
}
module.exports = help;