const Discord = require('discord.js')
const bot = new Discord.Client();
const client = new Discord.Client();
const fs = require("fs");
const ytdl = require("ytdl-core");
var errormsg_noperms = [':x: ```Markdown\n< FoozBallKing Bot >\n<Error found!>\n[Error]: You have insufficient permissions\n\nYou must be the bot owner to do that command!\n```']
var errormsg_voice = [':x: ```Markdown\n< FoozBallKing Bot >\n<Error found!>\n[Error]: Timed out\nThe bot was unable to join the voice channel.\n```']
var errormsg_play = [':x: ```Markdown\n< FoozBallKing Bot >\n<Error found!>\n[Error]: No music files found in folder "C:\\Users\\ASUS\\Downloads"\nThe bot was unable to play the song.\n```']
var errormsg_argserr = [':x: ```Markdown\n< FoozBallKing Bot >\n<Error found!>\n[Error]: Not enough arguments!\n\n# The bot was unable to play the song.\n```']

// /\ Do not touch. This is important for the entire bot.
// If you got this code, edit it out as much as you want.

var prefix = "|"
// Change to prefix

var bot_name = "FoozBallKing Bot v2.1"
// Change to bot's name

var build_number = "Build 30"
// Change to your build number

var yt_api_key = "GAPI_KEY"
// Change to your Google API key

var bot_id = "292053219528671233"
// Change to your bot's Client ID

var version_bot = 'Build 30 (Built in 14/7/2017)'

// \/ Change this ID to your 18 digit number ID. Use Developer Mode in Discord.
var owner_id = "222955939714695168"
var owner_username = "IndoHQ Blu YT✓ᵛᵉʳᶦᶠᶦᵉᵈ#3035"
// Change to your name and 4 digit ID

var owner_id_2 = ['222955939714695168','236251438685093889','315653896645378048','209214117649711113','245369326322843649','237577551436972033']

// Invite link: https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=0
// This is the format for an invite link.
// For the FBK Bot updates, join https://discord.gg/8h2fJQG

var token = 'BOT_TOKEN'
// Change to your bot's token

var client_id = '292053219528671233'
// Change to your bot's Client ID (Yes for bot_id too)


// \/ This will be for commands. Edit them as much as you want.
// To add a command, follow what it says.

bot.on('message', (message) => {

    if(message.content.startsWith(prefix + 'botinfox')) {
        message.channel.send('Hey there! I am `FoozBallKing Bot v2.1`! I was coded by @IndoHQ Blu YT✓ᵛᵉʳᶦᶠᶦᵉᵈ and coded using `Discord.js` and `Visual Studio Code`! Thanks to Adam Gaskins Discord Bot tutorial, I would not have been made!');
        console.log(message.author + ' has typed "|botinfox"!')
    
    }

    if(message.content.startsWith(prefix + 'help')) {
        message.channel.send('```Markdown\n< FoozBallKing Bot v2.1 Help >\n[1]: General\n[' + prefix + 'help]: Shows this command!\n[' + prefix + 'youtube]: Shows YT channels of TheFoozBallTable staff!\n[' + prefix + 'botspecs]: Shows the specs of the bot!\n[' + prefix + 'uptime]: Shows the uptime of the bot in microseconds!\n[' + prefix + 'botinfox]: Shows shorter bot info\n\n[2]: Owner Only\n[' + prefix + 'shutdown]: Shuts down the bot.\n[' + prefix + '|mtcmode]: Sets the bot in Maintenance Mode.\n< TO BE CONTINUED >\n```\n\nFor help, join https://discord.gg/8h2fJQG')
        console.log(message.author + ' has typed "|help"!')

    }

	// START MUSIC
	
    if(message.content.startsWith(prefix + 'play')) {
		message.channel.send(errormsg_play)
		message.channel.send('Reason of error: Incomplete')
		console.log(message.author + ' has tried to play music, but the code is not finished!')
	}
	
	// END MUSIC
    
    if(message.content.startsWith(prefix + 'youtube')) {
        message.channel.send('Here you go! Links: https://www.youtube.com/channel/UCfMwlVqas3DZIml24FXY7rw https://www.youtube.com/user/dragons99990 https://www.youtube.com/channel/UCArKd8rTTWvdK7gA7E3TfVw https://www.youtube.com/channel/UCRFcXEpywYabEVvoKLGdJBw')
        console.log(message.author + ' has typed "|youtube"!')
    }

    if(message.content.startsWith(prefix + 'shutdown')) {
        if (owner_id == String(message.author.id)) {
            // Shutdown here...
            message.channel.send(':wave: Shutting down... (Code help by Der, the developer of NanoBot)')
            console.log(message.author + ' is now shutting down the bot!')
            bot.user.setGame('Shutting down...')
            bot.user.setStatus('invisible')
            bot.destroy()
            console.log('The bot is now shut down.')
            console.clear
        } else {
            // No perms
            message.channel.send(errormsg_noperms)
            console.log(message.author + ' tried shutting down the bot, but has no permission!')
    }
}
    
	if(message.content.startsWith(prefix + 'restart')) {
        if (owner_id == String(message.author.id)) {
            // Restart here...
            message.channel.send(':wave: Restarting...')
            console.log(message.author + ' is now restarting the bot!')
            bot.user.setGame('Restarting...')
            bot.user.setStatus('invisible')
            bot.destroy()
            console.log('The bot is now shut down. Attempting to log back in...')
            bot.login(token)
			message.channel.send(':heavy_check_mark: The bot has successfully restarted.')
			console.log('The bot has successfully restarted.')
        } else {
            // No perms
            message.channel.send(errormsg_noperms)
            console.log(message.author + ' tried restarting the bot, but has no permission!')
    }
}

// TODO: Add Restart command

    if(message.content.startsWith(prefix + 'status1')) {
        if(owner_id == String(message.author.id)) {
            bot.user.setGame('Type ' + prefix + 'help for help!')
            message.channel.send('Set!')
            console.log(message.author + ' has set the status for ' + bot_name + ' to Status 1!')
        } else {
            message.channel.send(errormsg_noperms)
            console.log(message.author + ' tried setting the bot status, but has no permission!')
        }
    }

    if(message.content.startsWith(prefix + 'status2')) {
		if(owner_id == String(message.author.id)) {
			bot.user.setGame('Dragons is bot sitting me... And I mean sitting on me... Ow...')
			message.channel.send('**Ow...** Set....')
			console.log(message.author + ' has set the status for ' + bot_name + ' to Status 2!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' tried to set the bot status, but has no permission!')
		}
	}

    if(message.content.startsWith(prefix + 'mtcmode')) {
		if(owner_id == String(message.author.id)) {
			bot.user.setGame('Maintenance')
			bot.user.setStatus('dnd')
			message.channel.send('Set to Maintenance Mode!')
			console.log(message.author + ' has changed ' + bot_name + ' to Maintenance Mode!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' has tried changing the bot to Maintenance Mode, but has no permission!')
		}
	}

    if(message.content.startsWith(prefix + 'normalmode')) {
		if(owner_id == String(message.author.id)) {
			bot.user.setGame('Type |help for help!')
			bot.user.setStatus('online')
			message.channel.send('Set to Normal Mode!')
			console.log(message.author + ' has changed FBK Bot to Normal Mode!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' has attempted to change FBK Bot to Normal Mode, but has no permission!')
		}
	}
    // TODO: Add a set game command

    if(message.content.startsWith(prefix + 'setonline')) {
		if(owner_id == String(message.author.id)) {
			bot.user.setStatus('online')
			message.channel.send('Status set to Online!')
			console.log(message.author + ' has set the bot to Online!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' tried to change the bot status, but has no permission!')
		}
	}

    if(message.content.startsWith(prefix + 'setidle')) {
        if(owner_id == String(message.author.id)) {
			bot.user.setStatus('idle')
			message.channel.send('Status set to Idle!')
			console.log(message.author + ' has set the bot to idle!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' tried to change the bot status, but has no permission!')
		}
	}
	
	if(message.content.startsWith(prefix + 'setdnd')) {
        if(owner_id == String(message.author.id)) {
			bot.user.setStatus('dnd')
			message.channel.send('Status set to DND!')
			console.log(message.author + ' has set the bot to DND!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' tried to change the bot status, but has no permission!')
		}
	}

    if(message.content.startsWith(prefix + 'setinvis')) {
        if(owner_id == String(message.author.id)) {
			bot.user.setStatus('invisible')
			message.channel.send('Status set to Invisible!')
			console.log(message.author + ' has set the bot to Invisible!')
		} else {
			message.channel.send(errormsg_noperms)
			console.log(message.author + ' tried to change the bot status, but has no permission!')
		}
	}


    // \/ This is to show what is being used. Edit them to what your specs are. Do not touch the library or the coded with thing. Don't touch the errors and uptime thing either.

    if(message.content.startsWith(prefix + 'botspecs')) {
        message.channel.send('```Markdown\n< FoozBallKing Bot v2.1 ' + build_number + ' >\n[Library]: Discord.JS\n[Coded with]: Node.JS and Visual Studio Code, Notepad++\n[Coded by]: IndoHQ Blu YT✓ᵛᵉʳᶦᶠᶦᵉᵈ\n[Help by]: Der✓ (Developer of NanoBot)\n[Laptop]: ASUS EeePC Seashell 1015PEM\n[Core]: Intel Atom N550 (Dual Core)\n[OS]: Windows 7 Starter\n[RAM usage]: unknown MB / 1024 MB\n[Total RAM]: 1 GB\n[Internet]: Maxis Fibre Internet 20 Mbps\n[Internet Utilization]: unknown\n[Errors]: unknown\n[Uptime (MicroSeconds)]: ' + bot.uptime + '\n```')
        console.log(message.author + ' has typed "|botspecs"!')
    }

    if(message.content.startsWith(prefix + 'uptime')) {
        message.channel.send('Sending uptime information in Console and chat!')
        console.log(message.author + ' has requested for Uptime stats! Sending...')
        console.log('Uptime: ' + bot.uptime)
        message.channel.send('Uptime stats: `' + bot.uptime + '`')
        console.log('Uptime information sent!')
    }
	
	if(message.content.startsWith(prefix + 'sparta')) {
		message.channel.send('THIS!\n**IS!**\n***SPARTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!***\nXD')
		console.log(message.author + ' has called for SPARTAAAAAAAAA!!!')
	}

    } )

bot.on('ready', () => {
        bot.user.setStatus('online');
        bot.user.setGame('Type ' + prefix + 'help for help!');
        console.clear
        console.log('--------------------------')
		console.log('FBK Bot version 2.1 is now online.')
        console.log('The current prefix is "' + prefix + '".')
        console.log('----------------------------')
        console.log('Make sure to update your bot frequently! Keep backups so you would not have to go through the trouble of having to do it all over again.')
		console.log('To get the latest updates, join https://discord.gg/8h2fJQG')
		console.log('')
		console.log('')
		console.log('Invite link: https://discordapp.com/oauth2/authorize?client_id=' + client_id + '&scope=bot&permissions=0')
		console.log('Owner: ' + owner_username + ' with ID ' + owner_id)
		console.log('Your GAPI token is: ' + yt_api_key)
});

// \/ This will be to log in your bot. Insert the bot token into "BOT_TOKEN"

bot.login(token);

// \/ This is unused. Don't ask why.

    function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else {
                console.log(`Logged in. Token: ${token}`);
        }
    }   

// TODO LIST
// Add |eval (Owner only)
// Add |errors (Owner only)
// Update Owner commands (Halfway)
// Add music
