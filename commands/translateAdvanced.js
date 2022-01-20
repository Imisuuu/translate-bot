const ISO6391 = require('iso-639-1');
const translate = require('@vitalets/google-translate-api');

module.exports = {
    name: 'translateAdv',
    description: 'Translates to unlimited languages at once.',
    async execute (args, msg) {
        if (args.length == 0) return msg.reply('args.length == 0');
        let languages;
        try {
            languages = args[0].split(',');
        } catch(err){
            console.error(err);
        }
        args.shift();
        let string = args.join(' ');
        let embed = client.commands.get('embed').execute('*Here you go!*');
        let mes = await msg.channel.send({embeds: [embed]})
        for (let i=0; i<languages.length;i++){
            translate(string, {to: languages[i]}).then(res => {
                let langName = languages[i];
                if(languages[i].length < 4){
                    langName = ISO6391.getName(languages[i]);
                }
                client.commands.get('embed').edit(embed, mes, 'nodesc',`*${langName}*`, res.text);
                // msg.channel.send('*`In ' + langName + '`*')
                // msg.channel.send(res.text);             
            }).catch(error => {
                msg.reply(`This language is not supported or misspelled. Use ${client.config.prefix}langs command.`);
            })
        }
    }
}