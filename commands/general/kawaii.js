module.exports = {
    name: 'kawaii',
    aliases: ['KawaiiBot'],
    category: 'General',
    description: 'Handles general functions of old KawaiiBot',
    run: async (bot, message, args) =>
    {  // Sets max range of random roll to 10
       if (args[0] && args[0] === '+roll10')
       {
          let roll = randomNumber(1, 10);
          return message.channel.send(`Roll: ${roll}`);
       } else return message.channel.send("Sorry can you type that again!");
       // Sets max range of random roll to 20
       if (args[0] && args[0] === '+roll20')
       {
          let roll = randomNumber(1, 20);
          return message.channel.send(`Roll: ${roll}`);
       } else return message.channel.send("Sorry can you type that again!");
       // Chip pats user for affection
       if (args[0] && args[0] === '+pat')
       {
          return message.channel.send(`Chip gently pats your head!`);
       } else return message.channel.send("Sorry can you type that again!");
       // Chip hugs user for affection
       if (args[0] && args[0] === '+hug')
       {
          return message.channel.send(`Chip gives you a giant bear hug!`);
       } else return message.channel.send("Sorry can you type that again!");
       // Chip kisses user for affection
       if (args[0] && args[0] === '+kiss')
       {
          return message.channel.send(`Chip kisses you on the cheeck!`);
       } else return message.channel.send("Sorry can you type that again!");
    }
}
