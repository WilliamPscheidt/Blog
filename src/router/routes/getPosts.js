const GetPostList = require('../../database_querys/get-post-list')

const GetPosts = async (req, res) => {

    let data = await GetPostList()

    console.log(data)

    res.send({
        test: data
    })
}

module.exports = GetPosts