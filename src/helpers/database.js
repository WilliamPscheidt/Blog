const mysql = require('mysql2/promise');

module.exports = function DatabaseProvider() {

    async function StartDatabase() {
        const configurations = require('../configurations/configurations.json')

        let databaseConnection = {}

        await mysql.createConnection({
            host: configurations.database.host,
            user: configurations.database.user,
            password: configurations.database.password,
            database: configurations.database.database
        }).then((result) => {
            databaseConnection = result
        }).catch(() => {
            throw "Error in database"
        })
    
        return databaseConnection
    }

    async function DropConnection(databaseConnection) {
        databaseConnection.end()
    }

    async function Execute(query) {
        const mysqlconnection = await StartDatabase()

        let connectionResults = {}
        await mysqlconnection.query(query).then((result) => {
            DropConnection(mysqlconnection)
            connectionResults = result
        })

        return connectionResults
    }

    return {
        Execute
    }
}