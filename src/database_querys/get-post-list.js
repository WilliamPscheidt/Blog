const Database = require('../helpers/database')

const GetPostList = async (id) => {
    return await Database().GetData("SELECT * FROM `posts` ORDER BY id_post < 121 DESC LIMIT 20;")
}

module.exports = GetPostList