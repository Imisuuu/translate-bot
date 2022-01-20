module.exports = {
    name: 'langs',
    description: 'Sends link to supported languages.',
    async execute (msg) {
        const text = '**List of supported languages**'
        const link = 'https://cloud.google.com/translate/docs/languages'
        let embed = client.commands.get('embed').execute('nodesc', text , link)
        await msg.channel.send({embeds: [embed]});
    }
}