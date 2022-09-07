const Database = require('../helpers/database')

const GetPostData = async (id) => {
    return await Database().GetData("SELECT `id_post`, `conteudo` FROM `posts` WHERE id_post='"+id+"';")
}

module.exports = GetPostData