const LoginDataValidation = require('../../useCase/login-data-validation')
const Close_API = require('../../helpers/closeApi')
const GetLoginData = require('../../database_querys/get-login-data')
const VerifyLoginDetails = require('../../useCase/verify-login-details')
const Token = require("../../helpers/token")

const Login = async (req, res) => {

    const TokenGenerated = () => Token().Generate({ name: data.name, email: data.email }, 3000)

    const data = { email, password } = req.body
    let LoginData;

    await LoginDataValidation(data).catch(error => {
        res.status(400).send({ error: error })
        Close_API()
    })

    await GetLoginData(data.email)
        .then((response) => {
            LoginData = response
        })

    if (!LoginData) {
        res.send({
            error: "User is not registered"
        })
        Close_API()
    }

    if (await VerifyLoginDetails(data.password, LoginData.senha)) {
        res.send({
            success: "Login Performed",
            email: data.email,
            token: TokenGenerated()
        })
    } else {
        res.send({
            error: "Invalid Data"
        })
    }
}

module.exports = Login