module.exports = {
    name: 'about',
    description: 'About command.',
    async execute (msg) {
        const text = 
`Author of this bot is **Imisuuu**
Github: https://github.com/Imisuuu`
        let embed = client.commands.get('embed').execute('nodesc', '**About**', text)
        await msg.channel.send({embeds: [embed]})
    }
}