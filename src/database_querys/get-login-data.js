const Database = require("../helpers/database")

const GetLoginData = async (email) => {
    return await Database().GetData("SELECT `email`, `senha` FROM `cadastros` WHERE email='"+email+"';")
}

module.exports = GetLoginData