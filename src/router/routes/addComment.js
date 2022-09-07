const VerifyLogin = require('../../useCase/verify-if-user-logged')
const GetPostData = require('../../database_querys/get-post-data-for-verification')
const Close_API = require('../../helpers/closeApi')
const PutComment = require('../../database_querys/put-comment')

const AddComment = async (req, res) => {

    const data = {accessToken, postId, comment} = req.body
    let VerifyToken;

    await VerifyLogin(data.accessToken).then((result) => {
        VerifyToken = result
    }).catch((error) => {
        res.send({
            error: error
        })
        Close_API()
    })

    const postData = await GetPostData(data.postId)

    if(!postData) {
        res.send({
            error: "Post not found"
        })
        Close_API() 
    }

    await PutComment(postData.id_post, data.comment, VerifyToken.data.email)

    res.send({
        success: "Comment added"
    })
}

module.exports = AddComment