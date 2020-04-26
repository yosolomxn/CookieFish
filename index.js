const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection

// Command handler properties, once you learn about an eval command,
// you can access these by bot.commands or bot.aliases

bot.on('ready', () =>{
  console.log('This bot is online!');
})

// It would be best to async "message" so you can use await.
// If you dont know async functions, feel free to search it up.

bot.on('message', async message => {
   // This is checking if the message is in a guild and not the bots DMs.
   // It is also checking if the user who triggered this event is a bot.
   if (!message.guild || message.author.bot) return;

   // Prefix! YAY
   const PREFIX = '!';

   // Your args variable is perfect, although imma break it down
  let args = message.content.slice(PREFIX.length).trim(' ').split(/ +/g)
  const cmd = args.shift().toLowerCase();
  // Slice it with the prefix's length, its better than substring.
  // Then we can trim it, removing any extra spaces.
  // And split it using REGEX, which is a much more reliable way.

  // Now I hate switch cases so I am going to make you a command handler.
  // You can copy and paste a file and rename the given args.

  // Now we execute the command if its found
 let command = bot.commands.get(cmd);
 if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  if (command) command.run(bot, message, args);
});

// These are event handlers, they make the bot work well..
// You dont need to worry about this.
require(`./handler/command.js`)(bot);

module.exports = {
    bot: bot
}

// To access the bot variable in the commands ^

// Keep this private! AT ALL TIMES!!
bot.login('Njc4NDY4MDU2NjYxMzYwNjUz.XkjOvA.ZxjCmUi-8Cn_ug_S9XvIdXM1GLM');
