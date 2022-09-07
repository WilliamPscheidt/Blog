const PasswordCompare = require('../helpers/cryptography') 

const VerifyLoginDetails = async (password, hashedPassword) => {
    return await PasswordCompare().Verify(password, hashedPassword) == false ? false : true
}

module.exports = VerifyLoginDetails