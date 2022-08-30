const DataValidation = require('../../useCase/register-data-validation')

module.exports = async function Register(req, res) {
    try {
        VerifyData(req, res)
    } catch (error) {
        console.log(error)
        res.send({
            error: error
        })
    }   
}

const VerifyData = (req) => {
    const data = { name, lastname, email, password } = req.body
    return DataValidation(data)
}