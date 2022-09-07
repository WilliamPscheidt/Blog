const VerifyData = require("../../useCase/register-data-validation")
const InserDatabaseData = require("../../database_querys/register-insert-data-query")
const Cryptography = require("../../helpers/cryptography")
const Token = require("../../helpers/token")
const Close_API = require('../../helpers/closeApi')
const Mailer = require("../../helpers/mailer")

const Register = async (req, res) => {
    const data = { name, lastname, email, password, repeatPassword } = req.body

    const token = () => Token().Generate({ name: data.name, email: data.email }, 3000)
    const hashedpassword = async () => await Cryptography().Hash(password)

    await VerifyData(data).catch(error => {
        res.status(400).send({ error: error })
        Close_API()
    })

    await InserDatabaseData(data, await hashedpassword()).catch(error => {
        res.status(400).send({ error: error })
        Close_API()
    })

    await Mailer(data.email, "Account Created", "Your account is Created", "<b>Account Created</b>").catch((error) => {
        console.log(error)
    })

    res.status(201).send({
        success: "User Registered",
        accessToken: token()
    })
}

module.exports = Register