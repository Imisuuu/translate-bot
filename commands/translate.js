const ISO6391 = require('iso-639-1');
const translate = require('@vitalets/google-translate-api');

const translation = (args, msg) => {
    var string = args.join(' ');
        try {
            translate(string, {to: client.config.lang}).then(res => {
                let from = ISO6391.getName(res.from.language.iso);
                msg.channel.send(`**Translated from ${from}: **${res.text}`);
            }).catch(err => {
                console.error(err);
            });
        } catch (err){
            console.error(err);
        }
}

module.exports = translation;