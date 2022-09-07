const Token = require('../helpers/token')

const VerifyIfUserIsLoggedIn = async (token) => {
    return await Token().Verify(token)
}

module.exports = VerifyIfUserIsLoggedIn