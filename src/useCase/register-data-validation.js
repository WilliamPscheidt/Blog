module.exports = function DataValidation(data) {
    if(!data.name || !data.lastname || !data.email || !password) {
        throw "Error: Preencha os campos"
    }

    return data
}