const VerifyIfUserIsLoggedIn = require('../../useCase/verify-if-user-logged')
const Close_API = require('../../helpers/closeApi')
const PutPost = require('../../database_querys/put-post')
const VerifyPostData = require('../../useCase/verify-put-post-data')

const CreatePost = async (req, res) => {

    const data = { accessToken, email, content } = req.body
    let VerifyToken;

    await VerifyPostData(data).catch(error => {
        res.status(400).send({ error: error })
        Close_API()
    })

    await VerifyIfUserIsLoggedIn(data.accessToken, email).then((result) => {
        VerifyToken = result
    }).catch((error) => {
        res.send({
            error: error
        })
        Close_API()
    })

    if (data.email != VerifyToken.data.email) {
        res.send({
            error: "You are not logged in"
        })
        Close_API()
    }

    await PutPost(VerifyToken.data.email, data.content)

    res.send({
        success: "Post created"
    })
}

module.exports = CreatePost