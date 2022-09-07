const Database = require("../helpers/database")

const PutPost = async (author_email, content) => {
    return await Database().InsertData("INSERT INTO `posts`(`email_autor`, `conteudo`) VALUES ('"+author_email+"','"+content+"')")
}

module.exports = PutPost