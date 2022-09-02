const VerifyData = require("../../useCase/register-data-validation")
const InserDatabaseData = require("../../database_querys/register-insert-data-query")
const Cryptography = require("../../helpers/cryptography")
const Token = require("../../helpers/token")

module.exports = async function Register(req, res) {

    let data = { name, lastname, email, password } = req.body
    
    await VerifyData(data).catch((error) => {
        res.send({
            error: error
        })
        throw "Error in data Validation"
    })

    let hashedPassword = await Cryptography().Hash(password)

    await InserDatabaseData(data, hashedPassword).catch((error) => {
        res.send({
            error: error
        })
        throw "Error in data insertion"
    })

    const token = Token().Generate({name: data.name, email: data.email}, 3000)

    res.send({
        status: "User Registered",
        accessToken: token
    })
}

