module.exports = {
    name: 'kawaii',
    aliases: ['KawaiiBot'],
    category: 'General',
    description: 'Handles general functions of old KawaiiBot',
    run: async (bot, message, args) =>
    {
      /*
      let roll = parseInt(args[0]);
      if(!amount) return message.reply('Please enter the range of your roll');
      if(amount > 20) return message.reply('You can only roll up to 20 max')
      if(amount < 0) return message.reply('Yes you can roll a negative number')

      try {
        if(amount && amount == 10) {
          var Roll = randomNumber(1, 10);
          message.channel.send(new MessageEmbed()
              .setDescription(`**Roll**: ${Roll}`))
        }
      }
      */
      // Sets max range of random roll to 10
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
