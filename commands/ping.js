const Command = require("../structs/Command")

module.exports = new Command({
    name: "ping",
    description: "Shows ping!",

    async run(message, args, client) {
        const msg = await message.reply(`Ping: ${client.ws.ping} ms`)
        msg.edit(`Ping: ${client.ws.ping} ms.\nMessage ping: ${msg.createdTimestamp - message.createdTimestamp}`)
    }
})