const Discord = require('discord.js');

const client = new Discord.Client();

const responseObject = {
  "ping": "pong"
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp"
};

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on("message", (message) => {
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
});

client.on('ready', () => {
  client.user.setGame('Hey')
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
