const DataValidation = async (data) => {
    return new Promise((resolve, reject) => {
        try{ 
            let RegexValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let RegexNotContainUppercase = /[A-Z]/g;
            let RegexNotContainNumbers = /[0-9]/g;

            if (data.password != data.repeatPassword) {
                throw "Error: Passwords doesn't match"
            }
        
            if (!data.name || !data.lastname || !data.email || !data.password || !data.repeatPassword) {
                throw "Error: Type all Fields"
            }
        
            if (!data.email.match(RegexValidEmail)) {
                throw "Error: Invalid E-mail"
            }
        
            if (password.lenght < 8) {
                throw "Error: Invalid Password (less than 8 characters)"
            }
        
            if (!data.password.match(RegexNotContainUppercase)) {
                throw "Error: Your password must contain uppercase characters"
            }
        
            if (!data.password.match(RegexNotContainNumbers)) {
                throw "Error: Your password must contain numbers"
            }
        } catch (error) {
            reject(error)
        }
        resolve()
    })
}

module.exports = DataValidation