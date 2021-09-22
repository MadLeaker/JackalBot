const axios = require("axios")

class Auth {

    /**
     * 
     * @param {string} code 
     */
    static async useCode(code) {
        let data = new URLSearchParams()
        data.append("grant_type", "authorization_code")
        data.append("code", code)
        try {
            const resp = await axios.post("https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token", data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": "basic M2Y2OWU1NmM3NjQ5NDkyYzhjYzI5ZjFhZjA4YThhMTI6YjUxZWU5Y2IxMjIzNGY1MGE2OWVmYTY3ZWY1MzgxMmU="
                }
            })
            if(resp.status == 200) {
                return resp.data
            }
        }
        catch(e) {
            return e.response.data
        }
        
    }
    /**
     * 
     * @param {string} url 
     * @param {string} method 
     * @param {*} opts 
     */
    static async makeRequest(url, method, opts) {
        try {
            const resp = await axios(url, {
                method: method,
                data: opts.body,
                headers: {
                    "Content-Type": opts.contentType,
                    "Authorization": opts.tokenType + " " + opts.token
                }
            })
            if(resp.statusText == "OK")
                return resp.data 
        }
        catch(e) {
            return e.response.data
        }
               
    }
}

module.exports = Auth