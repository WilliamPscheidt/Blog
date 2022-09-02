const configuration = require('../configurations/configurations.json')

const apiTokenTest = async (token) => {
    if (token != configuration.api.token) {
        throw "API Key Invalid"
    }
}

module.exports = apiTokenTest