module.exports = {
    name: 'info',
    aliases: ['information'],
    category: 'General',
    description: 'Shows the bots statistics',
    run: async (bot, message, args) => {
       let version = '0.0.2';
       if (args[0] && args[0] === 'version') {
           return message.channel.send(`Version: ${version}`);
       } else return message.channel.send("Incorrect Arguments");
    }
}
