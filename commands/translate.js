const ISO6391 = require('iso-639-1');
const translate = require('@vitalets/google-translate-api');

module.exports = {
    name: 'translate',
    description: 'Translates to languages set in config file.',
    execute (args, msg) {
        var string = args.join(' ');
        translate(string, {to: client.config.lang}).then(res => {
            let to = ISO6391.getName(client.config.lang);
            let embed = client.commands.get('embed').execute('nodesc', `Translated to ${to}`, res.text);
            msg.channel.send({embeds: [embed]})
        }).catch(err => {
            console.error(err);
        });
    }
}