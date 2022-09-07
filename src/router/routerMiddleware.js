const apiTokenTest = require('../helpers/apiAuthentication')
const Close_API = require('../helpers/closeApi')
const SetHeader = require("../helpers/setheader")

const routerMiddleware = async (req, res, route) => {
    SetHeader(res)

    route = require('./routes/'+route)
    
    await apiTokenTest(req.body.token).catch((error) => {
        res.status(403).send ({
            error: error
        })
        Close_API
    })

    return route(req, res)
} 

module.exports = routerMiddleware