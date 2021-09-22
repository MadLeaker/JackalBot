const DB = require("quick.db")
const Auth = require("./auth")

class Account {
    static async GetQuests(authorId) {
        const {loginInfo} = DB.get(authorId)
        try {
            const resp = await Auth.makeRequest(`https://fortnite-public-service-prod11.ol.epicgames.com/fortnite/api/game/v2/profile/${loginInfo.account_id}/client/ClientQuestLogin?profileId=athena&rvn=-1`, "POST", {
            contentType: "application/json",
            tokenType: "bearer",
            token: loginInfo.access_token,
            body: {}
            })
            return resp
        }
        catch(e) {
            return e.response.data
        }
        
        
    }
}

module.exports = Account