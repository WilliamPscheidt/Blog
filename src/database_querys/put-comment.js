const Database = require("../helpers/database")

const PutComment = async (postId, message, email) => {
    return await Database().InsertData("INSERT INTO `comentarios`(`id_post`, `email_autor`, `mensagem`) VALUES ('"+postId+"','"+email+"','"+message+"')")
}

module.exports = PutComment