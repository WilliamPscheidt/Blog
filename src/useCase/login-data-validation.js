const LoginDataValidation = async (data) => {
    return new Promise((resolve, reject) => {
        try{ 
            let RegexValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (!data.email || !data.password) {
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

module.exports = LoginDataValidation