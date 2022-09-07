const VerifyCommentData = async (data) => {
    return new Promise((resolve, reject) => {
        try{ 
            let RegexValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!data.accessToken || !data.comment || !data.postId || !data.comment) {
                throw "Error: Type all Fields"
            }
        
            if (!data.email.match(RegexValidEmail)) {
                throw "Error: Invalid E-mail"
            }
        } catch (error) {
            reject(error)
        }
        resolve()
    })
}

module.exports = VerifyCommentData