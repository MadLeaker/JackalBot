const axios = require("axios")
const ADMZip = require("adm-zip")
const Command = require("../structs/Command")
const { MessageAttachment } = require("discord.js")


module.exports = new Command({
    name: "krita",
    description: "Extracts the image from the kra file!",
    async run(message, args, client) {
        let file = message.attachments.first()
        if(file && file.name.endsWith(".kra")) {
            let content = await axios.default.get(file.url, {responseType: "arraybuffer"})
            let zip = new ADMZip(content.data)
            let image = zip.getEntry("mergedimage.png")
            if(image) {
                let imageContent = image.getData()
                let attachment = new MessageAttachment(imageContent)
                attachment.setName("Image.png")
                message.reply({content: "Here's the image!", files: [attachment]})
            }
        }
    },
    dmOnly: false
})