const Discord = require(discord.js');
const client = new Discord.Client();

client.login("Njc4NDY4MDU2NjYxMzYwNjUz.XkjOvA.ZxjCmUi-8Cn_ug_S9XvIdXM1GLM");

client.on('ready', ()=>{
  console.log("The bot is logged in!");
});

client.on('message', message => {
  if(message.author.bot)
    return;

  if(message.content.toLowerCase() === 'hello')
    message.channel.send("Hey!");
});
