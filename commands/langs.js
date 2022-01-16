const langs = async (msg, MessageAttachment) => {
    const attachment = new MessageAttachment("images/languages.png");
    await msg.channel.send({ files: [attachment] });
}
module.exports = langs;