module.exports = {
    name: 'clear',
    aliases: ['purge', 'prune'],
    category: 'Moderation',
    description: 'Clears the chat with any given integer.',
    run: async (bot, message, args) => {
       let amount = parseInt(args[0]);
       if (!amount) return message.channel.send("Please supply a valid number.");
       if (amount) message.channel.bulkDelete(amount).then(() => message.channel.send(`**${amount}** messages has been cleared.`))
    }
}
