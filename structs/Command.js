const Discord = require("discord.js")
const JackalClient = require("./JackalClient")

/**
 * 
 * @param {Discord.Message} message 
 * @param {string[]} args 
 * @param {JackalClient} client 
 */
function RunFunction(message, args, client) {

}

class Command {
    /**
     * @typedef {{name: string, description: string, run: RunFunction, dmOnly: boolean}} CommandOptions
     * @param {CommandOptions} opts 
     */
    constructor(opts) {
        this.name = opts.name
        this.description = opts.description
        this.run = opts.run
        this.dmOnly = opts.dmOnly
    }
}

module.exports = Command