var jwt = require('jsonwebtoken');

const Token = () =>{

    const Generate = (data, expires) => {
        const configurations = require("../configurations/configurations.json")
        return jwt.sign({data}, configurations.token.default_key, {expiresIn: expires})
    }

    const Verify = (token) => {
        const configurations = require("../configurations/configurations.json")
    
        let funcResponse;

        jwt.verify(token, configurations.token.default_key, (err, response) => {
            if(err) {
                throw "Error: Invalid Token"
            }
            funcResponse = response
        })

        return funcResponse
    }

    return {
        Generate,
        Verify
    }
}

module.exports = Token