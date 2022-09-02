const VerifyData = require("../../useCase/register-data-validation")
const InserDatabaseData = require("../../database_querys/register-insert-data-query")
const Cryptography = require("../../helpers/cryptography")
const Token = require("../../helpers/token")
const SetHeader = require("../../helpers/setheader")
const Close_API = require('../../helpers/closeApi')

const Register = async (req, res) => {
    SetHeader(res)

    const data = { name, lastname, email, password, repeatPassword } = req.body

    const token = () => Token().Generate({name: data.name, email: data.email}, 3000)
    const hashedpassword = async () => await Cryptography().Hash(password)
    
    await VerifyData(data).catch(error => { res.status(400).send({ error: error} )
        Close_API()
    })

    await InserDatabaseData(data, await hashedpassword()).catch(error => { res.status(400).send({error: error} )
        Close_API()
    })

    res.status(201).send({
        status: "User Registered",
        accessToken: token()
    })
    Close_API()
}

module.exports = Register