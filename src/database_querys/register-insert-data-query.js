const Database = require("../helpers/database")

const InserDatabaseData = async (data, hashedPassword) => {
    return await Database().InsertData("INSERT INTO `cadastros`(`nome`, `sobrenome`, `email`, `senha`) VALUES ('" + data.name + "','" + data.lastname + "','" + data.email + "','" + hashedPassword + "')")
}

module.exports = InserDatabaseData