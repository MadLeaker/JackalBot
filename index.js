require("dotenv").config()
const JackalClient = require("./structs/JackalClient")
const TOKEN = process.env.DISCORD_TOKEN

const PREFIX = "?"

const bot = new JackalClient()

const fs = require("fs")

const files = fs.readdirSync("./commands").filter(f => f.endsWith(".js"))

for(let i = 0; i < files.length; i++) {
    const command = require(`./commands/${files[i]}`)
    bot.commands.set(command.name, command)
}


bot.on("ready", () => {
    console.log(bot.user.username + " is ready!")
})

bot.on("messageCreate", (msg) => {
    if(!msg.content.startsWith(PREFIX)) return

    const args = msg.content.substring(PREFIX.length).split(/ +/)
    const command = bot.commands.find(cmd => cmd.name == args[0])
    if(!command) return msg.reply(`${args[0]} isn't a command!`)
    if(command.dmOnly) {
        if(msg.channel.type === "DM") {
            command.run(msg, args, bot)
        }
    }
    else {
        if(msg.channel.type === "GUILD_TEXT") {
            command.run(msg, args, bot)
        }
    }
})

bot.login(TOKEN)



