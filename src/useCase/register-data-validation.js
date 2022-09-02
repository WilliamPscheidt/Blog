module.exports = async function DataValidation(data) {
    console.log("DataValidation")
    return new Promise((resolve, reject) => {
        try{ 
            let RegexValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let RegexContainUpcase = /[A-Z]/g;
            let RegexContainNumbers = /[0-9]/g;
        
            if (!data.name || !data.lastname || !data.email || !data.password) {
                throw "Error: Type all Fields"
            }
        
            if (!data.email.match(RegexValidEmail)) {
                throw "Error: Invalid E-mail"
            }
        
            if (password.lenght <= 8) {
                throw "Error: Invalid Password (less than 8 characters)"
            }
        
            if (!data.password.match(RegexContainUpcase)) {
                throw "Error: Your password must cotain upcase characters"
            }
        
            if (!data.password.match(RegexContainNumbers)) {
                throw "Error: Your password must contain numbers"
            }
        } catch (error) {
            reject(error)
        }
        resolve()
    })
}