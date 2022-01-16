const ISO6391 = require('iso-639-1');
const translate = require('@vitalets/google-translate-api');

const translateAdv = (args, msg) => {
    if (args.length == 0) return msg.reply('args.length == 0');
    let languages;
    try {
        languages = args[0].split(',');
    } catch(err){
        console.error(err);
    }
        args.shift();
    let string = args.join(' ');
    for (let i=0; i<languages.length;i++){
        translate(string, {to: languages[i]}).then(res => {
            let langName = languages[i];
            if(languages[i].length < 4){
                langName = ISO6391.getName(languages[i]);
            }
            msg.channel.send('*`In ' + langName + '`*')
            msg.channel.send(res.text);             
        }).catch(error => {
            console.log("oh no! our table! it's broken! ", error);
        })
    }
}
module.exports = translateAdv;