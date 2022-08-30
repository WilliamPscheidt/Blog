const bcrypt = require("bcrypt")
const configurations = require("../configurations/configurations.json")

module.exports = function Cryptography() {

    async function Hash(password) {
        return await bcrypt.hash(password, configurations.cryptography.salt)
    }

    async function Verify(password, hash) {
        return bcrypt.compare(password, hash)
    }

    return {
        Hash,
        Verify
    }
}
