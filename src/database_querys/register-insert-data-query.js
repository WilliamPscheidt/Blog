const Database = require("../helpers/database")

module.exports = async function InserDatabaseData(data, hashedPassword) {
    return await Database().InsertData("INSERT INTO `cadastros`(`nome`, `sobrenome`, `email`, `senha`) VALUES ('" + data.name + "','" + data.lastname + "','" + data.email + "','" + hashedPassword + "')")
}