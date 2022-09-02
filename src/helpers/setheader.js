const SetHeader = (res) => {
    return res.set({
        'Access-Control-Allow-Origin': '*',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '0',
        'X-Content-Type-Options': 'nosniff',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Server': 'HTTP_SERVER',
        'X-Powered-By': 'Brasil_Livre',
    });
}

module.exports = SetHeader