const Discord = require("discord.js")
const {Intents, Client, Collection} = Discord
const Command = require("./Command")


class JackalClient extends Client {
    constructor(options) {
        const myIntents = new Intents()
        myIntents.add(["DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING"])
        super({intents: myIntents, partials: ["CHANNEL"]})
        /**
         * @type {Collection<string, Command>}
         */
        this.commands = new Collection()
    }
}

module.exports = JackalClient