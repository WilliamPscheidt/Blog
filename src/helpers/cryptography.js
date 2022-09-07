const bcrypt = require("bcrypt")
const configurations = require("../configurations/configurations.json")

const Cryptography = () => {

    const Hash = async (password) => {
        return await bcrypt.hash(password, configurations.cryptography.salt)
    }

    const Verify = async (password, hash) => {
        return bcrypt.compare(password, hash).catch((error) => {
            throw error
        })
    }

    return {
        Hash,
        Verify
    }
}

module.exports = Cryptography
