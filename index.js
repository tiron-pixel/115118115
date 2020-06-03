const Discord = require ('discord.js');
const bot = new Discord.Client()

const token = 'NzE3ODE2MDUzOTU0MTE3Njcz.Xtf0xg.usF1Cx0l0VonjI9uqLwKqytNwGg';

const PREFIX = '!';

var version = '1.0.0'

bot.on('ready', () =>{
    console.log('Bot is Online (Press CTRL+C to shut it down!');
    bot.user.setActivity('NightLight MC')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('PONG!')
            break;
        case 'ip':
            message.channel.send('The IP is nightlightmc.aternos.me! Type "!online" for information to see if the server is online')
            break;
        case 'online':
            message.channel.send('See if the server is online here: https://nightlightmc.aternos.me/ If it is offline, message a server owner or a server manager to put it online!')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Please enter a number for how many messages you want to delete! Eg. "clear 5" will delete 5 messages')
            message.channel.bulkDelete(args[1])
         break;

    }
})

bot.login(token);